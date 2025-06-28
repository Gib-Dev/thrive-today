'use client';

import { useState, useEffect } from 'react';
import styles from './ScrollIndicator.module.css';

export default function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || typeof window === 'undefined') return;

    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress(); // Initial call

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <div className={styles.scrollIndicator}>
      <div 
        className={styles.progressBar}
        style={{ 
          width: `${scrollProgress}%`,
          opacity: scrollProgress > 0 ? 1 : 0
        }}
      />
    </div>
  );
} 