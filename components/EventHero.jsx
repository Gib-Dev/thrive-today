import Image from 'next/image';
import styles from './EventHero.module.css';

export default function EventHero({ title, category, description, image }) {
    return <section className={styles.hero}>
        <div className={styles.heroImageContainer}>
            <Image
                src={image}
                alt={title}
                layout="fill"
                objectFit="cover"
                priority
                quality={90}
                className={styles.heroImage}
            />
            <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
                <span>{category}</span>
                <span className={styles.titleAccent}>{title}</span>
            </h1>
            <p className={styles.heroDescription}>{description}</p>
            <div className={styles.ctaContainer}>
                <button className={styles.primaryButton}>Réserver maintenant</button>
                <button className={styles.secondaryButton}>Voir le programme</button>
            </div>
        </div>
    </section>
}
