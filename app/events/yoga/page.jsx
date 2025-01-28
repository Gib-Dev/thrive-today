import Image from 'next/image';
import styles from './YogaPage.module.css';
import yogaImage from '@/public/yogaImage.jpg';

export default function YogaPage() {
  return <>
    <main className={styles.page}>
      {/* Section Titre et Image */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <Image
            src={yogaImage}
            alt="Yoga Session"
            className={styles.heroImage}
          />
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>Yoga</h1>
            <p className={styles.heroDescription}>
              Découvrez nos séances de yoga revitalisantes adaptées à tous les niveaux. Respirez,
              méditez et améliorez votre souplesse dans un environnement serein.
            </p>
          </div>
        </div>
      </section>

      {/* Section Bénéfices */}
      <section className={styles.benefits}>
        <h2 className={styles.sectionTitle}>Les bienfaits du yoga</h2>
        <ul className={styles.benefitList}>
          <li>Améliore la souplesse et l'équilibre.</li>
          <li>Réduit le stress et favorise la relaxation.</li>
          <li>Renforce le système immunitaire et améliore la posture.</li>
        </ul>
      </section>

      {/* Section Détails */}
      <section className={styles.details}>
        <h2 className={styles.sectionTitle}>Détails pratiques</h2>
        <p><strong>Date :</strong> Mardi 30 janvier 2025</p>
        <p><strong>Lieu :</strong> Salle Zen, Gatineau</p>
      </section>
    </main>
  
  </>
}
