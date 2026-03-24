import { useRef, useState, useCallback } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';
import { useMediaPosition } from '@/hooks/useMediaPosition';
import type { MediaItem } from '@/types';
import styles from './AudioPlayer.module.css';

const SPEEDS = [0.5, 1, 1.25, 1.5, 2] as const;

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

interface Props {
  media: MediaItem;
}

export function AudioPlayer({ media }: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { savedPosition, savePosition } = useMediaPosition(media.id);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [speed, setSpeed] = useState(1);
  const [hasError, setHasError] = useState(false);

  const togglePlay = useCallback(() => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) { a.play(); setPlaying(true); }
    else { a.pause(); setPlaying(false); }
  }, []);

  const handleTimeUpdate = useCallback(() => {
    const a = audioRef.current;
    if (a) {
      setCurrentTime(a.currentTime);
      savePosition(a.currentTime);
    }
  }, [savePosition]);

  const cycleSpeed = useCallback(() => {
    const a = audioRef.current;
    if (!a) return;
    const idx = SPEEDS.indexOf(speed as typeof SPEEDS[number]);
    const next = SPEEDS[(idx + 1) % SPEEDS.length]!;
    a.playbackRate = next;
    setSpeed(next);
  }, [speed]);

  if (hasError) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.error}>Audio unavailable</div>
      </div>
    );
  }

  return (
    <div>
      <audio
        ref={audioRef}
        src={media.src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={() => {
          const a = audioRef.current;
          if (a) {
            setDuration(a.duration);
            if (savedPosition > 0) a.currentTime = savedPosition;
          }
        }}
        onError={() => setHasError(true)}
        onEnded={() => setPlaying(false)}
      />
      <div className={styles.wrapper}>
        <button className={styles.playBtn} onClick={togglePlay} aria-label={playing ? 'Pause' : 'Play'}>
          {playing ? <Pause size={18} /> : <Play size={18} />}
        </button>
        <input
          type="range"
          className={styles.timeline}
          min={0}
          max={duration || 0}
          step={0.1}
          value={currentTime}
          onChange={(e) => { if (audioRef.current) audioRef.current.currentTime = Number(e.target.value); }}
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
      {media.title && <div className={styles.title}>{media.title}</div>}
    </div>
  );
}
