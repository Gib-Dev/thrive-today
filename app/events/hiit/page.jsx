import Image from 'next/image';
import hiitImage from '@/public/hiit.jpg';
import styles from './hiitEventPage.module.css';
import JoinSection from '@/components/JoinSection';
export default function HIITEventPage() {
  return <>
      <main className={styles.page}>
        {/* Section Hero */}
        <section className={styles.hero}>
          <div className={styles.heroImageContainer}>
            <Image
              src={hiitImage}
              alt="Entraînement HIIT"
              layout="fill"
              objectFit="cover"
              priority
              quality={90}
              className={styles.heroImage}
            />
            <div className={styles.heroOverlay} />
          </div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              <span>Entraînement</span>
              <span className={styles.titleAccent}>HIIT</span>
            </h1>
            <p className={styles.heroDescription}>
              Maximisez votre dépense énergétique avec des sessions courtes et intenses
            </p>
            <div className={styles.ctaContainer}>
              <button className={styles.primaryButton}>Réserver maintenant</button>
              <button className={styles.secondaryButton}>Voir le programme</button>
            </div>
          </div>
        </section>

        {/* Section Avantages */}
        <section className={styles.benefits}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Pourquoi choisir le HIIT ?</h2>
            <p className={styles.sectionSubtitle}>Des résultats rapides et mesurables</p>
          </div>
          <div className={styles.benefitGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>🔥</div>
              <h3>Brûlage intensif</h3>
              <p>Jusqu'à 30% de calories en plus qu'un entraînement traditionnel</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>⏱️</div>
              <h3>Efficacité</h3>
              <p>Résultats visibles en seulement 20 minutes par session</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>💪</div>
              <h3>Adaptable</h3>
              <p>Pour tous les niveaux, débutants comme confirmés</p>
            </div>
          </div>
        </section>

        {/* Section Informations */}
        <section className={styles.infoSection}>
          <div className={styles.infoContent}>
            <div className={styles.infoText}>
              <h2 className={styles.infoTitle}>
                <span className={styles.titleAccent}>Session</span> spéciale
              </h2>
              <div className={styles.infoDetails}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>📅 Date :</span>
                  <span>Lundi 29 janvier 2025</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>📍 Lieu :</span>
                  <span>Studio FitZone, Ottawa</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>⏳ Durée :</span>
                  <span>30 minutes intensives</span>
                </div>
              </div>
            </div>
            <div className={styles.infoMap}>
              <div className={styles.mapPlaceholder} />
            </div>
          </div>   
        </section>
      </main>
      <JoinSection />

    </>
}
