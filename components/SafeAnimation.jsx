'use client';

import { useState, useEffect, useRef } from 'react';

// Hook pour gérer les animations de scroll avec CSS pur
const useCSSScrollAnimation = (direction = "up", delay = 0, threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.IntersectionObserver) {
      return;
    }

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay, threshold]);

  return { elementRef, isVisible };
};

// Composant pour les animations sécurisées
export default function SafeAnimation({ 
  children, 
  className = '', 
  direction = "up", 
  delay = 0, 
  threshold = 0.1,
  duration = 0.6,
  ...props 
}) {
  const { elementRef, isVisible } = useCSSScrollAnimation(direction, delay, threshold);

  // Classes CSS pour les animations
  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    
    switch (direction) {
      case 'up':
        return 'animate-fade-in-up';
      case 'down':
        return 'animate-fade-in-down';
      case 'left':
        return 'animate-fade-in-left';
      case 'right':
        return 'animate-fade-in-right';
      case 'scale':
        return 'animate-scale-in';
      default:
        return 'animate-fade-in';
    }
  };

  const baseClasses = 'transition-all duration-600 ease-out';
  const animationClass = getAnimationClass();
  const finalClassName = `${baseClasses} ${animationClass} ${className}`.trim();

  return (
    <div
      ref={elementRef}
      className={finalClassName}
      style={{
        transitionDuration: `${duration}s`,
        ...props.style
      }}
      {...props}
    >
      {children}
    </div>
  );
}

// Composant pour les animations de présence
export function SafeAnimatePresence({ children, isVisible, className = '', ...props }) {
  if (!isVisible) return null;

  return (
    <div
      className={`animate-fade-in ${className}`}
      style={{
        animationDuration: '0.6s',
        animationFillMode: 'both',
        ...props.style
      }}
      {...props}
    >
      {children}
    </div>
  );
}

// Composant pour les animations de page
export function SafePageTransition({ children, className = '', ...props }) {
  return (
    <div
      className={`animate-fade-in ${className}`}
      style={{
        animationDuration: '0.8s',
        animationFillMode: 'both',
        ...props.style
      }}
      {...props}
    >
      {children}
    </div>
  );
}

// Composant pour les animations de liste
export function SafeListAnimation({ children, className = '', staggerDelay = 0.1, ...props }) {
  return (
    <div className={className} {...props}>
      {Array.isArray(children) ? children.map((child, index) => (
        <div
          key={index}
          className="animate-fade-in-up"
          style={{
            animationDelay: `${index * staggerDelay}s`,
            animationDuration: '0.6s',
            animationFillMode: 'both'
          }}
        >
          {child}
        </div>
      )) : children}
    </div>
  );
} 