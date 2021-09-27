import styles from '../styles/Button.module.scss';
import Link from 'next/link';

export default function Button({ children, href }) {
  return (
    <Link href={href} passHref>
      <div className={styles.button}>{children}</div>
    </Link>
  );
}
