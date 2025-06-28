'use client';

import { FaStar } from 'react-icons/fa';
import styles from './TestimonialsSection.module.css';

const testimonials = [
  {
    id: 'laura-rodriguez',
    quote: "Parfait pour les débutants ! L'équipe est très accueillante et les programmes sont adaptés à tous les niveaux. Je recommande à 100% !",
    author: "Laura Rodriguez",
    role: "Débutante",
    rating: 5,
    avatar: "LR"
  },
  {
    id: 'marc-dubois',
    quote: "Des coachs incroyablement professionnels et une ambiance qui motive à se dépasser. J'ai atteint mes objectifs plus vite que prévu.",
    author: "Marc Dubois",
    role: "Athlète confirmé",
    rating: 5,
    avatar: "MD"
  },
  {
    id: 'sophie-martin',
    quote: "Les cours de Yoga sont une vraie bouffée d'air frais. Un équilibre parfait entre le corps et l'esprit. Merci ThriveToday !",
    author: "Sophie Martin",
    role: "Adepte de Yoga",
    rating: 5,
    avatar: "SM"
  }
];

export default function TestimonialsSection() {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Témoignages de Nos Membres</h2>
        <p className={styles.subtitle}>Découvrez ce que nos membres disent de leur expérience ThriveToday</p>
        
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <div className={styles.testimonialContent}>
                <p className={styles.testimonialText}>{testimonial.quote}</p>
                
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorImage}>
                    {testimonial.avatar}
                  </div>
                  <div className={styles.authorInfo}>
                    <div className={styles.authorName}>{testimonial.author}</div>
                    <div className={styles.authorRole}>{testimonial.role}</div>
                  </div>
                </div>
                
                <div className={styles.rating}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={`star-${testimonial.id}-${i}`} className={styles.star} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 