'use client';

import { useState, useEffect } from 'react';
import { FaTrophy, FaMedal, FaStar, FaFire, FaHeart, FaDumbbell } from 'react-icons/fa';
import ScrollAnimation, { AnimatedBadge } from './ScrollAnimation';
import styles from './ProgressTracker.module.css';

const badges = [
  { id: 'beginner', icon: FaHeart, label: 'Débutant', color: '#10b981', progress: 25 },
  { id: 'intermediate', icon: FaDumbbell, label: 'Intermédiaire', color: '#6366f1', progress: 50 },
  { id: 'advanced', icon: FaFire, label: 'Avancé', color: '#f59e0b', progress: 75 },
  { id: 'expert', icon: FaTrophy, label: 'Expert', color: '#ef4444', progress: 100 },
  { id: 'champion', icon: FaMedal, label: 'Champion', color: '#8b5cf6', progress: 100 },
  { id: 'legend', icon: FaStar, label: 'Légende', color: '#06b6d4', progress: 100 }
];

const achievements = [
  { id: 'first-class', title: 'Premier Cours', description: 'Complété votre premier cours', icon: '🎯' },
  { id: 'week-streak', title: 'Série Hebdomadaire', description: '7 jours consécutifs', icon: '🔥' },
  { id: 'month-streak', title: 'Série Mensuelle', description: '30 jours consécutifs', icon: '💪' },
  { id: 'yoga-master', title: 'Maître Yoga', description: '100 cours de yoga', icon: '🧘' },
  { id: 'hiit-warrior', title: 'Guerrier HIIT', description: '50 sessions HIIT', icon: '⚡' },
  { id: 'martial-expert', title: 'Expert Martial', description: '75 cours d\'arts martiaux', icon: '🥋' }
];

export default function ProgressTracker() {
  const [currentLevel, setCurrentLevel] = useState(2);
  const [showAchievement, setShowAchievement] = useState(false);
  const [currentAchievement, setCurrentAchievement] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Simuler l'obtention d'un achievement de manière déterministe
    const timer = setTimeout(() => {
      // Utiliser l'index 0 au lieu de Math.random() pour éviter l'erreur d'hydratation
      const achievement = achievements[0];
      setCurrentAchievement(achievement);
      setShowAchievement(true);
      setIsAnimating(true);
      
      setTimeout(() => {
        setShowAchievement(false);
        setIsAnimating(false);
      }, 3000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <section className={styles.progressTracker}>
        <div className={styles.progressContainer}>
          <h2 className={styles.progressTitle}>Votre Progression</h2>
          <p className={styles.progressSubtitle}>Suivez vos objectifs et célébrez vos réussites</p>
        </div>
      </section>
    );
  }

  return (
    <ScrollAnimation className={styles.progressTracker} direction="up" delay={0.2}>
      <div className={styles.progressContainer}>
        <h2 className={styles.progressTitle}>Votre Progression</h2>
        <p className={styles.progressSubtitle}>Suivez vos objectifs et célébrez vos réussites</p>
        
        {/* Niveau actuel */}
        <div className={styles.currentLevel}>
          <div className={`${styles.levelBadge} ${styles.animateIn}`}>
            <FaTrophy className={styles.levelIcon} />
            <span className={styles.levelText}>Niveau {currentLevel}</span>
          </div>
          
          <div className={styles.levelProgress}>
            <div className={styles.progressBar}>
              <div 
                className={`${styles.progressFill} ${styles.animateProgress}`}
                style={{ width: `${badges[currentLevel - 1]?.progress || 0}%` }}
              />
            </div>
            <span className={styles.progressText}>{badges[currentLevel - 1]?.progress || 0}%</span>
          </div>
        </div>

        {/* Badges */}
        <div className={styles.badgesGrid}>
          {badges.map((badge, index) => (
            <AnimatedBadge 
              key={badge.id}
              className={`${styles.badge} ${index < currentLevel ? styles.unlocked : styles.locked}`}
              delay={index * 0.1}
            >
              <badge.icon className={styles.badgeIcon} style={{ color: badge.color }} />
              <span className={styles.badgeLabel}>{badge.label}</span>
              {index < currentLevel && (
                <div className={styles.badgeGlow} />
              )}
            </AnimatedBadge>
          ))}
        </div>

        {/* Achievements */}
        <div className={styles.achievementsSection}>
          <h3 className={styles.achievementsTitle}>Réalisations</h3>
          <div className={styles.achievementsGrid}>
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.id}
                className={`${styles.achievement} ${index < 3 ? styles.unlocked : styles.locked} ${styles.animateIn}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.achievementIcon}>{achievement.icon}</div>
                <div className={styles.achievementContent}>
                  <h4 className={styles.achievementTitle}>{achievement.title}</h4>
                  <p className={styles.achievementDescription}>{achievement.description}</p>
                </div>
                {index < 3 && (
                  <div 
                    className={styles.achievementCheck}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    ✓
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Notification d'achievement */}
      {showAchievement && currentAchievement && (
        <div className={`${styles.achievementNotification} ${isAnimating ? styles.show : ''}`}>
          <div className={styles.notificationContent}>
            <div className={styles.notificationIcon}>{currentAchievement.icon}</div>
            <div className={styles.notificationText}>
              <h4>Nouvelle Réalisation !</h4>
              <p>{currentAchievement.title}</p>
            </div>
          </div>
          <div className={styles.notificationProgress} />
        </div>
      )}
    </ScrollAnimation>
  );
} 