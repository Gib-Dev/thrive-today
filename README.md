# 🏃‍♂️ ThriveToday – Plateforme de Bien-être et Entraînements

[![Next.js](https://img.shields.io/badge/Next.js-15.1.5-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.0.6-purple?style=for-the-badge)](https://www.framer.com/motion/)

ThriveToday est une **application web moderne** construite avec **Next.js 15** et **React 19** visant à promouvoir la santé physique et mentale à travers des programmes variés : yoga, HIIT, arts martiaux, etc.

Cette plateforme permet aux utilisateurs de découvrir des séances adaptées à tous les niveaux dans un environnement motivant, clair et structuré.

## ✨ **Fonctionnalités**

- 🎯 **Design Responsive** - Interface adaptée à tous les appareils
- ⚡ **Performance Optimisée** - Chargement rapide avec Next.js 15
- 🎨 **Animations Fluides** - Transitions avec Framer Motion
- 📱 **PWA Ready** - Installable comme application mobile
- 🔒 **Sécurité Renforcée** - Headers de sécurité et validation des données
- 📊 **SEO Optimisé** - Métadonnées complètes et Open Graph
- 🎭 **Mode Sombre** - Interface moderne et élégante
- 📝 **Formulaire de Contact** - Validation côté client et serveur

## 🚀 **Technologies Utilisées**

### **Frontend**
- **Next.js 15** - Framework React avec App Router
- **React 19** - Bibliothèque UI avec les dernières fonctionnalités
- **Framer Motion** - Animations et transitions fluides
- **CSS Modules** - Styles modulaires et encapsulés
- **React Icons** - Icônes vectorielles

### **Backend & Validation**
- **Zod** - Validation de schémas TypeScript-first
- **Next.js API Routes** - API RESTful intégrée
- **Nodemailer** - Envoi d'emails (configuration prête)

### **Performance & SEO**
- **Next/Image** - Optimisation automatique des images
- **Google Fonts** - Polices optimisées avec preconnect
- **PWA Manifest** - Installation sur mobile
- **Open Graph** - Partage social optimisé

## 📦 **Installation et Démarrage**

### **Prérequis**
- Node.js 18+ 
- npm ou yarn

### **Installation**

```bash
# Cloner le repository
git clone https://github.com/votre-username/thrive-today.git
cd thrive-today

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

L'application sera accessible sur `http://localhost:3000`

### **Scripts Disponibles**

```bash
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # Vérification du code
npm run type-check   # Vérification TypeScript
npm run analyze      # Analyse du bundle
```

## 🏗️ **Architecture du Projet**

```
thrive-today/
├── app/                    # App Router Next.js 15
│   ├── api/               # Routes API
│   ├── events/            # Pages des événements
│   ├── contact/           # Page de contact
│   ├── apropos/           # Page à propos
│   ├── error.jsx          # Gestion d'erreurs globale
│   ├── loading.jsx        # Écran de chargement
│   └── layout.jsx         # Layout principal
├── components/            # Composants réutilisables
├── data/                  # Données statiques
├── public/                # Assets publics
└── docs/                  # Documentation
```

## 🎨 **Design System**

### **Couleurs**
- **Primaire** : `#00d4aa` (Vert menthe)
- **Secondaire** : `#1a1a1a` (Noir profond)
- **Accent** : `#ffffff` (Blanc pur)

### **Typographie**
- **Titres** : Playfair Display (Serif)
- **Corps** : Roboto (Sans-serif)

### **Breakpoints**
- **Mobile** : < 768px
- **Tablet** : 768px - 1024px
- **Desktop** : > 1024px

## 🔧 **Configuration**

### **Variables d'Environnement**

Créez un fichier `.env.local` :

```env
# Email Configuration
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Google Analytics
NEXT_PUBLIC_GA_ID=your-ga-id

# SEO
NEXT_PUBLIC_SITE_URL=https://thrive-today.vercel.app
```

### **Déploiement**

#### **Vercel (Recommandé)**
```bash
npm install -g vercel
vercel
```

#### **Netlify**
```bash
npm run build
# Déployer le dossier .next
```

## 📊 **Performance**

- **Lighthouse Score** : 95+ sur tous les critères
- **Core Web Vitals** : Optimisés
- **Bundle Size** : < 500KB (gzippé)
- **First Contentful Paint** : < 1.5s

## 🔒 **Sécurité**

- Headers de sécurité configurés
- Validation des données avec Zod
- Protection CSRF
- Sanitisation des entrées utilisateur

## 🤝 **Contribution**

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📝 **Licence**

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👨‍💻 **Auteur**

**Votre Nom** - [@votre-twitter](https://twitter.com/votre-twitter) - votre-email@example.com

Lien du projet : [https://github.com/votre-username/thrive-today](https://github.com/votre-username/thrive-today)

---

⭐ **N'oubliez pas de donner une étoile si ce projet vous a aidé !**
