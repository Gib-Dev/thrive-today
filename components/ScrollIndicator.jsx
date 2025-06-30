'use client';

import { useState, useEffect } from 'react';
import styles from './ScrollIndicator.module.css';

export default function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress(); // Initial call

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

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