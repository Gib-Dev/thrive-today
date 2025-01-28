import Image from 'next/image';
import hiitImage from '@/public/hiit.jpg';

export default function HIITEventPage() {
  return <>
      <main>
        <section>
          <Image src={hiitImage} alt="Entraînement HIIT" width={800} height={400} />
          <h1>Entraînement HIIT</h1>
          <p>
            Découvrez l’entraînement à haute intensité (HIIT) conçu pour maximiser votre dépense
            énergétique en un minimum de temps. Cet entraînement est parfait pour brûler des calories,
            améliorer votre endurance et renforcer vos muscles.
          </p>
        </section>
        <section>
          <h2>Pourquoi choisir le HIIT ?</h2>
          <ul>
            <li>Brûle un maximum de calories en un minimum de temps.</li>
            <li>Améliore la santé cardiovasculaire.</li>
            <li>Convient à tous les niveaux de condition physique.</li>
          </ul>
        </section>
        <section>
          <h2>Informations pratiques</h2>
          <p><strong>Date :</strong> Lundi 29 janvier 2025</p>
          <p><strong>Lieu :</strong> Studio FitZone, Ottawa</p>
        </section>
      </main>
    </>
}
