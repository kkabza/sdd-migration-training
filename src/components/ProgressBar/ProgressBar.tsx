import styles from './ProgressBar.module.css';

interface ProgressBarProps {
  value: number;
  size?: 'sm' | 'md';
  light?: boolean;
}

export function ProgressBar({ value, size = 'md', light = false }: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, value));
  const isComplete = clamped === 100;

  return (
    <div
      className={`${styles.bar} ${styles[size]} ${!light ? styles.barDefault : ''}`}
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`${clamped}% complete`}
    >
      <div
        className={`${styles.fill} ${light ? styles.fillLight : ''} ${isComplete ? styles.fillComplete : ''}`}
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}
