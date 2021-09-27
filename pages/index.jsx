import { useState } from 'react';
import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import Header from '../components/Header';
import Avatar from '../components/Avatar';
import Menu from '../components/Menu';
import Button from '../components/Button';
import { init } from 'ityped';
import { useRef, useEffect } from 'react';
import Effects from '../components/Effects';
import Mode from '../components/Mode';
import Layout from '../components/Layout';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mode, setMode] = useState(false);
  const roleRef = useRef();

  useEffect(() => {
    init(roleRef.current, {
      showCursor: false,
      strings: ['Software Engineer.', 'Frontend Web Developer.'],
    });
  }, []);

  return (
    // <Layout mode={mode} setMode={setMode}>
    <div className={styles.home}>
      <div className={styles.homeContainer}>
        <section className={styles.section2}>
          <div className={styles.intro}>
            <div className={styles.small}>
              Hello,
              <div className={styles.big}>I&apos;m Agboola Iyanu</div>
            </div>
            <div className={styles.medium} ref={roleRef}></div>
            <div className={styles.more}>
              <Button href='/about'>Read More</Button>
            </div>
          </div>
          <div className={styles.avatar}>
            <Avatar />
          </div>
        </section>
        <section className={styles.section4}>
          <div className={styles.effects}>
            <Effects />
          </div>
        </section>
      </div>
    </div>
    // </Layout>
  );
}
