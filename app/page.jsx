import './globals.css';
import EventsSection from '../components/EventsSection';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import JoinSection from '../components/JoinSection';
import PerformanceMetrics from '../components/PerformanceMetrics';
import StatsSection from '../components/StatsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import styles from './page.module.css';
import { eventsData } from '../data/events';

// Métadonnées de la page d'accueil
export const metadata = {
  title: "Accueil",
  description: "Transformez votre corps et votre esprit avec nos programmes de yoga, HIIT et arts martiaux. Rejoignez ThriveToday pour une vie plus saine et équilibrée.",
  keywords: ["fitness", "yoga", "HIIT", "arts martiaux", "bien-être", "sport", "entraînement", "santé"],
  openGraph: {
    title: "ThriveToday - Votre mentor pour une vie pleine d'énergies",
    description: "Transformez votre corps et votre esprit avec nos programmes de yoga, HIIT et arts martiaux.",
    images: ['/hero-fitness.webp'],
  },
};

export default function Accueil() {
  return (
    <main className={styles.homePage}>
      <HeroSection />
      
      <div className={styles.sectionWrapper}>
        <AboutSection />
      </div>

      <div className={styles.sectionWrapper}>
        <StatsSection />
      </div>
      
      <div className={styles.sectionWrapper}>
        <EventsSection events={eventsData} />
      </div>
      
      <div className={styles.sectionWrapper}>
        <TestimonialsSection />
      </div>

      <JoinSection />
    </main>
  );
}