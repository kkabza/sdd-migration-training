import { Link } from 'react-router-dom';
import { Clock, BookOpen } from 'lucide-react';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import type { Module } from '@/types';
import styles from './ModuleCard.module.css';

interface ModuleCardProps {
  module: Module;
  courseId: string;
  progress: number;
}

export function ModuleCard({ module, courseId, progress }: ModuleCardProps) {
  const isComplete = progress === 100;

  return (
    <Link
      to={`/course/${courseId}/day/${module.dayId}/module/${module.id}`}
      className={styles.card}
    >
      <div className={styles.topRow}>
        <span className={styles.moduleNumber}>Module {module.number}</span>
        {isComplete && <span className={styles.badge}>Completed</span>}
      </div>
      <h3 className={styles.title}>{module.title}</h3>
      <p className={styles.description}>{module.description}</p>
      <div className={styles.meta}>
        <span className={styles.metaItem}><Clock size={14} /> {module.duration}</span>
        <span className={styles.metaItem}><BookOpen size={14} /> {module.lessons.length} lessons</span>
      </div>
      <ProgressBar value={progress} size="sm" />
    </Link>
  );
}
