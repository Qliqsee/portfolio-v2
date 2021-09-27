import styles from '../styles/Thumbnail.module.scss';
import Touch from './Touch';
import Button from './Button';

export default function Thumbnail({ modal, setModal }) {
  const toggleMenu = () => {
    setModal(false);
  };
  return (
    <div
      className={
        modal
          ? ` ${styles.thumbnail} ${styles.active}`
          : ` ${styles.thumbnail} `
      }
    >
      <div className={styles.close} onClick={toggleMenu}>
        <span className={styles.sp1}></span>
        <span className={styles.sp2}></span>
      </div>
      <div className={styles.card}>
        <div className={styles.image}>
          {/* <img src='/img1.jpg' alt='alt' /> */}
        </div>
        <div className={styles.info}>
          <div className={styles.title}>Education Website</div>
          <div className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            quia perferendis nisi aperiam ullam, provident cum nobis nam in eos!
            Doloremque aliquid qui iusto amet. Laborum porro doloribus quaerat
            lorem1000 omnis!
          </div>
          <div className={styles.details}>
            <div className={styles.detailsitem}>
              <span>Date:</span> 12 -Dec-2020{' '}
            </div>
            <div className={styles.detailsitem}>
              <span>Technology Used:</span> HTML, CSS
            </div>
            <div className={styles.detailsitem}>
              <span>Role:</span> Frontend
            </div>
            <div className={styles.detailsitem}>
              <Button href='/contact'>Vist Website</Button>
              {/* <span>Visit:</span> www.domain.com */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
