import { Link } from 'react-router-dom';
import { Clock, BookOpen, ArrowRight } from 'lucide-react';
import { courses, totalLessonsForCourse } from '@/data/trainingContent';
import { ProgressBar } from '@/components/ProgressBar/ProgressBar';
import { useProgress } from '@/hooks/useProgress';
import styles from './CourseDashboard.module.css';

export function CourseDashboard() {
  const { getCourseProgress } = useProgress();

  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.msLogo}>
          <div className={styles.logoGrid}>
            <span style={{ background: '#f25022' }} />
            <span style={{ background: '#7fba00' }} />
            <span style={{ background: '#00a4ef' }} />
            <span style={{ background: '#ffb900' }} />
          </div>
        </div>
        <h1 className={styles.heroTitle}>SDD Training Platform</h1>
        <p className={styles.heroSub}>
          Spec-Driven Development — Training Courses
        </p>
        <p className={styles.heroOrg}>ISD — Engineering and Architecture Group</p>
      </header>

      <section className={styles.grid}>
        {courses.map((course) => {
          const lessonCount = totalLessonsForCourse(course.id);
          const progress = getCourseProgress(course);
          return (
            <Link key={course.id} to={`/course/${course.id}`} className={styles.card}>
              <div className={styles.cardAccent} />
              <div className={styles.cardBody}>
                <span className={styles.cardLabel}>{course.days.length}-Day Program</span>
                <h2 className={styles.cardTitle}>{course.title}</h2>
                <p className={styles.cardSubtitle}>{course.subtitle}</p>
                <p className={styles.cardDescription}>{course.description}</p>
                <div className={styles.cardMeta}>
                  <span><Clock size={14} /> {course.days.length * 8} hours</span>
                  <span><BookOpen size={14} /> {lessonCount} lessons</span>
                  <span>{course.modules.length} modules</span>
                </div>
                {progress > 0 && (
                  <div className={styles.cardProgress}>
                    <span className={styles.progressText}>{progress}% complete</span>
                    <ProgressBar value={progress} />
                  </div>
                )}
                <div className={styles.cardAction}>
                  {progress > 0 ? 'Continue Course' : 'Start Course'} <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
}
