import Image from 'next/image';
import Link from 'next/link';
import styles from './EventsSection.module.css';
import { eventsData } from '../data/events';

export default function EventsSection() {
    return (
        <section id="events" className={styles.eventsSection}>
            <div className={styles.container}>
                <h2 className={styles.title}>Événements à venir</h2>
                <div className={styles.eventsGrid}>
                    {eventsData.map((event) => (
                        <div key={event.id} className={styles.eventCard}>
                            <div className={styles.imageContainer}>
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    fill
                                    className={styles.eventImage}
                                />
                            </div>
                            <div className={styles.eventContent}>
                                <h3 className={styles.eventTitle}>{event.title}</h3>
                                <p className={styles.eventDescription}>{event.description}</p>
                                {event.link && (
                                    <Link href={event.link} className={styles.eventLink}>
                                        En savoir plus
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}