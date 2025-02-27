import '../globals.css';
import styles from './contact.module.css';
import ContactForm from '@/components/ContactForm';

export default function Apropos() {
    return <>
        <div className={styles.container}>
            <h1 className={styles.title}>Contactez-nous</h1>
            <p className={styles.subtitle}>Remplissez le formulaire ci-dessous pour nous envoyer un message.</p>
            <ContactForm />
        </div>
    </>
}