'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './ScrollAnimation.module.css';

// Hook pour gérer les animations de scroll avec CSS pur
const useCSSScrollAnimation = (direction = "up", delay = 0, threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.IntersectionObserver) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return { ref, isVisible };
};

// Composant principal ScrollAnimation avec CSS pur
export default function ScrollAnimation({ 
  children, 
  direction = "up", 
  delay = 0, 
  className = "",
  threshold = 0.1,
  ...props 
}) {
  const { ref, isVisible } = useCSSScrollAnimation(direction, delay, threshold);

  const getAnimationClass = () => {
    if (!isVisible) return styles.hidden;
    
    switch (direction) {
      case "up":
        return styles.animateUp;
      case "down":
        return styles.animateDown;
      case "left":
        return styles.animateLeft;
      case "right":
        return styles.animateRight;
      case "scale":
        return styles.animateScale;
      default:
        return styles.animateUp;
    }
  };

  return <div ref={ref} className={`${className} ${getAnimationClass()}`} {...props}>{children}</div>;
}

// Composant pour les éléments enfants avec animation en cascade
export function AnimatedChild({ children, className = '', delay = 0 }) {
  return (
    <div
      className={className}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

// Composant pour les cartes avec effet de profondeur
export function AnimatedCard({ children, className = '', delay = 0 }) {
  return (
    <div
      className={`${className} ${styles.cardAnimation}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

// Composant AnimatedBadge avec CSS pur
export function AnimatedBadge({ 
  children, 
  delay = 0, 
  className = "",
  ...props 
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className={className} {...props}>{children}</div>;
  }

  const delayStyle = delay > 0 ? { animationDelay: `${delay}s` } : {};

  return (
    <div
      className={`${className} ${styles.badgeAnimation}`}
      style={delayStyle}
      {...props}
    >
      {children}
    </div>
  );
} 