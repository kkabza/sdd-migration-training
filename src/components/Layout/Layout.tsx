import { useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { BookOpen, Menu, X } from 'lucide-react';
import { Sidebar } from './Sidebar';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { useProgress } from '@/hooks/useProgress';
import { getCourseById } from '@/data/trainingContent';
import styles from './Layout.module.css';

export function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { courseId } = useParams();
  const { getCourseProgress } = useProgress();
  const course = courseId ? getCourseById(courseId) : undefined;
  const pct = course ? getCourseProgress(course) : 0;

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.logoArea}>
          <button
            className={styles.menuButton}
            onClick={() => setSidebarOpen((o) => !o)}
            aria-label={sidebarOpen ? 'Close menu' : 'Open menu'}
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <Link to={`/course/${courseId}`}>
            <BookOpen size={24} />
            <span className={styles.logoTitle}>{course?.title ?? 'SDD Training'}</span>
          </Link>
        </div>
        <div className={styles.headerRight}>
          <Link to="/" className={styles.backLink}>All Courses</Link>
          <span className={styles.progressLabel}>{pct}% complete</span>
          <ProgressBar value={pct} size="sm" light />
        </div>
      </header>

      <aside className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ''}`}>
        <Sidebar onNavigate={() => setSidebarOpen(false)} />
      </aside>

      {sidebarOpen && (
        <div className={styles.overlay} onClick={() => setSidebarOpen(false)} />
      )}

      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}
