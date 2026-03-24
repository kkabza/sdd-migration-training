import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import styles from './Breadcrumb.module.css';

interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
            {i > 0 && <ChevronRight size={14} className={styles.separator} />}
            {isLast || !item.to ? (
              <span className={isLast ? styles.current : ''}>{item.label}</span>
            ) : (
              <Link to={item.to} className={styles.link}>{item.label}</Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
