'use client';

import { useState, useEffect } from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import styles from './TestimonialsSection.module.css';

const testimonials = [
  {
    quote: "Parfait pour les débutants ! L'équipe est très accueillante et les programmes sont adaptés à tous les niveaux. Je recommande à 100% !",
    author: "Laura Rodriguez",
    role: "Débutante",
    rating: 5,
    avatar: "LR"
  },
  {
    quote: "Des coachs incroyablement professionnels et une ambiance qui motive à se dépasser. J'ai atteint mes objectifs plus vite que prévu.",
    author: "Marc Dubois",
    role: "Athlète confirmé",
    rating: 5,
    avatar: "MD"
  },
  {
    quote: "Les cours de Yoga sont une vraie bouffée d'air frais. Un équilibre parfait entre le corps et l'esprit. Merci ThriveToday !",
    author: "Sophie Martin",
    role: "Adepte de Yoga",
    rating: 5,
    avatar: "SM"
  }
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(current => (current === testimonials.length - 1 ? 0 : current + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Témoignages de Nos Membres</h2>
        <p className={styles.subtitle}>Découvrez ce que nos membres disent de leur expérience ThriveToday</p>
        <div className={styles.testimonialsContainer}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`${styles.testimonialCard} ${index === current ? styles.active : ''}`}>
              <FaQuoteLeft className={styles.quoteIcon} />
              <p className={styles.testimonialText}>{testimonial.quote}</p>
              <div className={styles.rating}>
                {[...Array(testimonial.rating)].map((_, i) => <FaStar key={i} />)}
              </div>
              <div className={styles.authorInfo}>
                <div className={styles.avatar}>{testimonial.avatar}</div>
                <div>
                  <div className={styles.authorName}>{testimonial.author}</div>
                  <div className={styles.authorRole}>{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.indicators}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === current ? styles.active : ''}`}
              onClick={() => setCurrent(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
} 