// components/AboutSection.jsx

'use client'

import { useState, useEffect } from 'react';
import { FaDumbbell, FaHeart, FaUsers, FaTrophy, FaClock, FaStar } from 'react-icons/fa';
import styles from './AboutSection.module.css';

/**
 * Composant AboutSection - met en valeur la philosophie de ThriveToday.
 * Affiche une image illustrative, un texte de description et un bouton d'action.
 *
 * Props :
 * - title : Titre principal
 * - text : Texte de description
 * - imageSrc : Chemin de l'image à afficher
 * - link : Lien du bouton d'action
 * - linkText : Texte du bouton
 */
export default function AboutSection() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.IntersectionObserver) {
            const observer = new window.IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                },
                { threshold: 0.1 }
            );

            const element = document.querySelector(`.${styles.aboutSection}`);
            if (element) {
                observer.observe(element);
            }

            return () => {
                if (element) {
                    observer.unobserve(element);
                }
            };
        }
    }, []);

    const features = [
        {
            id: 1,
            icon: FaDumbbell,
            title: "Programmes Personnalisés",
            description: "Des entraînements adaptés à vos objectifs et votre niveau"
        },
        {
            id: 2,
            icon: FaHeart,
            title: "Bien-être Holistique",
            description: "Approche complète : corps, esprit et nutrition"
        },
        {
            id: 3,
            icon: FaUsers,
            title: "Communauté Motivante",
            description: "Rejoignez une communauté de passionnés du fitness"
        },
        {
            id: 4,
            icon: FaTrophy,
            title: "Suivi des Progrès",
            description: "Mesurez vos améliorations avec des outils avancés"
        },
        {
            id: 5,
            icon: FaClock,
            title: "Flexibilité Totale",
            description: "Entraînez-vous quand vous voulez, où vous voulez"
        },
        {
            id: 6,
            icon: FaStar,
            title: "Expertise Certifiée",
            description: "Des coachs qualifiés pour vous accompagner"
        }
    ];

    return (
        <section className={`${styles.aboutSection} ${isVisible ? styles.visible : ''}`}>
            <div className={styles.aboutContainer}>
                <div className={styles.textContainer}>
                    <span className={styles.badge}>À Propos de ThriveToday</span>
                    <h2 className={styles.title}>
                        <span className={styles.gradientText}>Transformez votre vie</span> avec une approche moderne du fitness
                    </h2>
                    <p className={styles.description}>
                        ThriveToday est plus qu'une simple plateforme de fitness. Nous créons une expérience 
                        complète qui combine entraînement personnalisé, nutrition équilibrée et bien-être mental 
                        pour vous aider à atteindre vos objectifs de manière durable.
                    </p>
                    <div className={styles.stats}>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>10,000+</span>
                            <span className={styles.statLabel}>Membres actifs</span>
                        </div>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>95%</span>
                            <span className={styles.statLabel}>Taux de satisfaction</span>
                        </div>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>50+</span>
                            <span className={styles.statLabel}>Programmes disponibles</span>
                        </div>
                    </div>
                    <a href="#contact" className={styles.aboutButton}>
                        Nous rejoindre
                    </a>
                </div>
                <div className={styles.features}>
                    {features.map((feature, index) => (
                        <div 
                            key={feature.id} 
                            className={styles.feature}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={styles.featureIcon}>
                                <feature.icon />
                            </div>
                            <div className={styles.featureContent}>
                                <h3 className={styles.featureTitle}>{feature.title}</h3>
                                <p className={styles.featureDescription}>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}