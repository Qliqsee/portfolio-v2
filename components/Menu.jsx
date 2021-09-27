import React from 'react';
import styles from '../styles/Menu.module.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

export default function Menu({ menuOpen, setMenuOpen }) {
  const toggleMenu = () => {
    setMenuOpen(false);
  };
  return (
    <div
      className={
        menuOpen ? ` ${styles.menu} ${styles.active}` : ` ${styles.menu} `
      }
    >
      <div className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <span onClick={toggleMenu}>
              <Link href='/'>Home</Link>
            </span>
          </li>
          <li>
            <span onClick={toggleMenu}>
              <Link href='/about'>About</Link>
            </span>
          </li>
          <li>
            <span onClick={toggleMenu}>
              <Link href='/portfolio'>Portfolio</Link>
            </span>
          </li>
          <li>
            <span onClick={toggleMenu}>
              <Link href='/contact'>Contact</Link>
            </span>
          </li>
        </ul>
        <div className={styles.socialz}>
          <div className={styles.socialzText}>
            <span className={styles.textz}>Connect with me</span>
          </div>
          <div className={styles.iconz}>
            <span className={styles.github}>
              <FontAwesomeIcon icon={faGithub} />
            </span>
            <span className={styles.twitter}>
              <FontAwesomeIcon icon={faTwitter} />
            </span>
            <span className={styles.linkedin}>
              <FontAwesomeIcon icon={faLinkedin} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
