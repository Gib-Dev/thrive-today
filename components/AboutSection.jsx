// components/AboutSection.jsx

import Image from 'next/image';
import Link from 'next/link';
import { FaHeart, FaUsers, FaTrophy, FaLeaf } from 'react-icons/fa';
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
        { icon: FaHeart, title: "Santé & Bien-être", description: "Priorité à votre santé physique et mentale" },
        { icon: FaUsers, title: "Communauté", description: "Plus de 1500 membres actifs" },
        { icon: FaTrophy, title: "Excellence", description: "15 ans d'expertise reconnue" },
        { icon: FaLeaf, title: "Naturel", description: "Approche holistique du fitness" }
    ];

    return (
        <section id="about" className={styles.aboutSection}>
            <div className={styles.aboutContainer}>
                <div className={styles.imageContainer}>
                    <Image
                        src="/skretching.jpg"
                        alt="Personne faisant du yoga"
                        width={500}
                        height={500}
                        className={styles.aboutImage}
                    />
                </div>
                <div className={styles.textContainer}>
                    <h2 className={styles.title}>À propos de nous</h2>
                    <p className={styles.description}>
                        Chez ThriveToday, nous croyons en l'importance de la santé physique et mentale. 
                        Notre mission est d'offrir un environnement accueillant et des programmes adaptés à tous les niveaux.
                    </p>
                    <div className={styles.features}>
                        {features.map((feature, index) => (
                            <div key={index} className={styles.feature}>
                                <div className={styles.featureIcon}><feature.icon /></div>
                                <div className={styles.featureContent}>
                                    <h4 className={styles.featureTitle}>{feature.title}</h4>
                                    <p className={styles.featureDescription}>{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Link href="/apropos" className={styles.aboutButton}>
                        Découvrir plus
                    </Link>
                </div>
            </div>
        </section>
    );
}