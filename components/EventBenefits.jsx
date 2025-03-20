// Import des styles CSS modules spécifiques à cette section
import styles from './EventBenefits.module.css';

// Composant EventBenefits : met en avant les bénéfices de l'événement
export default function EventBenefits({ benefits }) {
    return (
        <section className={styles.benefits}>

            {/* Titre de la section */}
            <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Pourquoi choisir cet événement ?</h2>
                <p className={styles.sectionSubtitle}>Des résultats rapides et mesurables</p>
            </div>

            {/* Affichage des bénéfices sous forme de cartes */}
            <div className={styles.benefitGrid}>
                {benefits.map((benefit, index) => (
                    <div key={index} className={styles.benefitCard}>
                        <div className={styles.benefitIcon}>{benefit.icon}</div>
                        <h3>{benefit.title}</h3>
                        <p>{benefit.description}</p>
                    </div>
                ))}
            </div>

        </section>
    );
}