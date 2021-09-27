import styles from '../styles/Touch.module.scss';
import Link from 'next/link';

export default function Touch({ children }) {
  return <div className={styles.touch}>{children}</div>;
}
