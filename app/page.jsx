import './globals.css';
import EventsSection from '@/components/EventsSection';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import JoinSection from '@/components/JoinSection';
export default function Accueil() {
  return <>
   <main>
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <JoinSection />
    </main>
  </>;
}
