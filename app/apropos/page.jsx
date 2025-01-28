import '../globals.css';
import Image from 'next/image';
import team from '@/public/apropos.jpg';

export default function Apropos() {
  return <>
    <main className="about-main">
      {/* En-tête de la page */}
      <section className="hero">
        <h1 className="hero-title">À propos de ThriveToday</h1>
        <p className="hero-subtitle">
          Notre mission est de vous inspirer à atteindre vos objectifs physiques et mentaux.
        </p>
      </section>

      {/* Section de présentation */}
      <section className="about-content">
        <div className="about-text">
          <h2>Notre Vision</h2>
          <p>
            Chez ThriveToday, nous croyons en l'importance de la santé et du bien-être pour
            vivre une vie épanouie. Depuis notre création, nous avons aidé des centaines de
            membres à transformer leur corps et leur esprit dans un environnement chaleureux
            et accueillant.
          </p>
          <p>
            Nous combinons des équipements de pointe avec une équipe dévouée pour vous
            accompagner dans chaque étape de votre parcours.
          </p>
        </div>
        <div className="about-image">
          <Image
            src={team}
            alt="Notre équipe"
            width={600}
            height={400}
            className="about-photo"
          />
        </div>
      </section>

      {/* Section valeurs */}
      <section className="values">
        <h2>Nos valeurs fondamentales</h2>
        <ul className="values-list">
          <li> Bien-être</li>
          <li>Force et Résilience</li>
          <li>Croissance personnelle</li>
          <li>Communauté</li>
        </ul>
      </section>
    </main>
 </>
}
