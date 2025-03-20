// Importation des styles globaux applicables à tout le site
import './globals.css';
import styles from './layout.module.css';

// Importation des composants de structure
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Importation des polices Google via Next.js pour une meilleure performance
import { Roboto, Playfair_Display } from 'next/font/google';

// Déclaration des polices avec les poids souhaités
// L’option display: 'swap' améliore l’affichage en évitant les retards de rendu du texte
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'], display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'], display: 'swap' });

// Métadonnées globales du site – utiles pour le SEO et l’indexation des moteurs de recherche
export const metadata = {
  title: "ThriveToday",
  description: "Votre mentor pour une vie pleine d'énergies",
};

// Composant racine de l'application – il enveloppe toutes les pages
export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${roboto.className} ${playfair.className}`}>
      <head>
        {/* Préconnexion aux serveurs Google Fonts – cela réduit le temps de chargement des polices */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </head>

      <body className={styles.body}>
        {/* En-tête du site – visible sur toutes les pages */}
        <Header />

        {/* Zone principale où s'affichent les différentes pages (Accueil, Contact, etc.) */}
        <main className={styles.main}>
          {children}
        </main>

        {/* Pied de page global */}
        <Footer />
      </body>
    </html>
  );
}