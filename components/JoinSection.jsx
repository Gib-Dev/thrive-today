import Link from 'next/link';
import styles from './JoinSection.module.css';

export default function JoinSection() {
  return <>
    <section id="join" className={styles['join-section']}>
      <h2>Rejoignez-nous</h2>
      <p>Contactez-nous dès aujourd'hui pour une séance d'essai gratuite !</p>
      <Link href="/contact" className={styles['button-link']}>
        Nous Contacter
      </Link>
    </section>
 </>
}
