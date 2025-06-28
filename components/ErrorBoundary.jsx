'use client';

import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Mettre à jour l'état pour afficher l'UI de fallback
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log l'erreur pour le debugging
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // Si c'est une erreur Framer Motion, on peut la gérer spécifiquement
    if (error.message && error.message.includes('positionalValues')) {
      console.warn('Framer Motion error detected, attempting recovery...');
      // On peut essayer de récupérer automatiquement
      setTimeout(() => {
        this.setState({ hasError: false, error: null });
      }, 1000);
    }
  }

  render() {
    if (this.state.hasError) {
      // UI de fallback en cas d'erreur
      return (
        <div style={{
          padding: '20px',
          textAlign: 'center',
          backgroundColor: '#f8f9fa',
          border: '1px solid #dee2e6',
          borderRadius: '8px',
          margin: '10px'
        }}>
          <h3>Une erreur s'est produite</h3>
          <p>Nous travaillons pour résoudre ce problème. Veuillez rafraîchir la page.</p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Rafraîchir
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 