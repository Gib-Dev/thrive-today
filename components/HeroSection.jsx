'use client'
import Image from 'next/image';
import Link from 'next/link';
import styles from './HeroSection.module.css';
import { usePathname } from 'next/navigation';

export default function HeroSection() {
  const pathname = usePathname();
  const loadingStrategy = pathname === '/events/hiit' || '/events/martial' ? 'lazy' : 'eager';

  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <Image
        src="/hero-fitness.webp"
        alt="Femme s'entraînant dans une salle de sport moderne"
        fill
        quality={90}
        priority
        className={styles.backgroundImage}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>
          Thrive<span className={styles.accent}>Today</span>
        </h1>
        <p className={styles.subtitle}>Votre partenaire pour une vie saine et active</p>
        <p className={styles.catchline}>Des programmes adaptés à tous, pour transformer votre corps et votre esprit.</p>
        <div className={styles.buttonGroup}>
          <Link href="/events" className={`${styles.ctaButton} ${styles.animatedBtn}`} aria-label="Découvrir nos programmes">
            Nos Programmes
          </Link>
          <Link href="/apropos" className={`${styles.ctaButton} ${styles.secondary} ${styles.animatedBtn}`}>En savoir plus</Link>
        </div>
      </div>
    </section>
  );
}