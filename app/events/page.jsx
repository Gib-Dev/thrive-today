import '../globals.css';
import styles from './events.module.css';
import { eventsData } from '../../data/events';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaUsers, FaClock, FaStar } from 'react-icons/fa';

export const metadata = {
  title: "Nos Événements - ThriveToday",
  description: "Découvrez tous nos événements et programmes de fitness : Yoga, HIIT, Arts Martiaux. Des cours adaptés à tous les niveaux pour transformer votre vie.",
  keywords: ["événements fitness", "yoga", "HIIT", "arts martiaux", "cours", "entraînement"],
  openGraph: {
    title: "Nos Événements - ThriveToday",
    description: "Découvrez tous nos événements de fitness",
    images: ['/hero-fitness.webp'],
  },
};

const programDetails = {
  yoga: {
    title: "Yoga & Bien-être",
    description: "Trouvez votre équilibre intérieur avec nos séances de yoga adaptées à tous les niveaux.",
    benefits: ["Réduction du stress", "Amélioration de la flexibilité", "Équilibre corps-esprit"],
    duration: "75 min",
    level: "Tous niveaux",
    instructor: "Sophie Chen",
    image: "/yoga.webp"
  },
  hiit: {
    title: "HIIT - Entraînement Intensif",
    description: "Brûlez des calories rapidement avec nos sessions HIIT dynamiques et motivantes.",
    benefits: ["Perte de poids rapide", "Amélioration cardio", "Gain de force"],
    duration: "45 min",
    level: "Intermédiaire à Avancé",
    instructor: "Emma Rodriguez",
    image: "/hiit.webp"
  },
  martial: {
    title: "Arts Martiaux - Force & Discipline",
    description: "Développez votre force physique et mentale avec nos cours d'arts martiaux.",
    benefits: ["Autodéfense", "Confiance en soi", "Discipline mentale"],
    duration: "90 min",
    level: "Tous niveaux",
    instructor: "Sensei Takashi Yamamoto",
    image: "/martial.webp"
  }
};

export default function EventsPage() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Nos Événements</h1>
          <p className={styles.heroDescription}>
            Découvrez nos événements spécialisés conçus pour transformer votre corps et votre esprit
          </p>
        </div>
      </section>

      {/* Programmes Section */}
      <section className={styles.programsSection}>
        <div className={styles.container}>
          <div className={styles.programsGrid}>
            {eventsData.map((event) => {
              const details = programDetails[event.id.replace('-course', '').replace('-training', '').replace('-arts', '')];
              return (
                <div key={event.id} className={styles.programCard}>
                  <div className={styles.programImage}>
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className={styles.image}
                    />
                    <div className={styles.programOverlay}></div>
                  </div>
                  
                  <div className={styles.programContent}>
                    <h3 className={styles.programTitle}>{details?.title || event.title}</h3>
                    <p className={styles.programDescription}>
                      {details?.description || event.description}
                    </p>
                    
                    <div className={styles.programStats}>
                      <div className={styles.stat}>
                        <FaClock />
                        <span>{details?.duration}</span>
                      </div>
                      <div className={styles.stat}>
                        <FaUsers />
                        <span>{details?.level}</span>
                      </div>
                      <div className={styles.stat}>
                        <FaStar />
                        <span>{details?.instructor}</span>
                      </div>
                    </div>
                    
                    <div className={styles.benefitsList}>
                      {details?.benefits?.map((benefit, index) => (
                        <div key={index} className={styles.benefit}>
                          <span className={styles.benefitDot}>•</span>
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link href={event.link} className={styles.programButton}>
                      <span>Découvrir le programme</span>
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Prêt à commencer votre transformation ?</h2>
          <p className={styles.ctaDescription}>
            Rejoignez notre communauté et commencez votre voyage vers une version plus forte de vous-même
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            Réserver un cours d'essai
          </Link>
        </div>
      </section>
    </main>
  );
} 