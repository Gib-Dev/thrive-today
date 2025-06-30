'use client';

import { useState, useEffect, useRef } from 'react';
import { FaChartLine, FaUsers, FaTrophy, FaHeart } from 'react-icons/fa';
import styles from './PerformanceMetrics.module.css';

export default function PerformanceMetrics() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.IntersectionObserver) {
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

      return () => {
        if (element) {
          observer.unobserve(element);
        }
      };
    }
  }, []);

  const metrics = [
    {
      title: "Membres actifs",
      value: "2,500+",
      icon: FaUsers,
      description: "Personnes qui transforment leur vie"
    },
    {
      title: "Taux de réussite",
      value: "94%",
      icon: FaChartLine,
      description: "Objectifs atteints par nos membres"
    },
    {
      title: "Récompenses",
      value: "150+",
      icon: FaTrophy,
      description: "Prix et certifications obtenus"
    },
    {
      title: "Satisfaction",
      value: "4.9/5",
      icon: FaHeart,
      description: "Note moyenne de nos services"
    }
  ];

  return (
    <section className={styles.performanceSection}>
      <div className={styles.container} ref={containerRef}>
        <h2 className={styles.title}>Nos Performances</h2>
        <div className={styles.metricsGrid}>
          {metrics.map((metric, idx) => (
            <div key={metric.title} className={styles.metricCard}>
              <div className={styles.metricIcon}><metric.icon /></div>
              <div className={styles.metricValue}>{metric.value}</div>
              <div className={styles.metricTitle}>{metric.title}</div>
              <div className={styles.metricDescription}>{metric.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 