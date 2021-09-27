import styles from '../styles/Card.module.scss';
import Button from './Button';
import Touch from './Touch';

export default function Card() {
  return (
    <div className={styles.card}>
      <img className={styles.image} src='/img1.jpg' alt='img' />
      <div className={styles.info}>
        <div className={styles.title}>Education Website</div>
        {/* <div className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quia
          perferendis nisi aperiam ullam, provident cum nobis nam in eos!
          Doloremque aliquid qui iusto amet. Laborum porro doloribus quaerat
          lorem1000 omnis!
        </div> */}
        <div className={styles.details}>
          <div className={styles.detailsitem}>
            <span>Date:</span> 12 -Dec-2020{' '}
          </div>
          <div className={styles.detailsitem}>
            <span>Technology Used:</span> HTML, CSS
          </div>
          <div className={styles.detailsitem}>
            <span>Category:</span> Website
          </div>
          <div className={styles.detailsitem}>
            <Button href='/contact'>Vist Website</Button>
            {/* <span>Visit:</span> www.domain.com */}
          </div>
        </div>
      </div>
    </div>
  );
}
