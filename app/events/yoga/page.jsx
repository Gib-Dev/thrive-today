import '../../globals.css';
import styles from './yogaPage.module.css';
import { FaLeaf, FaHeart, FaBalanceScale, FaSun, FaMoon, FaWind, FaPeace } from 'react-icons/fa';

// Métadonnées SEO de la page Yoga (titre & description)
export const metadata = {
  title: "Yoga - Harmonie Corps-Esprit | ThriveToday",
  description: "Découvrez l'harmonie parfaite entre corps et esprit avec nos séances de yoga. Améliorez votre flexibilité, réduisez le stress et trouvez votre équilibre intérieur avec nos instructeurs certifiés.",
  keywords: ["yoga", "méditation", "flexibilité", "bien-être", "stress", "équilibre", "zen"],
  openGraph: {
    title: "Yoga - Harmonie Corps-Esprit",
    description: "Trouvez votre équilibre intérieur",
    images: ['/yoga.webp'],
  },
};

// Données de l'événement Yoga, utilisées pour alimenter les composants dynamiquement
const yogaEvent = {
  title: "Yoga - Harmonie Corps-Esprit",
  category: "Bien-être & Équilibre",
  description: "Découvrez l'harmonie parfaite entre corps et esprit. Nos séances de yoga vous guident vers un équilibre intérieur profond, améliorant votre flexibilité et réduisant votre stress.",

  // 🔄 Ici on utilise désormais une image optimisée au format WebP
  image: "/yoga.webp",

  date: "Mercredi 31 janvier 2025",
  location: "Studio Zen, Centre ThriveToday",
  duration: "75 minutes apaisantes",
  instructor: "Sophie Chen",
  level: "Tous niveaux",
  maxParticipants: 15,

  // Avantages listés sous forme de tableau pour affichage structuré
  benefits: [
    { 
      icon: FaLeaf, 
      title: "Flexibilité", 
      description: "Améliorez progressivement votre souplesse et votre amplitude de mouvement" 
    },
    { 
      icon: FaHeart, 
      title: "Réduction du Stress", 
      description: "Techniques de respiration et méditation pour un esprit apaisé" 
    },
    { 
      icon: FaBalanceScale, 
      title: "Équilibre", 
      description: "Renforcez votre stabilité physique et mentale" 
    },
    { 
      icon: FaSun, 
      title: "Énergie Vitale", 
      description: "Stimulez votre énergie intérieure et votre vitalité" 
    },
    { 
      icon: FaMoon, 
      title: "Sommeil Amélioré", 
      description: "Pratiques du soir pour un sommeil plus profond et réparateur" 
    },
    { 
      icon: FaPeace, 
      title: "Conscience Corporelle", 
      description: "Développez une meilleure connexion avec votre corps" 
    }
  ],

  // Programme détaillé
  program: [
    {
      time: "0-10 min",
      activity: "Pranayama",
      description: "Techniques de respiration pour centrer l'esprit et préparer le corps"
    },
    {
      time: "10-25 min",
      activity: "Surya Namaskar",
      description: "Salutation au soleil pour échauffer et dynamiser le corps"
    },
    {
      time: "25-50 min",
      activity: "Asanas",
      description: "Postures de yoga adaptées au niveau de chacun"
    },
    {
      time: "50-65 min",
      activity: "Méditation",
      description: "Pratique de pleine conscience et relaxation profonde"
    },
    {
      time: "65-75 min",
      activity: "Savasana",
      description: "Corpse pose - relaxation finale pour intégrer les bienfaits"
    }
  ],

  // Styles de yoga
  styles: [
    "Hatha Yoga",
    "Vinyasa Flow",
    "Yin Yoga",
    "Restorative Yoga",
    "Power Yoga"
  ],

  // Équipement
  equipment: [
    "Tapis de yoga (fourni)",
    "Blocs de yoga (fournis)",
    "Sangles (fournies)",
    "Coussin de méditation (fourni)",
    "Tenue confortable",
    "Bouteille d'eau",
    "Serviette"
  ],

  // Témoignages
  testimonials: [
    {
      name: "Marie L.",
      rating: 5,
      comment: "Sophie est une merveilleuse instructrice. Ses séances m'ont aidée à gérer mon stress et à retrouver un sommeil de qualité."
    },
    {
      name: "Thomas R.",
      rating: 5,
      comment: "En tant que débutant, j'apprécie l'approche progressive. Je me sens plus souple et plus calme après chaque séance."
    },
    {
      name: "Emma D.",
      rating: 5,
      comment: "Le studio est magnifique et l'ambiance est parfaite pour se détendre. Je recommande vivement !"
    }
  ],

  // Statistiques
  stats: [
    {
      icon: FaLeaf,
      number: "75min",
      label: "Séance Complète",
      description: "Temps optimal pour les bienfaits"
    },
    {
      icon: FaHeart,
      number: "40%",
      label: "Stress Réduit",
      description: "Après 8 semaines de pratique"
    },
    {
      icon: FaBalanceScale,
      number: "15",
      label: "Participants Max",
      description: "Pour un suivi personnalisé"
    },
    {
      icon: FaPeace,
      number: "5",
      label: "Styles Différents",
      description: "Pour tous les besoins"
    }
  ]
};

// Composant principal de la page Yoga
export default function YogaEventPage() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroCategory}>{yogaEvent.category}</span>
              <span>{yogaEvent.title}</span>
            </h1>
            <p className={styles.heroDescription}>
              {yogaEvent.description}
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
            {yogaEvent.benefits.map((benefit, index) => (
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
              <div>{yogaEvent.date}</div>
            </div>
            <div className={styles.detailCard}>
              <div className={styles.detailLabel}>Lieu</div>
              <div>{yogaEvent.location}</div>
            </div>
            <div className={styles.detailCard}>
              <div className={styles.detailLabel}>Durée</div>
              <div>{yogaEvent.duration}</div>
            </div>
            <div className={styles.detailCard}>
              <div className={styles.detailLabel}>Instructeur</div>
              <div>{yogaEvent.instructor}</div>
            </div>
            <div className={styles.detailCard}>
              <div className={styles.detailLabel}>Niveau</div>
              <div>{yogaEvent.level}</div>
            </div>
            <div className={styles.detailCard}>
              <div className={styles.detailLabel}>Participants</div>
              <div>Max {yogaEvent.maxParticipants}</div>
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
            {yogaEvent.program.map((item, index) => (
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
            Prêt à trouver votre équilibre ?
          </h2>
          <p className={styles.joinDescription}>
            Rejoignez notre communauté et commencez votre voyage vers l&apos;harmonie intérieure
          </p>
          <button className={styles.joinButton}>
            Rejoindre ThriveToday
          </button>
        </div>
      </section>
    </main>
  );
}
