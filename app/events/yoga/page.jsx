import EventHero from '@/components/EventHero';
import EventDetails from '@/components/EventDetails';
import EventBenefits from '@/components/EventBenefits';
import JoinSection from '@/components/JoinSection';

export const metadata = {
  title: "Yoga | Thrive Today",
  description: "Découvrez nos séances de yoga",
};

const yogaEvent = {
  title: "Yoga Énergisant",
  category: "Bien-être",
  description: "Découvrez nos séances de yoga revitalisantes adaptées à tous les niveaux.",
  image: "/yoga.jpg",
  date: "Mardi 30 janvier 2025",
  location: "Salle Zen, Gatineau",
  duration: "1h 30min",
  benefits: [
    { icon: "🧘", title: "Flexibilité & Équilibre", description: "Améliorez votre mobilité articulaire et votre stabilité corporelle" },
    { icon: "🌿", title: "Stress & Relaxation", description: "Techniques de respiration et méditation pour un esprit apaisé" },
    { icon: "💓", title: "Santé Globale", description: "Renforcement musculaire et amélioration de la posture" }
  ]
};

export default function YogaEventPage() {
  return <>
    <main>
      <EventHero
        title={yogaEvent.title}
        category={yogaEvent.category}
        description={yogaEvent.description}
        image={yogaEvent.image}
      />
      <EventBenefits benefits={yogaEvent.benefits} />
      <EventDetails
        date={yogaEvent.date}
        location={yogaEvent.location}
        duration={yogaEvent.duration}
      />
    </main>
    <JoinSection />
  </>;
}
