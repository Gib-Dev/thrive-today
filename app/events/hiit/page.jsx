import EventHero from '@/components/EventHero';
import EventDetails from '@/components/EventDetails';
import EventBenefits from '@/components/EventBenefits';
import JoinSection from '@/components/JoinSection';

const hiitEvent = {
  title: "HIIT",
  category: "Entraînement",
  description: "Maximisez votre dépense énergétique avec des sessions courtes et intenses.",
  image: "/hiit.jpg",
  date: "Lundi 29 janvier 2025",
  location: "Studio FitZone, Ottawa",
  duration: "30 minutes intensives",
  benefits: [
    { icon: "🔥", title: "Brûlage intensif", description: "Jusqu'à 30% de calories en plus qu'un entraînement traditionnel" },
    { icon: "⏱️", title: "Efficacité", description: "Résultats visibles en seulement 20 minutes par session" },
    { icon: "💪", title: "Adaptable", description: "Pour tous les niveaux, débutants comme confirmés" }
  ]
};

export default function HIITEventPage() {
  return <>
    <main>
      <EventHero
        title={hiitEvent.title}
        category={hiitEvent.category}
        description={hiitEvent.description}
        image={hiitEvent.image}
      />
      <EventBenefits benefits={hiitEvent.benefits} />
      <EventDetails
        date={hiitEvent.date}
        location={hiitEvent.location}
        duration={hiitEvent.duration}
      />
    </main>
    <JoinSection />
  </>;
}
