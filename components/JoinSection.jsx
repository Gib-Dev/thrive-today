import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import styles from './JoinSection.module.css';

export default function JoinSection() {
    return (
        <section className={styles.joinSection}>
            <div className={styles.container}>
                <h2 className={styles.title}>Prêt à Transformer Votre Vie ?</h2>
                <p className={styles.subtitle}>
                    Rejoignez notre communauté de plus de 1500 membres et commencez votre voyage vers une vie plus saine dès aujourd'hui.
                </p>
                <p className={styles.offer}>🎉 Offre spéciale : 1er mois à -20% !</p>
                <Link href="/contact" className={styles.ctaButton}>
                    Commencer Maintenant
                    <FaArrowRight className={styles.arrowIcon} />
                </Link>
            </div>
        </section>
    );
}