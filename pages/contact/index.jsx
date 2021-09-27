import styles from '../../styles/Contact.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.title}>Contact Me</div>
      <div className={styles.cards}>
        <div className={`${styles.cardsitem} ${styles.phone}`}>
          <div className={`${styles.phone} ${styles.smallcard}`}>
            <span>
              <FontAwesomeIcon icon={faPhone} />
            </span>
            <span>0818 016 9270</span>
          </div>
        </div>
        <div className={`${styles.cardsitem}`}>
          <div className={`${styles.email} ${styles.smallcard}`}>
            <span>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <span>agboolaiyanusolomon@gmail.com</span>
          </div>
        </div>
        <div className={`${styles.cardsitem}`}>
          <div className={`${styles.socials} ${styles.smallcard}`}>
            {' '}
            <div className={styles.icon}>
              <span>
                <FontAwesomeIcon icon={faGithub} />
              </span>{' '}
              <span>
                <FontAwesomeIcon icon={faLinkedin} />
              </span>{' '}
              <span>
                <FontAwesomeIcon icon={faTwitter} />
              </span>
            </div>
            <span className={styles.follow}>Follow Me</span>
          </div>
        </div>
      </div>
      <form className={styles.forms}>
        <div className={styles.left}>
          <div className={styles.input}>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Name'
              required
            />
          </div>
          <div className={styles.input}>
            <input type='email' name='email' id='email' placeholder='email' />
          </div>
          <div className={styles.input}>
            <input
              type='text'
              name='subject'
              id='subject'
              placeholder='subject'
            />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.message}>
            <textarea
              placeholder=' Message'
              name='message'
              id='message'
            ></textarea>
          </div>
          <div className={styles.submit}>
            <button type='submit'>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}
