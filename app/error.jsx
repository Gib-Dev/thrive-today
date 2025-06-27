'use client';

import { useEffect } from 'react';
import styles from './error.module.css';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log l'erreur pour le debugging
    console.error('Erreur de l&apos;application:', error);
  }, [error]);

  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorContent}>
        <div className={styles.errorIcon}>⚠️</div>
        <h1 className={styles.errorTitle}>Oups ! Quelque chose s&apos;est mal passé</h1>
        <p className={styles.errorMessage}>
          Une erreur inattendue s&apos;est produite. Ne vous inquiétez pas, notre équipe a été notifiée.
        </p>
        
        <div className={styles.errorActions}>
          <button 
            onClick={reset}
            className={styles.retryButton}
          >
            Réessayer
          </button>
          
          <button 
            onClick={() => window.location.href = '/'}
            className={styles.homeButton}
          >
            Retour à l&apos;accueil
          </button>
        </div>
        
        {process.env.NODE_ENV === 'development' && (
          <details className={styles.errorDetails}>
            <summary>Détails techniques (développement)</summary>
            <pre className={styles.errorStack}>
              {error.message}
              {error.stack}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
} 