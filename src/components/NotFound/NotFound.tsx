import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

export function NotFound() {
  return (
    <div className={styles.page}>
      <div className={styles.code}>404</div>
      <div className={styles.message}>Page not found</div>
      <Link to="/" className={styles.link}>Back to dashboard</Link>
    </div>
  );
}
