import './globals.css';
import styles from './layout.module.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Roboto, Playfair_Display } from 'next/font/google';

// Définition des polices au niveau global
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata = {
  title: "ThriveToday",
  description: "Votre mentor pour une vie pleine d'énergies",
};

export default function RootLayout({ children }) {
  return <html lang="fr" className={`${roboto.className} ${playfair.className}`}>
    <body className={styles.body}>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </body>
  </html>
}
