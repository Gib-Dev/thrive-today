'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Hook personnalisé pour gérer les animations de manière sécurisée
export const useSafeAnimation = (initialState = false) => {
  const [isVisible, setIsVisible] = useState(initialState);
  const [isMounted, setIsMounted] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
    
    // Délai pour éviter les erreurs d'hydratation
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setIsVisible(false);
    };
  }, []);

  return { isVisible, isMounted };
};

// Composant wrapper sécurisé pour les animations
export const SafeMotion = ({ 
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
  const { isMounted } = useSafeAnimation();
  const [safeVariants, setSafeVariants] = useState({});

  useEffect(() => {
    if (isMounted && variants) {
      // Nettoyer les variants pour éviter les erreurs de conversion d'unités
      const cleanedVariants = {};
      
      Object.keys(variants).forEach(key => {
        const variant = variants[key];
        if (typeof variant === 'object') {
          cleanedVariants[key] = {};
          
          Object.keys(variant).forEach(prop => {
            const value = variant[prop];
            
            // Filtrer les propriétés problématiques
            if (prop === 'rotateX' || prop === 'rotateY' || prop === 'rotateZ' || 
                prop === 'perspective' || prop === 'transformStyle') {
              return; // Ignorer ces propriétés
            }
            
            // Valider les valeurs numériques
            if (typeof value === 'number' && !isNaN(value)) {
              cleanedVariants[key][prop] = value;
            } else if (typeof value === 'string') {
              // Nettoyer les valeurs de chaîne
              if (value.includes('translateZ') || value.includes('rotateX') || 
                  value.includes('rotateY') || value.includes('rotateZ')) {
                return; // Ignorer les valeurs 3D
              }
              cleanedVariants[key][prop] = value;
            } else if (typeof value === 'object' && value !== null) {
              cleanedVariants[key][prop] = value;
            }
          });
        }
      });
      
      setSafeVariants(cleanedVariants);
    }
  }, [isMounted, variants]);

  if (!isMounted) {
    return <div className={className} style={style} {...props}>{children}</div>;
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
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Composant pour les animations de scroll sécurisées
export const SafeScrollAnimation = ({ 
  children, 
  direction = "up", 
  delay = 0, 
  className = "",
  threshold = 0.1,
  ...props 
}) => {
  const { isVisible, isMounted } = useSafeAnimation();
  const ref = useRef(null);

  useEffect(() => {
    if (!isMounted || typeof window === 'undefined') return;

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

  const getVariants = () => {
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

    // Ajouter les transformations selon la direction
    switch (direction) {
      case "up":
        baseVariants.hidden.y = 50;
        baseVariants.visible.y = 0;
        break;
      case "down":
        baseVariants.hidden.y = -50;
        baseVariants.visible.y = 0;
        break;
      case "left":
        baseVariants.hidden.x = 50;
        baseVariants.visible.x = 0;
        break;
      case "right":
        baseVariants.hidden.x = -50;
        baseVariants.visible.x = 0;
        break;
      case "scale":
        baseVariants.hidden.scale = 0.8;
        baseVariants.visible.scale = 1;
        break;
      default:
        break;
    }

    return baseVariants;
  };

  if (!isMounted) {
    return <div ref={ref} className={className} {...props}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      variants={getVariants()}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Composant pour les badges animés sécurisés
export const SafeAnimatedBadge = ({ 
  children, 
  delay = 0, 
  className = "",
  ...props 
}) => {
  const { isMounted } = useSafeAnimation();

  const badgeVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 20
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.5, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  if (!isMounted) {
    return <div className={className} {...props}>{children}</div>;
  }

  return (
    <motion.div
      variants={badgeVariants}
      initial="hidden"
      animate="visible"
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Hook pour nettoyer les animations avant le démontage
export const useAnimationCleanup = () => {
  const cleanupRef = useRef(null);

  useEffect(() => {
    return () => {
      // Nettoyer les animations en cours
      if (cleanupRef.current) {
        cleanupRef.current();
      }
    };
  }, []);

  const registerCleanup = (cleanupFn) => {
    cleanupRef.current = cleanupFn;
  };

  return { registerCleanup };
};

export default SafeMotion; 