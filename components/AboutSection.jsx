// components/AboutSection.jsx

'use client'

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaHeart, FaUsers, FaTrophy, FaLeaf, FaArrowRight } from 'react-icons/fa';
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
    const features = [
        { 
            id: 'health-wellness',
            icon: FaHeart, 
            title: "Santé & Bien-être", 
            description: "Priorité à votre santé physique et mentale",
            color: "#ef4444"
        },
        { 
            id: 'community',
            icon: FaUsers, 
            title: "Communauté", 
            description: "Plus de 1500 membres actifs",
            color: "#3b82f6"
        },
        { 
            id: 'excellence',
            icon: FaTrophy, 
            title: "Excellence", 
            description: "15 ans d'expertise reconnue",
            color: "#f59e0b"
        },
        { 
            id: 'natural',
            icon: FaLeaf, 
            title: "Naturel", 
            description: "Approche holistique du fitness",
            color: "#10b981"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const featureVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.2,
                ease: "easeInOut"
            }
        }
    };

    return (
        <section id="about" className={styles.aboutSection}>
            <motion.div 
                className={styles.aboutContainer}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.div className={styles.imageContainer} variants={itemVariants}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/skretching.jpg"
                            alt="Personne faisant du yoga"
                            width={500}
                            height={500}
                            className={styles.aboutImage}
                        />
                        <div className={styles.imageOverlay}></div>
                    </div>
                </motion.div>

                <motion.div className={styles.textContainer} variants={itemVariants}>
                    <motion.div className={styles.badge} variants={itemVariants}>
                        <span>À propos de nous</span>
                    </motion.div>
                    
                    <motion.h2 className={styles.title} variants={itemVariants}>
                        Transformez votre vie avec{' '}
                        <span className={styles.gradientText}>ThriveToday</span>
                    </motion.h2>
                    
                    <motion.p className={styles.description} variants={itemVariants}>
                        Chez ThriveToday, nous croyons en l'importance de la santé physique et mentale. 
                        Notre mission est d'offrir un environnement accueillant et des programmes adaptés à tous les niveaux.
                    </motion.p>

                    <motion.div className={styles.features} variants={itemVariants}>
                        {features.map((feature) => (
                            <motion.div 
                                key={feature.id} 
                                className={styles.feature}
                                variants={featureVariants}
                                whileHover="hover"
                            >
                                <motion.div 
                                    className={styles.featureIcon}
                                    style={{ '--icon-color': feature.color }}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <feature.icon />
                                </motion.div>
                                <div className={styles.featureContent}>
                                    <h4 className={styles.featureTitle}>{feature.title}</h4>
                                    <p className={styles.featureDescription}>{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <Link href="/apropos" className={styles.aboutButton}>
                            <span>Découvrir plus</span>
                            <FaArrowRight className={styles.buttonIcon} />
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}