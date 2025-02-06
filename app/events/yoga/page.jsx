import Image from 'next/image';
import styles from './yogaPage.module.css';
import yogaImage from '@/public/yogaImage.jpg';
import { FaLeaf, FaSpa, FaHeartbeat } from 'react-icons/fa';
import JoinSection from '@/components/JoinSection';

export default function YogaPage() {
  return <>
    <main className={styles.page}>
      {/* Section Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.imageContainer}>
            <Image
              src={yogaImage}
              alt="Yoga Session"
              className={styles.heroImage}
              priority
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              <span className={styles.titleHighlight}>Yoga</span> Énergisant
            </h1>
            <p className={styles.heroDescription}>
              Découvrez nos séances de yoga revitalisantes adaptées à tous les niveaux. 
              Respirez, méditez et transformez votre corps dans un environnement serein.
            </p>
            <div className={styles.ctaContainer}>
              <button className={`${styles.ctaButton} global-button`}>Réserver maintenant</button>
              <span className={styles.ctaSubtext}>Première séance offerte</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section Bénéfices */}
      <section className={styles.benefits}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.titleDecorator}>Les bienfaits</span> du yoga
        </h2>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <FaLeaf className={styles.benefitIcon} />
            <h3>Flexibilité & Équilibre</h3>
            <p>Améliorez votre mobilité articulaire et votre stabilité corporelle</p>
          </div>
          <div className={styles.benefitCard}>
            <FaSpa className={styles.benefitIcon} />
            <h3>Stress & Relaxation</h3>
            <p>Techniques de respiration et méditation pour un esprit apaisé</p>
          </div>
          <div className={styles.benefitCard}>
            <FaHeartbeat className={styles.benefitIcon} />
            <h3>Santé Globale</h3>
            <p>Renforcement musculaire et amélioration de la posture</p>
          </div>
        </div>
      </section>

      {/* Section Détails */}
      <section className={styles.details}>
        <div className={styles.detailsCard}>
          <h2 className={styles.sectionTitle}>Informations Pratiques</h2>
          <div className={styles.detailsGrid}>
            <div className={styles.detailItem}>
              <h4>Date</h4>
              <p>Mardi 30 janvier 2025</p>
              <div className={styles.timeBadge}>19h00 - 20h30</div>
            </div>
            <div className={styles.detailItem}>
              <h4>Lieu</h4>
              <p>Salle Zen</p>
              <p>123 Rue de la Paix</p>
              <p>Gatineau, QC</p>
            </div>
            <div className={styles.detailItem}>
              <h4>Niveau</h4>
              <p>Tous niveaux</p>
              <div className={styles.levelTag}>Débutants bienvenus</div>
            </div>
          </div>
        </div>
      </section>
      <JoinSection />
    </main>
  </>
}