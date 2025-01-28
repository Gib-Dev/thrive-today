import Image from 'next/image';
import Link from 'next/link';
import styles from './EventsSection.module.css';
import yoga from '@/public/yoga.jpg';
import wcorde from '@/public/hiit.jpg';
import martial from '@/public/martial.jpg';

export default function EventsSection() {
  return <>
    <section id="events" className={styles['events-section']}>
      <h2 className={styles['section-title']}>Événements à venir</h2>
      <div className={styles['event-list']}>
        <div className={styles['event-card']}>
          <Image
            src={yoga}
            alt="Cours de Yoga"
            width={400}
            height={250}
            className={styles['event-image']}
          />
          <h3>Cours de Yoga</h3>
          <p>Séance revitalisante de yoga pour tous.</p>
          <Link href="/events/yoga" className={styles['event-link']}>
            En savoir plus
          </Link>
        </div>
        <div className={styles['event-card']}>
          <Image
            src={wcorde}
            alt="Entraînement HIIT"
            width={400}
            height={250}
            className={styles['event-image']}
          />
          <h3>Entraînement HIIT</h3>
          <p>Entraînement intensif pour brûler des calories rapidement.</p>
          <Link href="/events/hiit" className={styles['event-link']}>
            En savoir plus
          </Link>
        </div>
        <div className={styles['event-card']}>
          <Image
            src={martial}
            alt="Arts Martiaux"
            width={400}
            height={250}
            className={styles['event-image']}
          />
          <h3>Arts Martiaux</h3>
          <p>Découvrez les techniques d'arts martiaux dans un cadre stimulant.</p>
          <Link href="/events/martial" className={styles['event-link']}>
            En savoir plus
          </Link>
        </div>
      </div>
    </section>
  </>
}
