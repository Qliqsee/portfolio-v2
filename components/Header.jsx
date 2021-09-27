import { useState } from 'react';
import styles from '../styles/Header.module.scss';

export default function Header({ menuOpen, setMenuOpen }) {
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
      <div
        className={
          menuOpen ? ` ${styles.header} ${styles.active}` : ` ${styles.header} `
        }
      >
        <div className={styles.container}>
          <div className={styles.logo}>
            <a href=''>Qliqsee.</a>
          </div>
          <div onClick={toggleMenu} className={styles.hamburger}>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
