import '../../globals.css';
import styles from './hiitPage.module.css';
import { FaFire, FaClock, FaStar, FaDumbbell, FaHeart, FaBolt, FaUsers } from 'react-icons/fa';

// Métadonnées SEO de la page HIIT (titre & description)
export const metadata = {
  title: "HIIT - Entraînement Haute Intensité | ThriveToday",
  description: "Maximisez votre dépense énergétique avec nos sessions HIIT courtes et intenses. Brûlez plus de calories, améliorez votre condition cardiovasculaire et développez votre force avec nos coachs experts.",
  keywords: ["HIIT", "entraînement", "haute intensité", "cardio", "brûlage calories", "fitness"],
  openGraph: {
    title: "HIIT - Entraînement Haute Intensité",
    description: "Sessions courtes et intenses pour des résultats maximaux",
    images: ['/hiit.webp'],
  },
};

// Données de l'événement HIIT, utilisées pour alimenter les composants dynamiquement
const hiitEvent = {
  title: "HIIT - Entraînement Haute Intensité",
  category: "Cardio & Force",
  description: "Maximisez votre dépense énergétique avec des sessions courtes et intenses. L'entraînement par intervalles à haute intensité pour des résultats rapides et durables.",

  // 🔄 Ici on utilise désormais une image optimisée au format WebP
  image: "/hiit.webp",

  date: "Lundi 29 janvier 2025",
  location: "Studio FitZone, Centre ThriveToday",
  duration: "45 minutes intensives",
  instructor: "Emma Rodriguez",
  level: "Intermédiaire à Avancé",
  maxParticipants: 12,

  // Avantages listés sous forme de tableau pour affichage structuré
  benefits: [
    { 
      icon: FaFire, 
      title: "Brûlage Intensif", 
      description: "Jusqu'à 30% de calories en plus qu'un entraînement traditionnel grâce à l'effet afterburn" 
    },
    { 
      icon: FaBolt, 
      title: "Efficacité Maximale", 
      description: "Résultats visibles en seulement 20-30 minutes par session, 3 fois par semaine" 
    },
    { 
      icon: FaDumbbell, 
      title: "Adaptable", 
      description: "Pour tous les niveaux, débutants comme confirmés avec des variations personnalisées" 
    },
    { 
      icon: FaHeart, 
      title: "Cardio Renforcé", 
      description: "Améliorez significativement votre condition cardiovasculaire et votre endurance" 
    },
    { 
      icon: FaDumbbell, 
      title: "Force Explosive", 
      description: "Développez votre puissance musculaire et votre explosivité" 
    },
    { 
      icon: FaFire, 
      title: "Métabolisme Boosté", 
      description: "Accélérez votre métabolisme pour brûler plus de calories même au repos" 
    }
  ],

  // Programme détaillé
  program: [
    {
      time: "0-10 min",
      activity: "Échauffement Dynamique",
      description: "Mobilisation articulaire et activation musculaire progressive"
    },
    {
      time: "10-15 min",
      activity: "Rounds HIIT",
      description: "6 rounds de 30s travail / 30s repos avec exercices variés"
    },
    {
      time: "15-25 min",
      activity: "Circuit Intensif",
      description: "4 exercices en circuit, 45s chacun, 15s de repos"
    },
    {
      time: "25-35 min",
      activity: "Tabata Protocol",
      description: "8 rounds de 20s travail / 10s repos - intensité maximale"
    },
    {
      time: "35-40 min",
      activity: "Finisher",
      description: "Exercice final intense pour maximiser l'effet afterburn"
    },
    {
      time: "40-45 min",
      activity: "Récupération Active",
      description: "Étirements dynamiques et retour au calme"
    }
  ],

  // Exercices types
  exercises: [
    "Burpees",
    "Mountain Climbers",
    "Jump Squats",
    "High Knees",
    "Push-ups",
    "Plank Jacks",
    "Lunges avec saut",
    "Tuck Jumps"
  ],

  // Équipement
  equipment: [
    "Tapis de sol (fourni)",
    "Haltères légères (fournies)",
    "Corde à sauter (fournie)",
    "Kettlebell (fourni)",
    "Tenue sportive confortable",
    "Bouteille d'eau",
    "Serviette"
  ],

  // Témoignages
  testimonials: [
    {
      name: "Alexandre P.",
      rating: 5,
      comment: "Les séances HIIT avec Emma sont incroyables ! J'ai perdu 8kg en 3 mois et je me sens plus fort que jamais."
    },
    {
      name: "Julie M.",
      rating: 5,
      comment: "Parfait pour ceux qui ont peu de temps. 45 minutes intenses et je brûle des calories toute la journée !"
    },
    {
      name: "Marc D.",
      rating: 5,
      comment: "Emma sait adapter l'intensité à chaque niveau. Même en tant que débutant, je progresse rapidement."
    }
  ],

  // Statistiques
  stats: [
    {
      icon: FaBolt,
      number: "500+",
      label: "Calories Brûlées",
      description: "Par séance de 45 minutes"
    },
    {
      icon: FaClock,
      number: "72h",
      label: "Effet Afterburn",
      description: "Augmentation du métabolisme"
    },
    {
      icon: FaHeart,
      number: "85%",
      label: "Fréquence Cardiaque",
      description: "Pendant les phases intenses"
    },
    {
      icon: FaUsers,
      number: "12",
      label: "Participants Max",
      description: "Pour un suivi optimal"
    }
  ]
};

// Composant principal de la page HIIT
export default function HIITEventPage() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroCategory}>{hiitEvent.category}</span>
              <span>{hiitEvent.title}</span>
            </h1>
            <p className={styles.heroDescription}>
              {hiitEvent.description}
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryButton}>
                Réserver maintenant
              </button>
              <button className={styles.secondaryButton}>
                Voir le programme
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            Pourquoi choisir cet événement ?
          </h2>
          <div className={styles.benefitsGrid}>
            {hiitEvent.benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <benefit.icon />
                </div>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDescription}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className={styles.detailsSection}>
        <div className={styles.container}>
          <h2 className={styles.detailsTitle}>
            <span className={styles.detailsAccent}>Session</span> spéciale
          </h2>
          <div className={styles.detailsGrid}>
            <div className={styles.detailCard}>
              <div className={styles.detailLabel}>Date</div>
              <div>{hiitEvent.date}</div>
            </div>
            <div className={styles.detailCard}>
              <div className={styles.detailLabel}>Lieu</div>
              <div>{hiitEvent.location}</div>
            </div>
            <div className={styles.detailCard}>
              <div className={styles.detailLabel}>Durée</div>
              <div>{hiitEvent.duration}</div>
            </div>
            <div className={styles.detailCard}>
              <div className={styles.detailLabel}>Instructeur</div>
              <div>{hiitEvent.instructor}</div>
            </div>
            <div className={styles.detailCard}>
              <div className={styles.detailLabel}>Niveau</div>
              <div>{hiitEvent.level}</div>
            </div>
            <div className={styles.detailCard}>
              <div className={styles.detailLabel}>Participants</div>
              <div>Max {hiitEvent.maxParticipants}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className={styles.programSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            Programme de la Séance
          </h2>
          <div className={styles.programGrid}>
            {hiitEvent.program.map((item, index) => (
              <div key={index} className={styles.programItem}>
                <div className={styles.programContent}>
                  <div className={styles.programTime}>{item.time}</div>
                  <div>
                    <h3 className={styles.programActivity}>{item.activity}</h3>
                    <p className={styles.programDescription}>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className={styles.joinSection}>
        <div className={styles.container}>
          <h2 className={styles.joinTitle}>
            Prêt à transformer votre vie ?
          </h2>
          <p className={styles.joinDescription}>
            Rejoignez notre communauté et commencez votre transformation dès aujourd&apos;hui
          </p>
          <button className={styles.joinButton}>
            Rejoindre ThriveToday
          </button>
        </div>
      </section>
    </main>
  );
}
