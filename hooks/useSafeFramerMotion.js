'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

// Hook pour gérer les animations Framer Motion de manière sécurisée
export const useSafeFramerMotion = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      // Nettoyer les animations en cours lors du démontage
      if (animationRef.current) {
        animationRef.current();
      }
    };
  }, []);

  // Fonction pour créer des variants sécurisés
  const createSafeVariants = useCallback((variants) => {
    if (!variants) return {};

    const safeVariants = {};
    
    Object.keys(variants).forEach(key => {
      const variant = variants[key];
      if (typeof variant === 'object' && variant !== null) {
        safeVariants[key] = {};
        
        Object.keys(variant).forEach(prop => {
          const value = variant[prop];
          
          // Filtrer les propriétés problématiques
          if (prop === 'rotateX' || prop === 'rotateY' || prop === 'rotateZ' || 
              prop === 'perspective' || prop === 'transformStyle' || prop === 'backfaceVisibility') {
            return; // Ignorer ces propriétés
          }
          
          // Valider les valeurs
          if (typeof value === 'number' && !isNaN(value) && isFinite(value)) {
            safeVariants[key][prop] = value;
          } else if (typeof value === 'string') {
            // Nettoyer les valeurs de chaîne
            if (value.includes('translateZ') || value.includes('rotateX') || 
                value.includes('rotateY') || value.includes('rotateZ') ||
                value.includes('perspective')) {
              return; // Ignorer les valeurs 3D
            }
            safeVariants[key][prop] = value;
          } else if (typeof value === 'object' && value !== null) {
            // Pour les transitions et autres objets
            if (prop === 'transition') {
              safeVariants[key][prop] = value;
            }
          }
        });
      }
    });

    return safeVariants;
  }, []);

  // Fonction pour créer des animations de scroll sécurisées
  const createScrollAnimation = useCallback((direction = 'up', delay = 0) => {
    const baseVariants = {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { 
          duration: 0.6, 
          delay,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }
    };

    // Utiliser seulement des transformations 2D sécurisées
    switch (direction) {
      case 'up':
        baseVariants.hidden.y = 50;
        baseVariants.visible.y = 0;
        break;
      case 'down':
        baseVariants.hidden.y = -50;
        baseVariants.visible.y = 0;
        break;
      case 'left':
        baseVariants.hidden.x = 50;
        baseVariants.visible.x = 0;
        break;
      case 'right':
        baseVariants.hidden.x = -50;
        baseVariants.visible.x = 0;
        break;
      case 'scale':
        baseVariants.hidden.scale = 0.8;
        baseVariants.visible.scale = 1;
        break;
      default:
        break;
    }

    return baseVariants;
  }, []);

  // Fonction pour créer des animations de hover sécurisées
  const createHoverAnimation = useCallback((scale = 1.05) => {
    return {
      hover: { 
        scale,
        transition: { duration: 0.2, ease: "easeInOut" }
      },
      tap: { 
        scale: scale * 0.95,
        transition: { duration: 0.1 }
      }
    };
  }, []);

  // Fonction pour nettoyer les animations
  const cleanupAnimation = useCallback((cleanupFn) => {
    animationRef.current = cleanupFn;
  }, []);

  // Fonction pour gérer les erreurs d'animation
  const handleAnimationError = useCallback((error) => {
    console.warn('Animation error detected:', error);
    setIsAnimating(false);
    
    // Si c'est une erreur de conversion d'unités, on peut essayer de récupérer
    if (error.message && error.message.includes('positionalValues')) {
      console.log('Attempting to recover from Framer Motion error...');
      // Attendre un peu avant de réessayer
      setTimeout(() => {
        setIsAnimating(true);
      }, 100);
    }
  }, []);

  return {
    isMounted,
    isAnimating,
    createSafeVariants,
    createScrollAnimation,
    createHoverAnimation,
    cleanupAnimation,
    handleAnimationError,
    setIsAnimating
  };
};

// Hook pour gérer les animations de scroll avec Intersection Observer
export const useScrollAnimation = (threshold = 0.1, rootMargin = '0px') => {
  const [isInView, setIsInView] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || typeof window === 'undefined' || !window.IntersectionObserver) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isMounted, threshold, rootMargin]);

  return { ref, isInView, isMounted };
};

// Hook pour gérer les animations de page
export const usePageAnimation = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Délai pour éviter les erreurs d'hydratation
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const pageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { 
        duration: 0.3 
      }
    }
  };

  return { isPageLoaded, isMounted, pageVariants };
};

export default useSafeFramerMotion; 