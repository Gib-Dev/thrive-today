import Image from 'next/image';
import Link from 'next/link';
import styles from './EventsSection.module.css';

export default function EventsSection({ events }) {
    const safeEvents = Array.isArray(events) ? events : [];

    return <>
        <section id="events" className={styles['events-section']}>
            <h2 className={styles['section-title']}>Événements à venir</h2>
            <div className={styles['event-list']}>
                {safeEvents.length > 0 ? (
                    safeEvents.map((event, index) => (
                        <div key={index} className={styles['event-card']}>
                            <Image
                                src={event.image}
                                alt={event.title}
                                width={400}
                                height={250}
                                className={styles['event-image']}
                            />
                            <h3>{event.title}</h3>
                            <p>{event.description}</p>
                            <Link href={event.link} className={styles['event-link']}>
                                En savoir plus
                            </Link>
                        </div>
                    ))
                ) : (
                    <div className={styles['no-events-container']}>
                        <p className={styles['no-events']}>Restez à l'affût ! De nouveaux événements seront bientôt annoncés.</p>
                        <Link href="/newsletter" className={styles['subscribe-button']}>
                            S'abonner à la newsletter
                        </Link>
                    </div>
                )}
            </div>
        </section>
    </>
}