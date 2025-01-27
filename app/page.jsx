import './globals.css';
import Highlight from '@/components/Highlight';
import Image from 'next/image'; 
import Link from 'next/link';
import wlifting from '@/public/wlifting.jpg';
import boxe from '@/public/boxe.jpg';
import wcorde from '@/public/wcorde.jpg';
import martial from '@/public/martial.jpg';

export default function Accueil() {
  return <>
    <main>
      {/* Section Accueil */}
      <section id="home" className="hero-section">
        <h1 className="hero-title">Bienvenue chez ThriveToday</h1>
        <p className="hero-subtitle">Transformez votre corps et votre esprit dans un environnement inspirant.</p>
        <div className="highlights">
          <Highlight author="M B">
            "Si tu peux t'imaginer svelte physiquement et mentalement, c'est que tu peux le faire."
          </Highlight>
          <Highlight author="A B">
            "Ici, tu peux avoir le corps dont tu rêves et garder la santé à prix abordable."
          </Highlight>
        </div>
      </section>

      {/* Section À propos */}
      <section id="about" className="about-section">
        <div className="about-content">
          <Image
            src={wlifting}
            alt="Salle d'entraînement"
            width={500}
            height={300}
            className="about-image"
          />
          <div>
            <h2>À propos de nous</h2>
            <p>
              Chez ThriveToday, nous croyons en l'importance de la santé physique et mentale. Notre mission est
              d'offrir un environnement accueillant et des programmes adaptés à tous les niveaux, que vous soyez
              débutant ou confirmé.
            </p>
          </div>
        </div>
      </section>

      {/* Section Événements */}
      <section id="events" className="events-section">
        <h2>Événements à venir</h2>
        <div className="event-list">
          <div className="event-card">
            <Image
              src={boxe}
              alt="Cours de Yoga"
              width={400}
              height={250}
              className="event-image"
            />
            <h3>Cours de Yoga</h3>
            <p>Séance revitalisante de yoga pour tous.</p>
            <Link href="/events/yoga">En savoir plus</Link>
          </div>
          <div className="event-card">
            <Image
              src={wcorde}
              alt="Entraînement HIIT"
              width={400}
              height={250}
              className="event-image"
            />
            <h3>Entraînement HIIT</h3>
            <p>Entraînement intensif pour brûler des calories rapidement.</p>
            <Link href="/events/hiit">En savoir plus</Link>
          </div>
          <div className="event-card">
            <Image
              src={martial}
              alt="Arts Martiaux"
              width={400}
              height={250}
              className="event-image"
            />
            <h3>Arts Martiaux</h3>
            <p>Découvrez les techniques d'arts martiaux dans un cadre stimulant.</p>
            <Link href="/events/martial">En savoir plus</Link>
          </div>
        </div>
      </section>

      {/* Section Rejoignez-nous */}
      <section id="join" className="join-section">
        <h2>Rejoignez-nous</h2>
        <p>Contactez-nous dès aujourd'hui pour une séance d'essai gratuite !</p>
        <button className="button">Nous Contacter</button>
      </section>
    </main>
  </>;
}
