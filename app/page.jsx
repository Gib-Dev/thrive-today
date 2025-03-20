import './globals.css';
import EventsSection from '@/components/EventsSection';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import JoinSection from '@/components/JoinSection';
import { eventsData } from '@/data/events';

// Métadonnées de la page d'accueil
export const metadata = {
  title: "ThriveToday",
  description: "Votre mentor pour une vie pleine d'énergies",
};

export default function Accueil() {
  return (
    <main>
      {/* Section Héro avec image WebP optimisée */}
      <HeroSection
        title="Bienvenue chez ThriveToday"
        subtitle="Transformez votre corps et votre esprit dans un environnement inspirant."
        backgroundImage="/hero-fitness.webp"
      />

      {/* Section À propos */}
      <AboutSection
        title="À propos de nous"
        text="Chez ThriveToday, nous croyons en l'importance de la santé physique et mentale. Notre mission est d'offrir un environnement accueillant et des programmes adaptés à tous les niveaux."
        imageSrc="/skretching.jpg"
        link="/apropos"
        linkText="Découvrir plus"
      />

      {/* Liste des événements */}
      <EventsSection events={eventsData} />

      {/* Section Rejoindre */}
      <JoinSection />
    </main>
  );
}
