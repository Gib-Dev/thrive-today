'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTachometerAlt, FaMobile, FaDesktop, FaSearch } from 'react-icons/fa';
import styles from './PerformanceMetrics.module.css';

const metrics = [
  {
    icon: FaTachometerAlt,
    title: 'Performance',
    value: '95+',
    unit: 'Lighthouse',
    description: 'Score optimisé sur tous les critères'
  },
  {
    icon: FaMobile,
    title: 'Mobile',
    value: '100',
    unit: 'Responsive',
    description: 'Interface adaptée à tous les appareils'
  },
  {
    icon: FaDesktop,
    title: 'Bundle',
    value: '<500KB',
    unit: 'Gzippé',
    description: 'Taille optimisée pour un chargement rapide'
  },
  {
    icon: FaSearch,
    title: 'SEO',
    value: '100',
    unit: 'Optimisé',
    description: 'Métadonnées complètes et Open Graph'
  }
];

export default function PerformanceMetrics() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector(`.${styles.container}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className={styles.content}
      >
        <h2 className={styles.title}>Métriques de Performance</h2>
        <p className={styles.subtitle}>
          Découvrez pourquoi ThriveToday offre une expérience utilisateur exceptionnelle
        </p>
        
        <div className={styles.metricsGrid}>
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              className={styles.metricCard}
            >
              <div className={styles.metricIcon}>
                <metric.icon />
              </div>
              <h3 className={styles.metricTitle}>{metric.title}</h3>
              <div className={styles.metricValue}>
                <span className={styles.value}>{metric.value}</span>
                <span className={styles.unit}>{metric.unit}</span>
              </div>
              <p className={styles.metricDescription}>{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 