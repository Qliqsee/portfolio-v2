import styles from '../styles/Mode.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export default function Mode({ mode, setMode }) {
  const toggleMode = () => {
    setMode(!mode);
  };

  return (
    <div className={styles.mode} onClick={toggleMode}>
      <div className={styles.icon}>
        {mode ? (
          <FontAwesomeIcon icon={faSun} />
        ) : (
          <FontAwesomeIcon icon={faMoon} />
        )}
      </div>
    </div>
  );
}
