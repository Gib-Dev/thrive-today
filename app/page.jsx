import './globals.css';
import Highlight from '@/components/Highlight';
import Image from 'next/image'; 
import Link from 'next/link';
import skretching from '@/public/skretching.jpg';
import styles from './page.module.css';

import wcorde from '@/public/hiit.jpg';
import martial from '@/public/martial.jpg';
import yoga from '@/public/yoga.jpg';
export default function Accueil() {
  return <>
  <main>
        {/* Section Accueil */}
        <section id="home" className={styles['hero-section']}>
          <h1 className={styles['hero-title']}>Bienvenue chez ThriveToday</h1>
          <p className={styles['hero-subtitle']}>
            Transformez votre corps et votre esprit dans un environnement inspirant.
          </p>
          <div className={styles.highlights}>
            <Highlight author="M B">
              "Si tu peux t'imaginer svelte, c'est que tu peux le faire."
            </Highlight>
            <Highlight author="A B">
              "Ici, tu peux avoir le corps dont tu rêves et garder la santé."
            </Highlight>
          </div>
        </section>

        {/* Section À propos */}
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

        {/* Section Événements */}
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

        {/* Section Rejoignez-nous */}
        <section id="join" className={styles['join-section']}>
          <h2>Rejoignez-nous</h2>
          <p>Contactez-nous dès aujourd'hui pour une séance d'essai gratuite !</p>
          <Link href="/contact" className={styles['button-link']}>Nous Contacter</Link>
        </section>

      </main>
  </>;
}
