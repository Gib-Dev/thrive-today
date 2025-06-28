import '../../globals.css';
import styles from './martialArtsPage.module.css';
import { FaFistRaised, FaShieldAlt, FaDumbbell, FaHeart, FaBolt, FaUsers, FaStar } from 'react-icons/fa';

export const metadata = {
  title: "Arts Martiaux - Force & Discipline | ThriveToday",
  description: "Développez votre force physique et mentale avec nos cours d'arts martiaux. Apprenez l'autodéfense, améliorez votre condition physique et cultivez la discipline avec nos instructeurs experts.",
  keywords: ["arts martiaux", "autodéfense", "force", "discipline", "combat", "condition physique", "karaté"],
  openGraph: {
    title: "Arts Martiaux - Force & Discipline",
    description: "Développez votre force physique et mentale",
    images: ['/martial.webp'],
  },
};

const martialEvent = {
  title: "Arts Martiaux - Force & Discipline",
  category: "Combat & Autodéfense",
  description: "Développez votre force physique et mentale avec nos cours d'arts martiaux. Apprenez l'autodéfense, améliorez votre condition physique et cultivez la discipline.",
  image: "/martial.webp",
  date: "Vendredi 2 février 2025",
  location: "Dojo ThriveToday",
  duration: "90 minutes intensives",
  instructor: "Sensei Takashi Yamamoto",
  level: "Débutant à Avancé",
  maxParticipants: 10,
  benefits: [
    { 
      id: 'self-defense',
      icon: FaFistRaised, 
      title: "Autodéfense", 
      description: "Apprenez des techniques efficaces pour vous protéger et protéger vos proches" 
    },
    { 
      id: 'confidence',
      icon: FaShieldAlt, 
      title: "Confiance", 
      description: "Développez votre confiance en vous et votre assurance personnelle" 
    },
    { 
      id: 'physical-strength',
      icon: FaDumbbell, 
      title: "Force Physique", 
      description: "Renforcez vos muscles et améliorez votre condition physique globale" 
    },
    { 
      id: 'discipline',
      icon: FaHeart, 
      title: "Discipline", 
      description: "Cultivez la discipline mentale et la persévérance" 
    },
    { 
      id: 'reflexes',
      icon: FaBolt, 
      title: "Réflexes", 
      description: "Améliorez vos réflexes et votre coordination motrice" 
    },
    { 
      id: 'respect',
      icon: FaStar, 
      title: "Respect", 
      description: "Apprenez les valeurs traditionnelles de respect et d'humilité" 
    }
  ],
  program: [
    {
      id: 'warmup',
      time: "0-15 min",
      activity: "Échauffement",
      description: "Mobilisation articulaire et préparation physique progressive"
    },
    {
      id: 'basic-techniques',
      time: "15-30 min",
      activity: "Techniques de Base",
      description: "Apprentissage des positions et mouvements fondamentaux"
    },
    {
      id: 'kata-applications',
      time: "30-60 min",
      activity: "Kata & Applications",
      description: "Pratique des formes traditionnelles et leurs applications"
    },
    {
      id: 'controlled-sparring',
      time: "60-75 min",
      activity: "Sparring Contrôlé",
      description: "Combat d'entraînement avec partenaire sous supervision"
    },
    {
      id: 'conditioning',
      time: "75-85 min",
      activity: "Conditionnement",
      description: "Exercices de renforcement et d'endurance"
    },
    {
      id: 'meditation',
      time: "85-90 min",
      activity: "Méditation",
      description: "Retour au calme et méditation pour intégrer l'enseignement"
    }
  ],
  styles: [
    "Karaté Shotokan",
    "Kung Fu",
    "Taekwondo",
    "Judo",
    "Krav Maga"
  ],
  equipment: [
    "Gi (kimono) - fourni",
    "Protections (fournies)",
    "Tapis de sol (fourni)",
    "Tenue sportive confortable",
    "Bouteille d'eau",
    "Serviette"
  ],
  testimonials: [
    {
      name: "David M.",
      rating: 5,
      comment: "Sensei Yamamoto est un excellent instructeur. J'ai gagné en confiance et en force physique."
    },
    {
      name: "Lisa K.",
      rating: 5,
      comment: "Les cours sont intenses mais adaptés à tous les niveaux. L'ambiance est respectueuse et motivante."
    },
    {
      name: "Marc P.",
      rating: 5,
      comment: "En tant que débutant, j'apprécie l'approche progressive. Je me sens plus sûr de moi."
    }
  ],
  stats: [
    {
      icon: FaFistRaised,
      number: "90min",
      label: "Séance Complète",
      description: "Technique et conditionnement"
    },
    {
      icon: FaShieldAlt,
      number: "5",
      label: "Styles Différents",
      description: "Pour tous les objectifs"
    },
    {
      icon: FaUsers,
      number: "10",
      label: "Participants Max",
      description: "Pour un suivi optimal"
    },
    {
      icon: FaStar,
      number: "15+",
      label: "Années d'Expérience",
      description: "Sensei certifié"
    }
  ]
};

export default function MartialArtsEventPage() {
  return (
    <main className={styles.main}>
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroCategory}>{martialEvent.category}</span>
              <span>{martialEvent.title}</span>
            </h1>
            <p className={styles.heroDescription}>
              {martialEvent.description}
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

      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            Pourquoi choisir cet événement ?
          </h2>
          <div className={styles.benefitsGrid}>
            {martialEvent.benefits.map((benefit) => (
              <div key={benefit.id} className={styles.benefitCard}>
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

      <section className={styles.detailsSection}>
        <div className={styles.container}>
          <h2 className={styles.detailsTitle}>
            <span className={styles.detailsAccent}>Session</span> spéciale
          </h2>
          <div className={styles.detailsGrid}>
            <div className={styles.detailCard}>
              <div className={styles.detailLabel}>Date</div>
              <div>{martialEvent.date}</div>
            </div>
            <div className={styles.detailCard}>
              <div className={styles.detailLabel}>Lieu</div>
              <div>{martialEvent.location}</div>
            </div>
            <div className={styles.detailCard}>
              <div className={styles.detailLabel}>Durée</div>
              <div>{martialEvent.duration}</div>
            </div>
            <div className={styles.detailCard}>
              <div className={styles.detailLabel}>Instructeur</div>
              <div>{martialEvent.instructor}</div>
            </div>
            <div className={styles.detailCard}>
              <div className={styles.detailLabel}>Niveau</div>
              <div>{martialEvent.level}</div>
            </div>
            <div className={styles.detailCard}>
              <div className={styles.detailLabel}>Participants</div>
              <div>Max {martialEvent.maxParticipants}</div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.programSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            Programme de la Séance
          </h2>
          <div className={styles.programGrid}>
            {martialEvent.program.map((item) => (
              <div key={item.id} className={styles.programItem}>
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

      <section className={styles.joinSection}>
        <div className={styles.container}>
          <h2 className={styles.joinTitle}>
            Prêt à développer votre force ?
          </h2>
          <p className={styles.joinDescription}>
            Rejoignez notre communauté et commencez votre voyage vers la maîtrise de soi
          </p>
          <button className={styles.joinButton}>
            Rejoindre ThriveToday
          </button>
        </div>
      </section>
    </main>
  );
}
