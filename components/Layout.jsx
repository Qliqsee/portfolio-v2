import { useState } from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import { useRef, useEffect } from 'react';
import Mode from '../components/Mode';
import styles from '../styles/Layout.module.scss';

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mode, setMode] = useState(false);

  return (
    <div className={mode ? 'body' : 'body light'}>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className={`${styles.layoutContainer} `}>
        {' '}
        <section className={`${styles.section1}`}>
          <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </section>
        <section className={styles.section3}>
          <Mode mode={mode} setMode={setMode} />
        </section>
        <div className={menuOpen ? 'hidden' : ''}>{children}</div>
      </div>
    </div>
  );
}
