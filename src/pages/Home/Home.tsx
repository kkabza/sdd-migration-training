import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getCourseById, getModulesForDay, getModuleForLesson, getDayById, getCourseForLesson } from '@/data/trainingContent';
import { ModuleCard } from '@/components/ModuleCard/ModuleCard';
import { useProgress } from '@/hooks/useProgress';
import styles from './Home.module.css';

export function Home() {
  const { courseId } = useParams();
  const { getModuleProgress, lastVisitedLesson } = useProgress();

  const course = courseId ? getCourseById(courseId) : undefined;
  if (!course) return <Navigate to="/" replace />;

  const resumeModule = lastVisitedLesson ? getModuleForLesson(lastVisitedLesson) : null;
  const resumeDay = resumeModule ? getDayById(resumeModule.dayId) : null;
  const resumeCourse = lastVisitedLesson ? getCourseForLesson(lastVisitedLesson) : null;
  const showResume = resumeModule && resumeDay && resumeCourse?.id === courseId;

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>{course.title}</h1>
        <p className={styles.heroSub}>{course.subtitle}</p>
      </div>

      {showResume && lastVisitedLesson && resumeModule && resumeDay && (
        <div className={styles.resumeBanner}>
          <span className={styles.resumeText}>
            Continue where you left off in <strong>{resumeModule.title}</strong>
          </span>
          <Link
            to={`/course/${courseId}/day/${resumeDay.id}/module/${resumeModule.id}/lesson/${lastVisitedLesson}`}
            className={styles.resumeLink}
          >
            Resume <ArrowRight size={14} style={{ verticalAlign: 'middle' }} />
          </Link>
        </div>
      )}

      {course.days.map((day) => {
        const dayModules = getModulesForDay(day.id);
        return (
          <section key={day.id} className={styles.daySection}>
            <div className={styles.dayHeader}>
              <span className={styles.dayLabel}>Day {day.number}</span>
              <h2 className={styles.dayTitle}>{day.title}</h2>
            </div>
            <p className={styles.dayDescription}>{day.description}</p>
            <div className={styles.moduleGrid}>
              {dayModules.map((mod) => (
                <ModuleCard key={mod.id} module={mod} courseId={courseId!} progress={getModuleProgress(mod)} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
