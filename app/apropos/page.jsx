import '../globals.css';
import Image from 'next/image';
import { FaHeart, FaUsers, FaTrophy, FaLeaf, FaDumbbell, FaMedal, FaClock, FaStar } from 'react-icons/fa';
import styles from './apropos.module.css';
import JoinSection from '../../components/JoinSection';

export const metadata = {
  title: "À propos de nous | ThriveToday",
  description: "Découvrez notre histoire, notre mission et notre équipe de professionnels passionnés qui vous accompagnent vers une vie plus saine et équilibrée.",
  keywords: ["équipe", "mission", "histoire", "valeurs", "professionnels", "certifiés"],
  openGraph: {
    title: "À propos de ThriveToday - Notre Mission",
    description: "Découvrez notre histoire et notre équipe de professionnels passionnés.",
    images: ['/apropos.webp'],
  },
};

export default function Apropos() {
  const values = [
    {
      id: 'passion',
      icon: FaHeart,
      title: "Passion",
      description: "Nous sommes passionnés par votre bien-être et votre réussite"
    },
    {
      id: 'community',
      icon: FaUsers,
      title: "Communauté",
      description: "Une communauté bienveillante de plus de 1500 membres"
    },
    {
      id: 'excellence',
      icon: FaTrophy,
      title: "Excellence",
      description: "15 ans d&apos;expertise et de résultats prouvés"
    },
    {
      id: 'natural',
      icon: FaLeaf,
      title: "Naturel",
      description: "Approche holistique respectueuse de votre corps"
    }
  ];

  const achievements = [
    {
      id: 'specialized-programs',
      icon: FaDumbbell,
      number: "50+",
      label: "Programmes Spécialisés",
      description: "Yoga, HIIT, Arts Martiaux et plus"
    },
    {
      id: 'years-experience',
      icon: FaMedal,
      number: "15",
      label: "Années d&apos;Expérience",
      description: "Expertise reconnue dans le fitness"
    },
    {
      id: 'support-available',
      icon: FaClock,
      number: "24/7",
      label: "Support Disponible",
      description: "Accompagnement personnalisé"
    },
    {
      id: 'client-satisfaction',
      icon: FaStar,
      number: "98%",
      label: "Satisfaction Client",
      description: "Membres satisfaits de nos services"
    }
  ];

  return (
    <main>
      {/* Section Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>À propos de ThriveToday</h1>
          <p className={styles.subtitle}>
            Votre partenaire dans l&apos;atteinte de l&apos;équilibre physique et mental
          </p>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>1500+</span>
              <span className={styles.statLabel}>Membres Actifs</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>15</span>
              <span className={styles.statLabel}>Années d&apos;Expérience</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>98%</span>
              <span className={styles.statLabel}>Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section Notre Histoire */}
      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.textContent}>
              <h2 className={styles.sectionTitle}>Notre Histoire</h2>
              <p className={styles.leadText}>
                Fondé en 2009 par une équipe de professionnels de santé et de coachs certifiés, 
                ThriveToday est né d&apos;une vision simple : rendre le bien-être accessible à tous.
              </p>
              <p className={styles.storyText}>
                Depuis plus de 15 ans, nous accompagnons des milliers de personnes dans leur 
                transformation physique et mentale. Notre approche unique combine expertise 
                scientifique et bienveillance humaine pour des résultats durables.
              </p>
              <div className={styles.valuesGrid}>
                {values.map((value) => (
                  <div key={value.id} className={styles.valueCard}>
                    <div className={styles.valueIcon}>
                      <value.icon />
                    </div>
                    <h4 className={styles.valueTitle}>{value.title}</h4>
                    <p className={styles.valueDescription}>{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="/apropos.webp"
                alt="Notre équipe de spécialistes"
                width={500}
                height={350}
                className={styles.aboutImage}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Nos Réalisations */}
      <section className={styles.achievementsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Nos Réalisations</h2>
          <p className={styles.sectionSubtitle}>
            Des chiffres qui parlent d&apos;eux-mêmes
          </p>
          <div className={styles.achievementsGrid}>
            {achievements.map((achievement) => (
              <div key={achievement.id} className={styles.achievementCard}>
                <div className={styles.achievementIcon}>
                  <achievement.icon />
                </div>
                <div className={styles.achievementNumber}>{achievement.number}</div>
                <h4 className={styles.achievementLabel}>{achievement.label}</h4>
                <p className={styles.achievementDescription}>{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Notre Équipe */}
      <section className={styles.teamSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Notre Équipe</h2>
          <p className={styles.sectionSubtitle}>
            Des professionnels passionnés à votre service
          </p>
          <div className={styles.teamGrid}>
            <div className={styles.teamMember}>
              <div className={styles.memberAvatar}>👨‍💼</div>
              <h4 className={styles.memberName}>Dr. Thomas Martin</h4>
              <p className={styles.memberRole}>Directeur & Coach Principal</p>
              <p className={styles.memberBio}>
                Spécialiste en physiologie de l&apos;exercice avec 15 ans d&apos;expérience.
              </p>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.memberAvatar}>👩‍🏫</div>
              <h4 className={styles.memberName}>Sarah Dubois</h4>
              <p className={styles.memberRole}>Instructrice Yoga</p>
              <p className={styles.memberBio}>
                Certifiée RYT-500, spécialisée en yoga thérapeutique et méditation.
              </p>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.memberAvatar}>🥋</div>
              <h4 className={styles.memberName}>Marc Chen</h4>
              <p className={styles.memberRole}>Maître Arts Martiaux</p>
              <p className={styles.memberBio}>
                Ceinture noire 4ème dan, expert en karaté et self-défense.
              </p>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.memberAvatar}>💪</div>
              <h4 className={styles.memberName}>Emma Rodriguez</h4>
              <p className={styles.memberRole}>Coach HIIT</p>
              <p className={styles.memberBio}>
                Spécialiste en entraînement fonctionnel et nutrition sportive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Rejoindre */}
      <JoinSection />
    </main>
  );
}