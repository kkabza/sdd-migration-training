import { Info, AlertTriangle, Lightbulb } from 'lucide-react';
import type { CalloutBlock } from '@/types';
import styles from './Callout.module.css';

type Props = Omit<CalloutBlock, 'type'>;

const icons = {
  info: Info,
  warning: AlertTriangle,
  tip: Lightbulb,
} as const;

export function Callout({ variant, title, text }: Props) {
  const Icon = icons[variant];

  return (
    <div className={`${styles.callout} ${styles[variant]}`} role="note">
      <Icon size={20} className={styles.icon} />
      <div className={styles.body}>
        {title && <div className={styles.title}>{title}</div>}
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
}
