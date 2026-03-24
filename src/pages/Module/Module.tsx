import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { getModuleById, getDayById } from '@/data/trainingContent';
import { Breadcrumb } from '@/components/Breadcrumb/Breadcrumb';
import { ProgressBar } from '@/components/ProgressBar/ProgressBar';
import { useProgress } from '@/hooks/useProgress';
import styles from './Module.module.css';

export function ModulePage() {
  const { courseId, dayId, moduleId } = useParams();
  const { getModuleProgress, isLessonComplete } = useProgress();

  const mod = moduleId ? getModuleById(moduleId) : undefined;
  const day = dayId ? getDayById(dayId) : undefined;

  if (!mod || !day) return <Navigate to="/404" replace />;

  const progress = getModuleProgress(mod);
  const firstLesson = mod.lessons[0];

  return (
    <div className={styles.page}>
      <Breadcrumb items={[
        { label: 'Home', to: `/course/${courseId}` },
        { label: `Day ${day.number}: ${day.title}` },
        { label: `Module ${mod.number}: ${mod.title}` },
      ]} />

      <div className={styles.header}>
        <h1 className={styles.title}>Module {mod.number}: {mod.title}</h1>
        <p className={styles.description}>{mod.description}</p>
        <div className={styles.progressRow}>
          <span className={styles.progressLabel}>{progress}%</span>
          <ProgressBar value={progress} />
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Learning Objectives</h2>
        <ul className={styles.objectivesList}>
          {mod.objectives.map((obj, i) => (
            <li key={i}>{obj}</li>
          ))}
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Lessons</h2>
        <div className={styles.lessonList}>
          {mod.lessons.map((lesson) => {
            const completed = isLessonComplete(lesson.id);
            return (
              <Link
                key={lesson.id}
                to={`/course/${courseId}/day/${day.id}/module/${mod.id}/lesson/${lesson.id}`}
                className={styles.lessonCard}
              >
                <div className={`${styles.lessonNumber} ${completed ? styles.lessonCompleted : ''}`}>
                  {completed ? <CheckCircle2 size={16} /> : lesson.number}
                </div>
                <div className={styles.lessonInfo}>
                  <div className={styles.lessonTitle}>{lesson.title}</div>
                  <div className={styles.lessonDuration}>{lesson.duration}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {firstLesson && (
        <Link to={`/course/${courseId}/day/${day.id}/module/${mod.id}/lesson/${firstLesson.id}`} className={styles.startBtn}>
          Start Module <ArrowRight size={16} />
        </Link>
      )}
    </div>
  );
}
