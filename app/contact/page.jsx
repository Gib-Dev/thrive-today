import '../globals.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import styles from './contact.module.css';
import ContactForm from '../../components/ContactForm';

export const metadata = {
  title: "Contactez Nous | ThriveToday",
  description: "Contactez notre équipe de professionnels pour toute question ou pour commencer votre transformation. Nous sommes là pour vous accompagner !",
  keywords: ["contact", "formulaire", "équipe", "support", "assistance"],
  openGraph: {
    title: "Contactez ThriveToday",
    description: "Notre équipe est là pour vous accompagner dans votre transformation.",
  },
};

export default function Contact() {
  const contactInfo = [
    {
      id: 'phone',
      icon: FaPhone,
      title: "Téléphone",
      value: "+33 1 23 45 67 89",
      description: "Appelez-nous du lundi au vendredi"
    },
    {
      id: 'email',
      icon: FaEnvelope,
      title: "Email",
      value: "contact@thrivetoday.fr",
      description: "Réponse sous 24h"
    },
    {
      id: 'address',
      icon: FaMapMarkerAlt,
      title: "Adresse",
      value: "123 Rue du Sport, 75001 Paris",
      description: "Métro : Châtelet (lignes 1, 4, 7, 11, 14)"
    },
    {
      id: 'hours',
      icon: FaClock,
      title: "Horaires",
      value: "Lun-Ven: 6h-22h | Sam: 8h-20h | Dim: 9h-18h",
      description: "Ouvert 7j/7 pour votre bien-être"
    }
  ];

  const socialLinks = [
    { id: 'facebook', icon: FaFacebook, name: "Facebook", url: "#" },
    { id: 'instagram', icon: FaInstagram, name: "Instagram", url: "#" },
    { id: 'twitter', icon: FaTwitter, name: "Twitter", url: "#" }
  ];

  return (
    <main>
      {/* Section Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Contactez-nous</h1>
          <p className={styles.subtitle}>
            Notre équipe de professionnels est là pour vous accompagner dans votre transformation
          </p>
        </div>
      </section>

      {/* Section Contact */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            {/* Informations de contact */}
            <div className={styles.contactInfo}>
              <h2 className={styles.sectionTitle}>Nos Coordonnées</h2>
              <p className={styles.sectionSubtitle}>
                N&apos;hésitez pas à nous contacter par le moyen qui vous convient le mieux
              </p>
              
              <div className={styles.contactCards}>
                {contactInfo.map((info) => (
                  <div key={info.id} className={styles.contactCard}>
                    <div className={styles.contactIcon}>
                      <info.icon />
                    </div>
                    <div className={styles.contactDetails}>
                      <h4 className={styles.contactTitle}>{info.title}</h4>
                      <p className={styles.contactValue}>{info.value}</p>
                      <p className={styles.contactDescription}>{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Réseaux sociaux */}
              <div className={styles.socialSection}>
                <h3 className={styles.socialTitle}>Suivez-nous</h3>
                <div className={styles.socialLinks}>
                  {socialLinks.map((social) => (
                    <a
                      key={social.id}
                      href={social.url}
                      className={styles.socialLink}
                      aria-label={social.name}
                    >
                      <social.icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div className={styles.formSection}>
              <h2 className={styles.sectionTitle}>Envoyez-nous un message</h2>
              <p className={styles.sectionSubtitle}>
                Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Section Carte */}
      <section className={styles.mapSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Notre Localisation</h2>
          <div className={styles.mapContainer}>
            <div className={styles.mapPlaceholder}>
              <div className={styles.mapContent}>
                <FaMapMarkerAlt className={styles.mapIcon} />
                <h3>ThriveToday - Centre de Fitness</h3>
                <p>123 Rue du Sport, 75001 Paris</p>
      
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}