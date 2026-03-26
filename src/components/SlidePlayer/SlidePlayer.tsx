import { useRef, useState, useCallback, useMemo } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import type { Slide } from '@/types';
import styles from './SlidePlayer.module.css';

const SPEEDS = [0.5, 1, 1.25, 1.5, 2] as const;

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

interface Props {
  audioSrc: string;
  slides: Slide[];
}

export function SlidePlayer({ audioSrc, slides }: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [speed, setSpeed] = useState(1);
  const [hasStarted, setHasStarted] = useState(false);

  const currentSlideIndex = useMemo(() => {
    let idx = 0;
    for (let i = slides.length - 1; i >= 0; i--) {
      if (currentTime >= slides[i]!.startTime) { idx = i; break; }
    }
    return idx;
  }, [currentTime, slides]);

  const togglePlay = useCallback(() => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      a.play();
      setPlaying(true);
      setHasStarted(true);
    } else {
      a.pause();
      setPlaying(false);
    }
  }, []);

  const handleTimeUpdate = useCallback(() => {
    const a = audioRef.current;
    if (a) setCurrentTime(a.currentTime);
  }, []);

  const seekToSlide = useCallback((index: number) => {
    const a = audioRef.current;
    if (!a || index < 0 || index >= slides.length) return;
    a.currentTime = slides[index]!.startTime;
    setCurrentTime(slides[index]!.startTime);
  }, [slides]);

  const cycleSpeed = useCallback(() => {
    const a = audioRef.current;
    if (!a) return;
    const idx = SPEEDS.indexOf(speed as typeof SPEEDS[number]);
    const next = SPEEDS[(idx + 1) % SPEEDS.length]!;
    a.playbackRate = next;
    setSpeed(next);
  }, [speed]);

  const calloutVariantIcon = (variant: string) => {
    if (variant === 'warning') return '⚠️';
    if (variant === 'tip') return '💡';
    return 'ℹ️';
  };

  const calloutVariantClass = (variant: string) => {
    if (variant === 'warning') return styles.calloutWarning;
    if (variant === 'tip') return styles.calloutTip;
    return styles.calloutInfo;
  };

  const renderSlide = (slide: Slide, index: number) => {
    const layout = slide.layout ?? 'bullets';
    const isActive = index === currentSlideIndex;
    const layoutClass = {
      title: styles.layoutTitle,
      bullets: styles.layoutBullets,
      split: styles.layoutSplit,
      callout: styles.layoutCallout,
    }[layout];

    return (
      <div
        key={index}
        className={`${styles.slide} ${layoutClass} ${isActive ? styles.slideActive : ''}`}
      >
        {layout === 'title' && (
          <>
            {slide.image && <img src={slide.image} alt="" className={styles.slideImage} />}
            <div className={styles.slideTitle}>{slide.title}</div>
            {slide.subtitle && <div className={styles.slideSubtitle}>{slide.subtitle}</div>}
          </>
        )}

        {layout === 'bullets' && (
          <>
            <div className={styles.slideTitle}>{slide.title}</div>
            {slide.subtitle && <p className={`${styles.slideSubtitle} ${styles.bulletSubtitle}`}>{slide.subtitle}</p>}
            {slide.bullets && (
              <ul className={styles.bulletList}>
                {slide.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            )}
          </>
        )}

        {layout === 'split' && (
          <>
            <div className={styles.splitText}>
              <div className={styles.slideTitle}>{slide.title}</div>
              {slide.bullets && (
                <ul className={styles.bulletList}>
                  {slide.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              )}
            </div>
            {slide.image && (
              <div className={styles.splitImage}>
                <img src={slide.image} alt="" />
              </div>
            )}
          </>
        )}

        {layout === 'callout' && (
          <>
            <div className={styles.slideTitle}>{slide.title}</div>
            {slide.callout && (
              <div className={`${calloutVariantClass(slide.callout.variant)}`}>
                <span className={styles.calloutIcon}>{calloutVariantIcon(slide.callout.variant)}</span>
                <div className={styles.calloutText}>{slide.callout.text}</div>
              </div>
            )}
            {slide.bullets && (
              <ul className={styles.bulletList} style={{ marginTop: '1rem' }}>
                {slide.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            )}
          </>
        )}
      </div>
    );
  };

  return (
    <div className={styles.player}>
      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={() => {
          const a = audioRef.current;
          if (a) setDuration(a.duration);
        }}
        onEnded={() => setPlaying(false)}
      />

      {/* Slide viewport */}
      <div className={styles.viewport} onClick={togglePlay}>
        {slides.map((slide, i) => renderSlide(slide, i))}

        {/* Slide counter */}
        <div className={styles.slideCounter}>
          {currentSlideIndex + 1} / {slides.length}
        </div>

        {/* Big play button overlay before first interaction */}
        {!hasStarted && (
          <div className={styles.playOverlay}>
            <div className={styles.bigPlayBtn}>
              <Play size={32} style={{ marginLeft: 4 }} />
            </div>
          </div>
        )}
      </div>

      {/* Transport controls */}
      <div className={styles.controls}>
        <button className={styles.controlBtn} onClick={togglePlay} aria-label={playing ? 'Pause' : 'Play'}>
          {playing ? <Pause size={18} /> : <Play size={18} />}
        </button>
        <button className={styles.controlBtn} onClick={() => seekToSlide(currentSlideIndex - 1)} aria-label="Previous slide">
          <SkipBack size={16} />
        </button>
        <button className={styles.controlBtn} onClick={() => seekToSlide(currentSlideIndex + 1)} aria-label="Next slide">
          <SkipForward size={16} />
        </button>

        <input
          type="range"
          className={styles.timeline}
          min={0}
          max={duration || 0}
          step={0.1}
          value={currentTime}
          onChange={(e) => {
            const a = audioRef.current;
            if (a) a.currentTime = Number(e.target.value);
          }}
          aria-label="Seek"
        />

        <span className={styles.time}>{formatTime(currentTime)} / {formatTime(duration)}</span>

        <Volume2 size={16} style={{ color: 'var(--color-text-secondary)' }} />
        <input
          type="range"
          className={styles.volumeSlider}
          min={0}
          max={1}
          step={0.05}
          value={volume}
          onChange={(e) => {
            const val = Number(e.target.value);
            if (audioRef.current) audioRef.current.volume = val;
            setVolume(val);
          }}
          aria-label="Volume"
        />

        <button className={styles.speedBtn} onClick={cycleSpeed} aria-label="Playback speed">
          {speed}x
        </button>
      </div>
    </div>
  );
}
