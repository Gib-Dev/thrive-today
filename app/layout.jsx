import './globals.css';
 import styles from './layout.module.css'

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout({ children }) {
  return <html lang="en">
        <body className={styles.body}>
          <Header />

          <main className={styles.main}>
            {children}
          </main>

          <Footer />

          </body>
      </html>
}
