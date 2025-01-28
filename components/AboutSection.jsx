import Image from 'next/image';
import Link from 'next/link';
import styles from './AboutSection.module.css';
import skretching from '@/public/skretching.jpg';

export default function AboutSection() {
  return <>
    <section id="about" className={styles['about-section']}>
      <div className={styles['about-container']}>
        <div className={styles['about-image-container']}>
          <Image
            src={skretching}
            alt="Salle d'entraînement"
            width={500}
            height={300}
            className={styles['about-image']}
          />
        </div>
        <div className={styles['about-text']}>
          <h2>À propos de nous</h2>
          <p>
            Chez ThriveToday, nous croyons en l'importance de la santé physique et mentale. 
            Notre mission est d'offrir un environnement accueillant et des programmes adaptés 
            à tous les niveaux, que vous soyez débutant ou confirmé.
          </p>
          <Link href="/apropos" className={styles['about-button']}>
            En savoir plus
          </Link>
        </div>
      </div>
    </section>
  </>
}
