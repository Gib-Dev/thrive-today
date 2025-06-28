'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaPlay, FaArrowRight, FaStar } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const pathname = usePathname();
  const loadingStrategy = pathname === '/events/hiit' || '/events/martial' ? 'lazy' : 'eager';
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Délai pour l'animation d'entrée
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
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
          <div className={styles.badge}>
            <FaStar className={styles.starIcon} />
            <span>Plus de 1500 membres satisfaits</span>
          </div>
          <h1 className={styles.title}>
            Thrive<span className={styles.accent}>Today</span>
          </h1>
          <p className={styles.subtitle}>
            Votre partenaire pour une vie saine et active
          </p>
          <p className={styles.catchline}>
            Des programmes adaptés à tous, pour transformer votre corps et votre esprit.
          </p>
          <div className={styles.buttonGroup}>
            <Link href="/events" className={`${styles.ctaButton} ${styles.animatedBtn}`}>
              <span>Nos Programmes</span>
              <FaArrowRight className={styles.buttonIcon} />
            </Link>
            <Link href="/apropos" className={`${styles.ctaButton} ${styles.secondary} ${styles.animatedBtn}`}>
              <span>En savoir plus</span>
              <FaPlay className={styles.buttonIcon} />
            </Link>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>15+</span>
              <span className={styles.statLabel}>Années d'expérience</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>Programmes disponibles</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>98%</span>
              <span className={styles.statLabel}>Satisfaction client</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

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
      
      {/* Particules flottantes avec CSS */}
      <div className={styles.particles}>
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={styles.particle}
            style={{ 
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`
            }}
          />
        ))}
      </div>

      <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
        <div className={`${styles.badge} ${styles.animateBadge}`}>
          <FaStar className={styles.starIcon} />
          <span>Plus de 1500 membres satisfaits</span>
        </div>

        <h1 className={`${styles.title} ${styles.animateTitle}`}>
          Thrive<span className={styles.accent}>Today</span>
        </h1>
        
        <p className={`${styles.subtitle} ${styles.animateSubtitle}`}>
          Votre partenaire pour une vie saine et active
        </p>
        
        <p className={`${styles.catchline} ${styles.animateCatchline}`}>
          Des programmes adaptés à tous, pour transformer votre corps et votre esprit.
        </p>
        
        <div className={`${styles.buttonGroup} ${styles.animateButtons}`}>
          <div className={styles.buttonWrapper}>
            <Link href="/events" className={`${styles.ctaButton} ${styles.animatedBtn}`} aria-label="Découvrir nos programmes">
              <span>Nos Programmes</span>
              <FaArrowRight className={styles.buttonIcon} />
            </Link>
          </div>
          
          <div className={styles.buttonWrapper}>
            <Link href="/apropos" className={`${styles.ctaButton} ${styles.secondary} ${styles.animatedBtn}`}>
              <span>En savoir plus</span>
              <FaPlay className={styles.buttonIcon} />
            </Link>
          </div>
        </div>

        <div className={`${styles.stats} ${styles.animateStats}`}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>15+</span>
            <span className={styles.statLabel}>Années d'expérience</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>50+</span>
            <span className={styles.statLabel}>Programmes disponibles</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>98%</span>
            <span className={styles.statLabel}>Satisfaction client</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator avec CSS */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollArrow}></div>
      </div>
    </section>
  );
}