import styles from './EventDetail.module.css';

export default function EventDetails({ date, location, duration, instructor, level, maxParticipants }) {
    return (
        <section className={styles.infoSection}>
            <div className={styles.infoContent}>
                <div className={styles.infoText}>
                    <h2 className={styles.infoTitle}>
                        <span className={styles.titleAccent}>Session</span> spéciale
                    </h2>
                    <div className={styles.infoDetails}>
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>📅 Date :</span>
                            <span>{date}</span>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>📍 Lieu :</span>
                            <span>{location}</span>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>⏳ Durée :</span>
                            <span>{duration}</span>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>👨‍🏫 Instructeur :</span>
                            <span>{instructor}</span>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>📊 Niveau :</span>
                            <span>{level}</span>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>👥 Participants :</span>
                            <span>Max {maxParticipants}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}