'use client';

import { useState, useEffect, useRef } from 'react';
import { FaArrowRight, FaHeart, FaStar, FaFire, FaCheck } from 'react-icons/fa';
import Link from 'next/link';
import styles from './SmartCTA.module.css';

export default function SmartCTA() {
  const [currentCTA, setCurrentCTA] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [userBehavior, setUserBehavior] = useState({
    scrollDepth: 0,
    timeOnPage: 0,
    interactions: 0
  });
  const intervalRef = useRef(null);
  const ctaRef = useRef(null);

  const ctaVariants = [
    {
      id: 1,
      title: "Prêt à transformer votre vie ?",
      subtitle: "Rejoignez notre communauté",
      description: "Commencez votre voyage vers une version plus forte de vous-même",
      buttonText: "Commencer maintenant",
      buttonIcon: FaArrowRight,
      color: "var(--color-primary)",
      icon: "🚀",
      urgency: "high"
    },
    {
      id: 2,
      title: "Offre spéciale limitée",
      subtitle: "50% de réduction",
      description: "Profitez de notre offre d'essai à prix réduit",
      buttonText: "Profiter de l'offre",
      buttonIcon: FaHeart,
      color: "var(--color-secondary)",
      icon: "💎",
      urgency: "medium"
    },
    {
      id: 3,
      title: "Recommandé par 98% de nos membres",
      subtitle: "Satisfaction garantie",
      description: "Découvrez pourquoi nos membres nous font confiance",
      buttonText: "Voir les témoignages",
      buttonIcon: FaStar,
      color: "var(--color-accent)",
      icon: "⭐",
      urgency: "low"
    },
    {
      id: 4,
      title: "Programme personnalisé pour vous",
      subtitle: "Adapté à vos objectifs",
      description: "Nos experts créent un plan sur mesure pour vos besoins",
      buttonText: "Évaluation gratuite",
      buttonIcon: FaCheck,
      color: "var(--color-primary)",
      icon: "🎯",
      urgency: "high"
    }
  ];

  useEffect(() => {
    setMounted(true);
    
    // Délai pour éviter les erreurs d'hydratation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Suivre le temps passé sur la page
    intervalRef.current = setInterval(() => {
      setUserBehavior(prev => ({
        ...prev,
        timeOnPage: prev.timeOnPage + 1
      }));
    }, 1000);

    // Suivre la profondeur de scroll
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        setUserBehavior(prev => ({
          ...prev,
          scrollDepth: Math.max(prev.scrollDepth, scrollPercent)
        }));
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [mounted]);

  useEffect(() => {
    if (!mounted || !isVisible) return;

    // Changer de CTA basé sur le comportement utilisateur
    const changeInterval = setInterval(() => {
      setCurrentCTA(prev => (prev + 1) % ctaVariants.length);
    }, 8000);

    return () => clearInterval(changeInterval);
  }, [mounted, isVisible, ctaVariants.length]);

  const handleInteraction = () => {
    setUserBehavior(prev => ({
      ...prev,
      interactions: prev.interactions + 1
    }));
  };

  // Rendu côté serveur sans les états dynamiques
  if (!mounted) {
    return (
      <section className={styles.smartCTASection}>
        <div className={styles.container}>
          <div className={styles.ctaWrapper} style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <div className={styles.ctaCard}>
              <div className={styles.ctaHeader} style={{ justifyContent: 'center' }}>
                <div className={styles.ctaIcon} style={{ margin: '0 auto' }}>🚀</div>
                <div className={styles.ctaContent}>
                  <h3 className={styles.ctaTitle}>Prêt à transformer votre vie ?</h3>
                  <h4 className={styles.ctaSubtitle}>Rejoignez notre communauté</h4>
                  <p className={styles.ctaDescription}>Commencez votre voyage vers une version plus forte de vous-même</p>
                </div>
              </div>
              <div className={styles.ctaActions} style={{ justifyContent: 'center' }}>
                <a className={styles.ctaButton} style={{ margin: '0 auto', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span>Commencer maintenant</span>
                </a>
              </div>
              <div className={styles.ctaFooter} style={{ marginTop: 24 }}>
                <div className={styles.trustIndicators} style={{ display: 'flex', justifyContent: 'center', gap: 24 }}>
                  <div className={styles.trustItem} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span>Satisfaction garantie</span>
                  </div>
                  <div className={styles.trustItem} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span>4.9/5 étoiles</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const currentCTAData = ctaVariants[currentCTA];
  const ButtonIcon = currentCTAData.buttonIcon;

  return (
    <section className={styles.smartCTASection}>
      <div className={styles.container}>
        <div className={styles.ctaWrapper} style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <div
            key={currentCTAData.id}
            className={styles.ctaCard}
            style={{ 
              '--cta-color': currentCTAData.color,
              '--cta-glow': `${currentCTAData.color}40`,
              margin: '0 auto',
              textAlign: 'center',
              boxShadow: '0 4px 32px rgba(99,102,241,0.08)'
            }}
          >
            <div className={styles.ctaHeader} style={{ justifyContent: 'center' }}>
              <div className={styles.ctaIcon} style={{ margin: '0 auto' }}>
                {currentCTAData.icon}
              </div>
              <div className={styles.ctaContent}>
                <h3 className={styles.ctaTitle}>{currentCTAData.title}</h3>
                <h4 className={styles.ctaSubtitle}>{currentCTAData.subtitle}</h4>
                <p className={styles.ctaDescription}>{currentCTAData.description}</p>
              </div>
            </div>

            <div className={styles.ctaActions} style={{ justifyContent: 'center' }}>
              <Link 
                href="/events" 
                className={styles.ctaButton}
                onClick={handleInteraction}
                style={{ 
                  backgroundColor: currentCTAData.color,
                  boxShadow: `0 0 20px ${currentCTAData.color}40`,
                  margin: '0 auto',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <span>{currentCTAData.buttonText}</span>
                <ButtonIcon className={styles.buttonIcon} />
              </Link>

              <div className={styles.urgencyIndicator} style={{ marginTop: 8 }}>
                {currentCTAData.urgency === 'high' && (
                  <div className={styles.urgencyBadge}>
                    <FaFire />
                    <span>Offre limitée</span>
                  </div>
                )}
              </div>
            </div>

            <div className={styles.ctaFooter} style={{ marginTop: 24 }}>
              <div className={styles.trustIndicators} style={{ display: 'flex', justifyContent: 'center', gap: 24 }}>
                <div className={styles.trustItem} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <FaCheck />
                  <span>Satisfaction garantie</span>
                </div>
                <div className={styles.trustItem} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <FaStar />
                  <span>4.9/5 étoiles</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.ctaNavigation} style={{ justifyContent: 'center', marginTop: 16 }}>
            {ctaVariants.map((cta, index) => (
              <button
                key={cta.id}
                className={`${styles.navDot} ${index === currentCTA ? styles.active : ''}`}
                onClick={() => setCurrentCTA(index)}
                style={{ 
                  backgroundColor: index === currentCTA ? currentCTAData.color : 'var(--color-gray-300)'
                }}
                aria-label={`Aller à l'offre ${cta.title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 