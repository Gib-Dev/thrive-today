'use client';

import { useState, useEffect } from 'react';
import { FaUsers, FaCalendarCheck, FaHeart, FaAward } from 'react-icons/fa';
import styles from './StatsSection.module.css';

const stats = [
  { icon: FaUsers, value: 1500, suffix: '+', label: "Membres Actifs", description: "Communauté grandissante" },
  { icon: FaCalendarCheck, value: 50, suffix: '+', label: "Programmes", description: "Entraînements variés" },
  { icon: FaHeart, value: 98, suffix: '%', label: "% Satisfaction", description: "Clients satisfaits" },
  { icon: FaAward, value: 15, suffix: '+', label: "Années d'Expérience", description: "Expertise reconnue" }
];

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new window.IntersectionObserver(
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

  useEffect(() => {
    if (!isVisible) return;
    const durations = [1200, 1400, 1600, 1800];
    stats.forEach((stat, i) => {
      let start = 0;
      let end = stat.value;
      let startTime = null;
      function animateCount(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / durations[i], 1);
        const val = Math.floor(progress * (end - start) + start);
        setCounts(prev => {
          const updated = [...prev];
          updated[i] = val;
          return updated;
        });
        if (progress < 1) {
          requestAnimationFrame(animateCount);
        } else {
          setCounts(prev => {
            const updated = [...prev];
            updated[i] = end;
            return updated;
          });
        }
      }
      requestAnimationFrame(animateCount);
    });
  }, [isVisible]);

  return (
    <section className={styles.statsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Nos Chiffres Clés</h2>
        <p className={styles.subtitle}>Découvrez l'impact de ThriveToday sur la communauté du fitness</p>
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.statIcon}><stat.icon /></div>
              <div className={styles.statValue}>{isVisible ? counts[index] + stat.suffix : '0' + stat.suffix}</div>
              <div className={styles.statLabel}>{stat.label}</div>
              <div className={styles.statDescription}>{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 