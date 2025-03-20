// Importation des composants clés de la page événement
import EventHero from '@/components/EventHero';
import EventDetails from '@/components/EventDetails';
import EventBenefits from '@/components/EventBenefits';
import JoinSection from '@/components/JoinSection';

// Métadonnées SEO de la page HIIT (titre & description)
export const metadata = {
  title: "Entrainement haute intensité | Thrive Today",
  description: "Découvrez nos séances d'entrainement à haute intensité",
};

// Données de l'événement HIIT, utilisées pour alimenter les composants dynamiquement
const hiitEvent = {
  title: "HIIT",
  category: "Entraînement",
  description: "Maximisez votre dépense énergétique avec des sessions courtes et intenses.",

  // 🔄 Ici on utilise désormais une image optimisée au format WebP
  image: "/hiit.webp",

  date: "Lundi 29 janvier 2025",
  location: "Studio FitZone, Ottawa",
  duration: "30 minutes intensives",

  // Avantages listés sous forme de tableau pour affichage structuré
  benefits: [
    { icon: "🔥", title: "Brûlage intensif", description: "Jusqu'à 30% de calories en plus qu'un entraînement traditionnel" },
    { icon: "⏱️", title: "Efficacité", description: "Résultats visibles en seulement 20 minutes par session" },
    { icon: "💪", title: "Adaptable", description: "Pour tous les niveaux, débutants comme confirmés" }
  ]
};

// Composant principal de la page HIIT
export default function HIITEventPage() {
  return (
    <>
      <main>
        {/* Section d’introduction visuelle avec image Hero + titre + description */}
        <EventHero
          title={hiitEvent.title}
          category={hiitEvent.category}
          description={hiitEvent.description}
          image={hiitEvent.image} // ✅ Image WebP optimisée pour de meilleures performances
        />

        {/* Affichage des bénéfices clés du programme */}
        <EventBenefits benefits={hiitEvent.benefits} />

        {/* Détails logistiques de la séance */}
        <EventDetails
          date={hiitEvent.date}
          location={hiitEvent.location}
          duration={hiitEvent.duration}
        />
      </main>

      {/* Appel à l’action pour s’inscrire ou rejoindre la communauté */}
      <JoinSection />
    </>
  );
}
