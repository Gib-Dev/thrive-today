import '../globals.css';
import styles from './contact.module.css';

export default function Apropos() {
    return <>
    <main className="about-main">
         {/* En-tête de la page */}
        <section className={styles['contact-text']}>
            <h1 className="contact-title">Comment nous contacter</h1>
            <p className="contact-Content">
            Voici les différentes façons de nous contacter
            </p>
        </section>
        <section className={styles['contact-text']}>
            <h3 className="phone-title">Par téléphone</h3>
            <ul>
                <p>Vous pouvez communiquer avec nous grâce à nos ligne 24h :   </p>
                <p>En Outaouais :      1-877-555-1987</p>
                <p>Ailleur au Québec : 1-800-555-3008</p>
            </ul>
            
            <h3 className="email-title">Par Email</h3>
            <ul>
                <p>Vous pouvez nous envoyer un email et un agent vous répondera dès que possible :    </p>
                <p>thriveToday@gymail.com </p>
            </ul>

            <h3 className="irl-title">En personne</h3>
            <p className="irl-Content">
            Vous pouvez venir nous parler lors des heures d'ouverture au 420 Promenade de l'endurance, Gatineau, Québec, J8S 6G6
            </p>
        </section>

      </main>
    </>
    
}