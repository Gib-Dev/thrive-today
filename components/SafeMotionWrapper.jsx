'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Configuration pour désactiver les animations problématiques
const SAFE_CONFIG = {
  // Désactiver les animations 3D et les transformations complexes
  disableAnimations: process.env.NODE_ENV === 'development' ? false : false,
  // Propriétés autorisées
  allowedProperties: ['opacity', 'scale', 'x', 'y', 'z'],
  // Propriétés interdites
  forbiddenProperties: [
    'rotateX', 'rotateY', 'rotateZ', 'rotate',
    'perspective', 'transformStyle', 'backfaceVisibility',
    'translateZ', 'translate3d', 'rotate3d'
  ]
};

// Hook pour gérer les animations de manière ultra-sécurisée
export const useUltraSafeAnimation = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isAnimationsEnabled, setIsAnimationsEnabled] = useState(true);
  const errorCount = useRef(0);

  useEffect(() => {
    setIsMounted(true);
    
    // Désactiver les animations si trop d'erreurs
    if (errorCount.current > 3) {
      setIsAnimationsEnabled(false);
    }
  }, []);

  const handleAnimationError = (error) => {
    console.warn('Animation error detected:', error);
    errorCount.current += 1;
    
    if (errorCount.current > 3) {
      setIsAnimationsEnabled(false);
      console.warn('Animations disabled due to repeated errors');
    }
  };

  return { isMounted, isAnimationsEnabled, handleAnimationError };
};

// Composant Motion ultra-sécurisé
export const UltraSafeMotion = ({ 
  children, 
  variants, 
  initial = "hidden", 
  animate = "visible", 
  exit = "hidden",
  transition = { duration: 0.6 },
  className = "",
  style = {},
  ...props 
}) => {
  const { isMounted, isAnimationsEnabled, handleAnimationError } = useUltraSafeAnimation();
  const [safeVariants, setSafeVariants] = useState({});

  useEffect(() => {
    if (!isMounted || !variants) return;

    try {
      // Nettoyer les variants de manière ultra-sécurisée
      const cleanedVariants = {};
      
      Object.keys(variants).forEach(key => {
        const variant = variants[key];
        if (typeof variant === 'object' && variant !== null) {
          cleanedVariants[key] = {};
          
          Object.keys(variant).forEach(prop => {
            const value = variant[prop];
            
            // Vérifier si la propriété est interdite
            if (SAFE_CONFIG.forbiddenProperties.includes(prop)) {
              return; // Ignorer complètement
            }
            
            // Vérifier si la propriété est autorisée
            if (!SAFE_CONFIG.allowedProperties.includes(prop) && prop !== 'transition') {
              return; // Ignorer si pas dans la liste autorisée
            }
            
            // Valider les valeurs
            if (typeof value === 'number' && !isNaN(value) && isFinite(value)) {
              cleanedVariants[key][prop] = value;
            } else if (typeof value === 'string' && !value.includes('3d')) {
              cleanedVariants[key][prop] = value;
            } else if (typeof value === 'object' && value !== null && prop === 'transition') {
              cleanedVariants[key][prop] = value;
            }
          });
        }
      });
      
      setSafeVariants(cleanedVariants);
    } catch (error) {
      handleAnimationError(error);
      setSafeVariants({});
    }
  }, [isMounted, variants, handleAnimationError]);

  // Si les animations sont désactivées ou pas monté, retourner un div simple
  if (!isMounted || !isAnimationsEnabled || SAFE_CONFIG.disableAnimations) {
    return (
      <div className={className} style={style} {...props}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      variants={safeVariants}
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
      className={className}
      style={style}
      onError={handleAnimationError}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Composant pour les animations de scroll ultra-sécurisées
export const UltraSafeScrollAnimation = ({ 
  children, 
  direction = "up", 
  delay = 0, 
  className = "",
  threshold = 0.1,
  ...props 
}) => {
  const { isMounted, isAnimationsEnabled } = useUltraSafeAnimation();
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!isMounted || typeof window === 'undefined' || !window.IntersectionObserver) {
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
  }, [isMounted, threshold]);

  const getUltraSafeVariants = () => {
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

    // Utiliser seulement les transformations les plus sûres
    switch (direction) {
      case "up":
        baseVariants.hidden.y = 30;
        baseVariants.visible.y = 0;
        break;
      case "down":
        baseVariants.hidden.y = -30;
        baseVariants.visible.y = 0;
        break;
      case "left":
        baseVariants.hidden.x = 30;
        baseVariants.visible.x = 0;
        break;
      case "right":
        baseVariants.hidden.x = -30;
        baseVariants.visible.x = 0;
        break;
      case "scale":
        baseVariants.hidden.scale = 0.9;
        baseVariants.visible.scale = 1;
        break;
      default:
        break;
    }

    return baseVariants;
  };

  if (!isMounted || !isAnimationsEnabled) {
    return <div ref={ref} className={className} {...props}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      variants={getUltraSafeVariants()}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Wrapper pour AnimatePresence ultra-sécurisé
export const UltraSafeAnimatePresence = ({ children, ...props }) => {
  const { isMounted, isAnimationsEnabled } = useUltraSafeAnimation();

  if (!isMounted || !isAnimationsEnabled) {
    return <>{children}</>;
  }

  return <AnimatePresence {...props}>{children}</AnimatePresence>;
};

// Hook pour créer des variants ultra-sécurisés
export const useUltraSafeVariants = () => {
  const createSafeVariants = (variants) => {
    if (!variants) return {};

    const safeVariants = {};
    
    Object.keys(variants).forEach(key => {
      const variant = variants[key];
      if (typeof variant === 'object' && variant !== null) {
        safeVariants[key] = {};
        
        Object.keys(variant).forEach(prop => {
          const value = variant[prop];
          
          // Ignorer les propriétés interdites
          if (SAFE_CONFIG.forbiddenProperties.includes(prop)) {
            return;
          }
          
          // Accepter seulement les propriétés autorisées
          if (SAFE_CONFIG.allowedProperties.includes(prop) || prop === 'transition') {
            if (typeof value === 'number' && !isNaN(value) && isFinite(value)) {
              safeVariants[key][prop] = value;
            } else if (typeof value === 'string' && !value.includes('3d')) {
              safeVariants[key][prop] = value;
            } else if (typeof value === 'object' && value !== null && prop === 'transition') {
              safeVariants[key][prop] = value;
            }
          }
        });
      }
    });

    return safeVariants;
  };

  return { createSafeVariants };
};

export default UltraSafeMotion; 