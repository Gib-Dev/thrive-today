// components/AboutSection.jsx

import Image from 'next/image';
import Link from 'next/link';
import styles from './AboutSection.module.css';

/**
 * Composant AboutSection - met en valeur la philosophie de ThriveToday.
 * Affiche une image illustrative, un texte de description et un bouton d’action.
 *
 * Props :
 * - title : Titre principal
 * - text : Texte de description
 * - imageSrc : Chemin de l’image à afficher
 * - link : Lien du bouton d’action
 * - linkText : Texte du bouton
 */
export default function AboutSection({ title, text, imageSrc, link, linkText }) {
    return (
        <section id="about" className={styles.aboutSection}>
            <div className={styles.aboutContainer}>
                {/* Image illustrative à gauche */}
                <div className={styles.imageContainer}>
                    <Image
                        src={imageSrc}
                        alt="Image illustrant la salle d'entraînement"
                        width={500}
                        height={300}
                        className={styles.aboutImage}
                        priority
                    />
                </div>

                {/* Texte descriptif à droite */}
                <div className={styles.textContainer}>
                    <h2>{title}</h2>
                    <p>{text}</p>
                    <Link href={link} className={styles.aboutButton}>
                        {linkText || 'En savoir plus'}
                    </Link>
                </div>
            </div>
        </section>
    );
}