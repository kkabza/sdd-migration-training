import { useMsal } from '@/MsalProvider';
import styles from './Login.module.css';

export function Login() {
  const { login, inProgress } = useMsal();

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <div className={styles.msLogo}>
          <div className={styles.logoGrid}>
            <span style={{ background: '#f25022' }} />
            <span style={{ background: '#7fba00' }} />
            <span style={{ background: '#00a4ef' }} />
            <span style={{ background: '#ffb900' }} />
          </div>
        </div>
        <h1 className={styles.title}>SDD Training Platform</h1>
        <p className={styles.subtitle}>Spec-Driven Development — Training Courses</p>
        <button
          className={styles.loginButton}
          onClick={() => login()}
          disabled={inProgress}
        >
          {inProgress ? 'Signing in…' : 'Sign in with Microsoft'}
        </button>
        <p className={styles.org}>ISD — Engineering and Architecture Group</p>
      </div>
    </div>
  );
}
