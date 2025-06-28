'use client';

import { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaPlay, FaPause } from 'react-icons/fa';
import ScrollAnimation from './ScrollAnimation';
import styles from './StorySection.module.css';

const storySteps = [
  {
    id: 1,
    title: "Démarrage",
    subtitle: "Commencez votre voyage",
    description: "Prenez la décision de transformer votre vie. Nos experts vous accompagnent dès le premier pas vers une version plus forte de vous-même.",
    image: "/yoga.webp",
    color: "var(--color-primary)",
    icon: "🚀"
  },
  {
    id: 2,
    title: "Progression",
    subtitle: "Évoluez à votre rythme",
    description: "Nos programmes personnalisés s'adaptent à votre niveau et vos objectifs, vous guidant vers une version plus forte et plus équilibrée de vous-même.",
    image: "/hiit.webp",
    color: "var(--color-secondary)",
    icon: "🔥"
  },
  {
    id: 3,
    title: "Maîtrise",
    subtitle: "Devenez votre meilleur vous",
    description: "Atteignez un niveau de bien-être et de performance que vous n'auriez jamais imaginé possible avec notre approche innovante.",
    image: "/martial.webp",
    color: "var(--color-accent)",
    icon: "💪"
  },
  {
    id: 4,
    title: "Inspiration",
    subtitle: "Inspirez les autres",
    description: "Devenez une source d'inspiration pour votre entourage en partageant votre transformation et en encourageant d'autres à emprunter le même chemin.",
    image: "/hero-fitness.webp",
    color: "var(--color-primary)",
    icon: "✨"
  }
];

export default function StorySection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Start autoplay after component mounts
    setIsPlaying(true);
    setIsAutoPlaying(true);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || !mounted) return;

    const interval = setInterval(() => {
      if (isPlaying) {
        setCurrentStep((prev) => (prev + 1) % storySteps.length);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, isAutoPlaying, mounted]);

  const nextStep = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentStep((prev) => (prev + 1) % storySteps.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const prevStep = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentStep((prev) => (prev - 1 + storySteps.length) % storySteps.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    setIsAutoPlaying(true);
  };

  const goToStep = (stepIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentStep(stepIndex);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAnimating(false), 600);
  };

  if (!mounted) {
    return (
      <ScrollAnimation className={styles.storySection} direction="up" delay={0.2}>
        <div className={styles.storyContainer}>
          <div className={styles.storyHeader}>
            <h2 className={styles.storyTitle}>Votre Histoire de Transformation</h2>
            <p className={styles.storySubtitle}>Découvrez le parcours qui vous attend avec ThriveToday</p>
          </div>
          <div className={styles.loading}>Chargement...</div>
        </div>
      </ScrollAnimation>
    );
  }

  const currentCTAData = storySteps[currentStep];

  return (
    <ScrollAnimation className={styles.storySection} direction="up" delay={0.2}>
      <div className={styles.storyContainer}>
        <div className={styles.storyHeader}>
          <h2 className={styles.storyTitle}>Votre Histoire de Transformation</h2>
          <p className={styles.storySubtitle}>Découvrez le parcours qui vous attend avec ThriveToday</p>
        </div>

        <div className={styles.storyContent}>
          <div className={styles.storyVisual}>
            <div
              key={currentStep}
              className={`${styles.storyImageContainer} ${isAnimating ? styles.animating : ''}`}
            >
              <div 
                className={styles.storyImage}
                style={{ 
                  backgroundImage: `url(${currentCTAData.image})`,
                  '--accent-color': currentCTAData.color
                }}
              >
                <div className={styles.storyOverlay}>
                  <div className={styles.storyIcon}>{currentCTAData.icon}</div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.storyText}>
            <div
              key={currentStep}
              className={`${styles.storyStep} ${isAnimating ? styles.animating : ''}`}
            >
              <div className={styles.stepNumber}>Étape {currentCTAData.id}</div>
              <h3 className={styles.stepTitle}>{currentCTAData.title}</h3>
              <h4 className={styles.stepSubtitle}>{currentCTAData.subtitle}</h4>
              <p className={styles.stepDescription}>{currentCTAData.description}</p>
              
              <div className={styles.stepProgress}>
                <div className={styles.progressDots}>
                  {storySteps.map((step) => (
                    <button
                      key={step.id}
                      className={`${styles.progressDot} ${storySteps.indexOf(step) === currentStep ? styles.active : ''}`}
                      onClick={() => goToStep(storySteps.indexOf(step))}
                      style={{ 
                        backgroundColor: storySteps.indexOf(step) === currentStep ? currentCTAData.color : 'var(--color-gray-300)'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.storyControls}>
          <button
            className={styles.controlButton}
            onClick={prevStep}
            disabled={isAnimating}
          >
            <FaChevronLeft />
          </button>

          <button
            className={styles.playButton}
            onClick={togglePlay}
            style={{ 
              backgroundColor: currentCTAData.color,
              boxShadow: `0 0 20px ${currentCTAData.color}40`
            }}
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>

          <button
            className={styles.controlButton}
            onClick={nextStep}
            disabled={isAnimating}
          >
            <FaChevronRight />
          </button>
        </div>

        <div className={styles.storyTimeline}>
          {storySteps.map((step, index) => (
            <div
              key={step.id}
              className={`${styles.timelineItem} ${index === currentStep ? styles.active : ''}`}
              onClick={() => goToStep(index)}
            >
              <div 
                className={styles.timelineMarker}
                style={{ 
                  backgroundColor: index === currentStep ? step.color : 'var(--color-gray-300)',
                  boxShadow: index === currentStep ? `0 0 15px ${step.color}60` : 'none'
                }}
              />
              <div className={styles.timelineContent}>
                <h4 className={styles.timelineTitle}>{step.title}</h4>
                <p className={styles.timelineSubtitle}>{step.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollAnimation>
  );
} 