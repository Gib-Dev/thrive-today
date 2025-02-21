import styles from './EventBenefits.module.css';

export default function EventBenefits({ benefits }) {
    return <section className={styles.benefits}>
        <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Pourquoi choisir cet événement ?</h2>
            <p className={styles.sectionSubtitle}>Des résultats rapides et mesurables</p>
        </div>
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
}
