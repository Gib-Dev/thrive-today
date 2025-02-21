import EventHero from '@/components/EventHero';
import EventDetails from '@/components/EventDetails';
import EventBenefits from '@/components/EventBenefits';
import JoinSection from '@/components/JoinSection';

const martialEvent = {
  title: "Arts Martiaux",
  category: "Discipline & Force",
  description: "Apprenez les techniques fondamentales des arts martiaux dans un cadre stimulant.",
  image: "/martial.jpg",
  date: "Mercredi 31 janvier 2025",
  location: "Dojo Central, Ottawa",
  duration: "1h 45min",
  benefits: [
    { icon: "🥋", title: "Maîtrise de soi", description: "Développez discipline et contrôle mental" },
    { icon: "💪", title: "Force et endurance", description: "Un entraînement physique intense et complet" },
    { icon: "🛡", title: "Techniques de défense", description: "Apprenez à vous défendre efficacement" }
  ]
};

export default function MartialArtsEventPage() {
  return <>
    <main>
      <EventHero
        title={martialEvent.title}
        category={martialEvent.category}
        description={martialEvent.description}
        image={martialEvent.image}
      />
      <EventBenefits benefits={martialEvent.benefits} />
      <EventDetails
        date={martialEvent.date}
        location={martialEvent.location}
        duration={martialEvent.duration}
      />
    </main>
    <JoinSection />
  </>;
}
