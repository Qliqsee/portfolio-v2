import React from 'react';
import { useState } from 'react/cjs/react.development';
import styles from '../../styles/About.module.scss';
import Button from '../../components/Button';
import Image from 'next/image';

export default function About() {
  const [tab, setTab] = useState(true);

  const toggleTab = () => {
    setTab(!tab);
  };
  return (
    <div className={`${styles.about}`}>
      <div className={styles.title}>About Me</div>

      <div className={styles.wrapper}>
        <div className={styles.left}>
          <span>
            <Image src='/hacker.png' alt='ss' width={300} height={400} />
          </span>
        </div>

        <div className={styles.right}>
          <div className={styles.description}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            alias error nulla cum suscipit culpa tempora quae animi accusamus
            unde eveniet deleniti laudantium dolorum laboriosam minus nobis quis
            pariatur ipsum reprehenderit? Quam repudiandae amet tenetur optio
            expedita libero ea, deserunt rem suscipit numquam accusamus vel
            magni sed nesciunt voluptate debitis nisi atque. Aliquam at velit
            nemo doloremque adipisci sequi dolores quas repudiandae accusamus
            eum excepturi rerum eius, sapiente non blanditiis esse eligendi
            itaque ipsum nesciunt nulla, quam consequatur maxime. Inventore vel
            dignissimos eligendi reiciendis quo facere ullam voluptates unde
            natus porro? Dolorum impedit ratione similique laborum ad, delectus
            magni doloremque!
          </div>

          <div className={styles.skills}>
            <div className={styles.small}>
              <span>Skills</span>
            </div>

            <div className={styles.skillsets}>
              <span>Javascript</span>
              <span>React</span>
              <span>Next.js</span>
              <span>Gatsby</span>
              <span>Git</span>
              <span>Bootstrap</span>
              <span>Sass</span>
              <span>Material UI</span>
              <span>Tailwind CSS</span>
            </div>
          </div>

          <div className={styles.edex}>
            <div className={styles.tab}>
              <span
                className={tab ? `${styles.active}` : ``}
                onClick={toggleTab}
              >
                Experience
              </span>
              <span
                className={tab ? `` : `${styles.active}`}
                onClick={toggleTab}
              >
                Education
              </span>
            </div>
            <div className={tab ? `${styles.info}` : `hidden`}>
              <div className={styles.tabcontent}>
                <div className={styles.timeline}>
                  <div className={styles.timelineitem}>
                    <div className={styles.date}>
                      <span>2014 - 2019</span>
                    </div>
                    <div className={styles.degree}>
                      B.eng Electrical and Electronics Engineering |
                      <span> Federal University of Technology, Minna</span>
                    </div>
                    <div className={styles.bio}>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Provident possimus animi tempore blanditiis reiciendis
                      recusandae rerum quas quibusdam minima quis assumenda
                      harum nulla ut quam, nemo officiis rem voluptatem soluta?{' '}
                    </div>
                  </div>
                  <div className={styles.timelineitem}>
                    <div className={styles.date}>
                      <span>2014 - 2019</span>
                    </div>
                    <div className={styles.degree}>
                      B.eng Electrical and Electronics Engineering |
                      <span> Federal University of Technology, Minna</span>
                    </div>
                    <div className={styles.bio}>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Provident possimus animi tempore blanditiis reiciendis
                      recusandae rerum quas quibusdam minima quis assumenda
                      harum nulla ut quam, nemo officiis rem voluptatem soluta?{' '}
                    </div>
                  </div>
                  <div className={styles.timelineitem}>
                    <div className={styles.date}>
                      <span>2014 - 2019</span>
                    </div>
                    <div className={styles.degree}>
                      B.eng Electrical and Electronics Engineering |
                      <span> Federal University of Technology, Minna</span>
                    </div>
                    <div className={styles.bio}>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Provident possimus animi tempore blanditiis reiciendis
                      recusandae rerum quas quibusdam minima quis assumenda
                      harum nulla ut quam, nemo officiis rem voluptatem soluta?{' '}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={tab ? `hidden` : `${styles.info}`}>
              <div className={styles.tabcontent}>
                <div className={styles.timeline}>
                  <div className={styles.timelineitem}>
                    <div className={styles.date}>
                      <span>2012 - 2019</span>
                    </div>
                    <div className={styles.degree}>
                      B.eng Electrical and Electronics Engineering |
                      <span> Federal University of Technology, Minna</span>
                    </div>
                    <div className={styles.bio}>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Provident possimus animi tempore blanditiis reiciendis
                      recusandae rerum quas quibusdam minima quis assumenda
                      harum nulla ut quam, nemo officiis rem voluptatem soluta?{' '}
                    </div>
                  </div>
                  <div className={styles.timelineitem}>
                    <div className={styles.date}>
                      <span>2014 - 2019</span>
                    </div>
                    <div className={styles.degree}>
                      B.eng Electrical and Electronics Engineering |
                      <span> Federal University of Technology, Minna</span>
                    </div>
                    <div className={styles.bio}>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Provident possimus animi tempore blanditiis reiciendis
                      recusandae rerum quas quibusdam minima quis assumenda
                      harum nulla ut quam, nemo officiis rem voluptatem soluta?{' '}
                    </div>
                  </div>
                  <div className={styles.timelineitem}>
                    <div className={styles.date}>
                      <span>2014 - 2019</span>
                    </div>
                    <div className={styles.degree}>
                      B.eng Electrical and Electronics Engineering |
                      <span> Federal University of Technology, Minna</span>
                    </div>
                    <div className={styles.bio}>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Provident possimus animi tempore blanditiis reiciendis
                      recusandae rerum quas quibusdam minima quis assumenda
                      harum nulla ut quam, nemo officiis rem voluptatem soluta?{' '}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.btn}>
            <div className={styles.btns}>
              <Button href='/contact'>Download Resume</Button>
            </div>
            <div className={styles.btns}>
              <Button href='/contact'>Contact Me</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
