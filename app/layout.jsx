// Importation des styles globaux applicables à tout le site
import './globals.css';
import styles from './layout.module.css';

// Importation des composants de structure
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollIndicator from '../components/ScrollIndicator';
import ErrorBoundary from '../components/ErrorBoundary';

// Importation des polices Google via Next.js pour une meilleure performance
import { Inter, Playfair_Display } from 'next/font/google';

// Déclaration des polices avec les poids souhaités
// L'option display: 'swap' améliore l'affichage en évitant les retards de rendu du texte
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

// Métadonnées globales du site – utiles pour le SEO et l'indexation des moteurs de recherche
export const metadata = {
  title: {
    default: "ThriveToday - Votre mentor pour une vie pleine d'énergies",
    template: "%s | ThriveToday"
  },
  description: "Transformez votre corps et votre esprit avec nos programmes de yoga, HIIT et arts martiaux. Rejoignez ThriveToday pour une vie plus saine et équilibrée.",
  keywords: ["fitness", "yoga", "HIIT", "arts martiaux", "bien-être", "sport", "entraînement", "santé", "thrive today"],
  authors: [{ name: "ThriveToday Team" }],
  creator: "ThriveToday",
  publisher: "ThriveToday",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://thrivetoday.fr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://thrivetoday.fr',
    title: "ThriveToday - Votre mentor pour une vie pleine d'énergies",
    description: "Transformez votre corps et votre esprit avec nos programmes de yoga, HIIT et arts martiaux.",
    siteName: 'ThriveToday',
    images: [
      {
        url: '/hero-fitness.webp',
        width: 1200,
        height: 630,
        alt: 'ThriveToday - Fitness et bien-être',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "ThriveToday - Votre mentor pour une vie pleine d'énergies",
    description: "Transformez votre corps et votre esprit avec nos programmes de yoga, HIIT et arts martiaux.",
    images: ['/hero-fitness.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

// Composant racine de l'application – il enveloppe toutes les pages
export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Préconnexion aux serveurs Google Fonts – cela réduit le temps de chargement des polices */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Manifest pour PWA */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#6366f1" />
        
        {/* Préchargement des ressources critiques */}
        <link rel="preload" href="/hero-fitness.webp" as="image" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="ThriveToday" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>

      <body className={styles.body}>
        <ErrorBoundary>
          <ScrollIndicator />
          {/* En-tête du site – visible sur toutes les pages */}
          <Header />

          {/* Zone principale où s'affichent les différentes pages (Accueil, Contact, etc.) */}
          <main className={styles.main}>
            {children}
          </main>

          {/* Pied de page global */}
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  );
}