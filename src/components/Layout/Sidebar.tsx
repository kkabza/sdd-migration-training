import { Link, useParams } from 'react-router-dom';
import { CheckCircle2, LogOut } from 'lucide-react';
import { getCourseById, getModulesForDay } from '@/data/trainingContent';
import { useProgress } from '@/hooks/useProgress';
import { useMsal } from '@/MsalProvider';
import styles from './Sidebar.module.css';

interface SidebarProps {
  onNavigate: () => void;
}

function MicrosoftLogo() {
  return (
    <svg className={styles.msLogo} width="21" height="21" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="9" height="9" fill="#f25022" />
      <rect x="11" y="1" width="9" height="9" fill="#7fba00" />
      <rect x="1" y="11" width="9" height="9" fill="#00a4ef" />
      <rect x="11" y="11" width="9" height="9" fill="#ffb900" />
    </svg>
  );
}

export function Sidebar({ onNavigate }: SidebarProps) {
  const params = useParams();
  const { courseId } = params;
  const { isLessonComplete } = useProgress();
  const { accounts, logout } = useMsal();
  const userName = accounts[0]?.name || accounts[0]?.username || '';
  const course = courseId ? getCourseById(courseId) : undefined;

  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav} aria-label="Training navigation">
        {course?.days.map((day) => (
          <div key={day.id} className={styles.dayGroup}>
            <div className={styles.dayLabel}>Day {day.number}: {day.title}</div>
            {getModulesForDay(day.id).map((mod) => {
              const isActiveModule = params.moduleId === mod.id;
              return (
                <div key={mod.id} className={styles.moduleItem}>
                  <Link
                    to={`/course/${courseId}/day/${day.id}/module/${mod.id}`}
                    className={`${styles.moduleLink} ${isActiveModule ? styles.moduleLinkActive : ''}`}
                    onClick={onNavigate}
                  >
                    {mod.number}. {mod.title}
                  </Link>
                  {isActiveModule && (
                    <div className={styles.lessonList}>
                      {mod.lessons.map((lesson) => {
                        const isActiveLesson = params.lessonId === lesson.id;
                        const completed = isLessonComplete(lesson.id);
                        return (
                          <Link
                            key={lesson.id}
                            to={`/course/${courseId}/day/${day.id}/module/${mod.id}/lesson/${lesson.id}`}
                            className={`${styles.lessonLink} ${isActiveLesson ? styles.lessonLinkActive : ''}`}
                            onClick={onNavigate}
                          >
                            {completed && <CheckCircle2 size={14} className={styles.check} />}
                            {lesson.number}. {lesson.title}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </nav>
      {userName && (
        <div className={styles.userBar}>
          <span className={styles.userName}>{userName}</span>
          <button className={styles.logoutBtn} onClick={() => logout()} title="Sign out">
            <LogOut size={14} />
          </button>
        </div>
      )}
      <div className={styles.footer}>
        <MicrosoftLogo />
        <div className={styles.footerText}>
          ISD &mdash; Engineering and Architecture Group
          <span className={styles.version}>v{__APP_VERSION__}</span>
        </div>
      </div>
    </div>
  );
}
