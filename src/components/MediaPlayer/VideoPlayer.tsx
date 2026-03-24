import { useRef, useState, useEffect, useCallback } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';
import { useMediaPosition } from '@/hooks/useMediaPosition';
import type { MediaItem } from '@/types';
import styles from './VideoPlayer.module.css';

const SPEEDS = [0.5, 1, 1.25, 1.5, 2] as const;

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

interface Props {
  media: MediaItem;
}

export function VideoPlayer({ media }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { savedPosition, savePosition } = useMediaPosition(media.id);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (v && savedPosition > 0) {
      v.currentTime = savedPosition;
    }
  }, [savedPosition]);

  const handleTimeUpdate = useCallback(() => {
    const v = videoRef.current;
    if (v) {
      setCurrentTime(v.currentTime);
      savePosition(v.currentTime);
    }
  }, [savePosition]);

  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  }, []);

  const handleSeek = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const v = videoRef.current;
    if (v) {
      v.currentTime = Number(e.target.value);
    }
  }, []);

  const handleVolume = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const v = videoRef.current;
    const val = Number(e.target.value);
    if (v) { v.volume = val; }
    setVolume(val);
    setMuted(val === 0);
  }, []);

  const toggleMute = useCallback(() => {
    const v = videoRef.current;
    if (v) {
      v.muted = !v.muted;
      setMuted(!muted);
    }
  }, [muted]);

  const cycleSpeed = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    const idx = SPEEDS.indexOf(speed as typeof SPEEDS[number]);
    const next = SPEEDS[(idx + 1) % SPEEDS.length]!;
    v.playbackRate = next;
    setSpeed(next);
  }, [speed]);

  const handleFullscreen = useCallback(() => {
    videoRef.current?.requestFullscreen?.();
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    const v = videoRef.current;
    if (!v) return;
    switch (e.key) {
      case ' ': e.preventDefault(); togglePlay(); break;
      case 'ArrowLeft': v.currentTime = Math.max(0, v.currentTime - 10); break;
      case 'ArrowRight': v.currentTime = Math.min(v.duration, v.currentTime + 10); break;
      case 'ArrowUp': e.preventDefault(); v.volume = Math.min(1, v.volume + 0.1); setVolume(v.volume); break;
      case 'ArrowDown': e.preventDefault(); v.volume = Math.max(0, v.volume - 0.1); setVolume(v.volume); break;
      case 'f': handleFullscreen(); break;
    }
  }, [togglePlay, handleFullscreen]);

  if (hasError) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.error}>Content unavailable</div>
        {media.title && <div className={styles.title}>{media.title}</div>}
      </div>
    );
  }

  return (
    <div>
      <div className={styles.wrapper} tabIndex={0} onKeyDown={handleKeyDown}>
        <video
          ref={videoRef}
          className={styles.video}
          poster={media.poster}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={() => { if (videoRef.current) setDuration(videoRef.current.duration); }}
          onError={() => setHasError(true)}
          onEnded={() => setPlaying(false)}
          onClick={togglePlay}
        >
          <source src={media.src} />
          {media.captionsSrc && <track kind="captions" src={media.captionsSrc} />}
        </video>
        <div className={styles.controls}>
          <input
            type="range"
            className={styles.timeline}
            min={0}
            max={duration || 0}
            step={0.1}
            value={currentTime}
            onChange={handleSeek}
            aria-label="Seek"
          />
          <div className={styles.controlRow}>
            <button className={styles.controlBtn} onClick={togglePlay} aria-label={playing ? 'Pause' : 'Play'}>
              {playing ? <Pause size={20} /> : <Play size={20} />}
            </button>
            <span className={styles.time}>{formatTime(currentTime)} / {formatTime(duration)}</span>
            <button className={styles.controlBtn} onClick={toggleMute} aria-label={muted ? 'Unmute' : 'Mute'}>
              {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
            <input
              type="range"
              className={styles.volume}
              min={0}
              max={1}
              step={0.05}
              value={muted ? 0 : volume}
              onChange={handleVolume}
              aria-label="Volume"
            />
            <div className={styles.spacer} />
            <button className={styles.speedBtn} onClick={cycleSpeed} aria-label="Playback speed">
              {speed}x
            </button>
            <button className={styles.controlBtn} onClick={handleFullscreen} aria-label="Fullscreen">
              <Maximize size={18} />
            </button>
          </div>
        </div>
      </div>
      {media.title && <div className={styles.title}>{media.title}</div>}
    </div>
  );
}
