import styles from '../../styles/Portfolio.module.scss';
import Card from '../../components/Card';
import Touch from '../../components/Touch';
import Thumbnail from '../../components/Thumbnail';
import Button from '../../components/Button';
import Image from 'next/image';
import { useState } from 'react';

export default function Portfolio({}) {
  const [modal, setModal] = useState(true);
  return (
    <div className={styles.portfolio}>
      <div className={styles.title}>Portfolio</div>
      <div className={styles.cards}>
        <div className={styles.carditems}>
          <div className={styles.image}>
            <Image src='/img1.jpg' alt='ss' width={900} height={400} />
          </div>

          <div className={styles.info}>
            <div className={styles.head}>Education Website</div>
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
              </div>
            </div>
          </div>
        </div>

        <div className={styles.carditems}>
          <div className={styles.image}>
            <Image src='/img1.jpg' alt='ss' width={900} height={400} />
          </div>

          <div className={styles.info}>
            <div className={styles.head}>Education Website</div>
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
              </div>
            </div>
          </div>
        </div>

        <div className={styles.carditems}>
          <div className={styles.image}>
            <Image src='/img1.jpg' alt='ss' width={900} height={400} />
          </div>

          <div className={styles.info}>
            <div className={styles.head}>Education Website</div>
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
              </div>
            </div>
          </div>
        </div>

        <div className={styles.carditems}>
          <div className={styles.image}>
            <Image src='/img1.jpg' alt='ss' width={900} height={400} />
          </div>

          <div className={styles.info}>
            <div className={styles.head}>Education Website</div>
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
              </div>
            </div>
          </div>
        </div>

        <div className={styles.carditems}>
          <div className={styles.image}>
            <Image src='/img1.jpg' alt='ss' width={900} height={400} />
          </div>

          <div className={styles.info}>
            <div className={styles.head}>Education Website</div>
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
              </div>
            </div>
          </div>
        </div>

        <div className={styles.carditems}>
          <div className={styles.image}>
            <Image src='/img1.jpg' alt='ss' width={900} height={400} />
          </div>

          <div className={styles.info}>
            <div className={styles.head}>My widows ...</div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
