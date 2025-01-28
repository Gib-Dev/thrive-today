import Image from 'next/image';
import hiitImage from '@/public/hiit.jpg';
import styles from './HIITEventPage.module.css';
export default function HIITEventPage() {
  return <>
    <main className={styles.page}>
      {/* Section Titre et Image */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <Image
            src={hiitImage}
            alt="Entraînement HIIT"
            className={styles.heroImage}
          />
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>Entraînement HIIT</h1>
            <p className={styles.heroDescription}>
              Découvrez l’entraînement à haute intensité (HIIT) conçu pour maximiser votre dépense
              énergétique en un minimum de temps. Cet entraînement est parfait pour brûler des calories,
              améliorer votre endurance et renforcer vos muscles.
            </p>
          </div>
        </div>
      </section>

      {/* Section Avantages */}
      <section className={styles.benefits}>
        <h2 className={styles.sectionTitle}>Pourquoi choisir le HIIT ?</h2>
        <ul className={styles.benefitList}>
          <li>Brûle un maximum de calories en un minimum de temps.</li>
          <li>Améliore la santé cardiovasculaire.</li>
          <li>Convient à tous les niveaux de condition physique.</li>
        </ul>
      </section>

      {/* Section Informations */}
      <section className={styles.info}>
        <h2 className={styles.sectionTitle}>Informations pratiques</h2>
        <p><strong>Date :</strong> Lundi 29 janvier 2025</p>
        <p><strong>Lieu :</strong> Studio FitZone, Ottawa</p>
      </section>
    </main>
    </>
}
