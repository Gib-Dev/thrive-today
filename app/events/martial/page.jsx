// Importation des composants principaux de la page
import EventHero from '@/components/EventHero';
import EventDetails from '@/components/EventDetails';
import EventBenefits from '@/components/EventBenefits';
import JoinSection from '@/components/JoinSection';

// Importation des icônes depuis react-icons
import { GiHighKick, GiStrong, GiShield } from 'react-icons/gi';

// Données de l'événement Arts Martiaux
const martialEvent = {
  title: "Arts Martiaux",
  category: "Discipline & Force",
  description: "Apprenez les techniques fondamentales des arts martiaux dans un cadre stimulant.",
  image: "/martial.webp", // Image optimisée au format WebP
  date: "Mercredi 31 janvier 2025",
  location: "Dojo Central, Ottawa",
  duration: "1h 45min",

  // Avantages de l'événement avec icônes React Icons
  benefits: [
    { icon: <GiHighKick />, title: "Maîtrise de soi", description: "Développez discipline et contrôle mental" },
    { icon: <GiStrong />, title: "Force et endurance", description: "Un entraînement physique intense et complet" },
    { icon: <GiShield />, title: "Techniques de défense", description: "Apprenez à vous défendre efficacement" }
  ]
};

// Composant principal de la page Arts Martiaux
export default function MartialArtsEventPage() {
  return (
    <>
      <main>
        {/* Section d’introduction visuelle avec titre et description */}
        <EventHero
          title={martialEvent.title}
          category={martialEvent.category}
          description={martialEvent.description}
          image={martialEvent.image}
        />

        {/* Section des bénéfices clés */}
        <EventBenefits benefits={martialEvent.benefits} />

        {/* Informations pratiques de l'événement */}
        <EventDetails
          date={martialEvent.date}
          location={martialEvent.location}
          duration={martialEvent.duration}
        />
      </main>

      {/* Section d'appel à l'action finale */}
      <JoinSection />
    </>
  );
}