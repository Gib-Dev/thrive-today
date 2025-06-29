'use client';

import { useState, useEffect, useRef } from 'react';
import { FaChartLine, FaUsers, FaTrophy, FaHeart } from 'react-icons/fa';
import styles from './PerformanceMetrics.module.css';

export default function PerformanceMetrics() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    
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

  if (!mounted) {
    return (
      <section className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Nos Performances</h2>
          <p className={styles.subtitle}>
            Des résultats concrets qui parlent d'eux-mêmes
          </p>
          <div className={styles.metricsGrid}>
            {metrics.map((metric, index) => (
              <div key={metric.title} className={styles.metricCard}>
                <div className={styles.metricIcon}>
                  <metric.icon />
                </div>
                <h3 className={styles.metricTitle}>{metric.title}</h3>
                <div className={styles.metricValue}>{metric.value}</div>
                <p className={styles.metricDescription}>{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.content}>
        <h2 className={styles.title}>Nos Performances</h2>
        <p className={styles.subtitle}>
          Des résultats concrets qui parlent d'eux-mêmes
        </p>
        <div className={styles.metricsGrid}>
          {metrics.map((metric, index) => (
            <div 
              key={metric.title} 
              className={`${styles.metricCard} ${isVisible ? styles.animateIn : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.metricIcon}>
                <metric.icon />
              </div>
              <h3 className={styles.metricTitle}>{metric.title}</h3>
              <div className={styles.metricValue}>{metric.value}</div>
              <p className={styles.metricDescription}>{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 