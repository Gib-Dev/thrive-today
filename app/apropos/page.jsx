import '../globals.css';
import Image from 'next/image';
import team from '@/public/apropos.jpg';
import styles from './apropos.module.css';


export default function Apropos() {
  return <>
   <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.title}>À propos de ThriveToday</h1>
        <p className={styles.subtitle}>
          Notre mission est de vous inspirer à atteindre vos objectifs physiques et mentaux.
        </p>
      </section>
      <section className={styles['about-content']}>
        <div className={styles['about-text']}>
          <h2>Notre Vision</h2>
          <p>
            Chez ThriveToday, nous croyons en l'importance de la santé et du bien-être pour
            vivre une vie épanouie.
          </p>
        </div>
        <div className={styles['about-image']}>
          <Image
            src={team}
            alt="Notre équipe"
            width={600}
            height={400}
            className={styles['about-photo']}
          />
        </div>
      </section>
    </main>
  </>
}
