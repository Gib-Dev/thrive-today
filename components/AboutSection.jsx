import Image from 'next/image';
import Link from 'next/link';
import styles from './AboutSection.module.css';
import skretching from '@/public/skretching.jpg';

export default function AboutSection({ title, text, imageSrc, link, linkText }) {
    return <section id="about" className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
            <div className={styles.imageContainer}>
                <Image
                    src={imageSrc || skretching}
                    alt="Salle d'entraînement"
                    width={500}
                    height={300}
                    className={styles.aboutImage}
                    priority
                />
            </div>
            <div className={styles.textContainer}>
                <h2>{title}</h2>
                <p>{text}</p>
                <Link href={link} className={styles.aboutButton}>
                    {linkText || "En savoir plus"}
                </Link>
            </div>
        </div>
    </section>
}