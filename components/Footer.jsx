'use client'

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
	const currentYear = new Date().getFullYear();

	const socialLinks = [
		{ icon: FaFacebook, href: '#', label: 'Facebook' },
		{ icon: FaTwitter, href: '#', label: 'Twitter' },
		{ icon: FaInstagram, href: '#', label: 'Instagram' },
		{ icon: FaLinkedin, href: '#', label: 'LinkedIn' }
	];

	const quickLinks = [
		{ href: '/', label: 'Accueil' },
		{ href: '/events', label: 'Événements' },
		{ href: '/apropos', label: 'À propos' },
		{ href: '/contact', label: 'Contact' },
		{ href: '/events/yoga', label: 'Yoga' },
		{ href: '/events/hiit', label: 'HIIT' },
		{ href: '/events/martial', label: 'Arts Martiaux' }
	];

	const services = [
		'Programmes personnalisés',
		'Coaching individuel',
		'Cours en groupe',
		'Évaluation fitness',
		'Suivi nutritionnel',
		'Ateliers bien-être'
	];

	const scrollToTop = () => {
		if (typeof window !== 'undefined') {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	};

	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.topSection}>
					<div className={styles.about}>
						<div className={styles.logo}>
							<img src="/logo.png" alt="ThriveToday Logo" className={styles.logo} />
							<span className={styles.logoText}>ThriveToday</span>
						</div>
						<p className={styles.description}>
							Transformez votre vie avec nos programmes de fitness personnalisés et notre communauté motivante.
						</p>
						<div className={styles.socialLinks}>
							{socialLinks.map((social, index) => (
								<a
									key={index}
									href={social.href}
									className={styles.socialLink}
									aria-label={social.label}
								>
									<social.icon />
								</a>
							))}
						</div>
					</div>

					<div className={styles.links}>
						<h4 className={styles.sectionTitle}>Liens rapides</h4>
						<ul className={styles.linkList}>
							{quickLinks.map((link, index) => (
								<li key={index}>
									<Link href={link.href} className={styles.footerLink}>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div className={styles.links}>
						<h4 className={styles.sectionTitle}>Nos services</h4>
						<ul className={styles.linkList}>
							{services.map((service, index) => (
								<li key={index} className={styles.serviceItem}>
									{service}
								</li>
							))}
						</ul>
					</div>

					<div className={styles.links}>
						<h4 className={styles.sectionTitle}>Contact</h4>
						<ul className={styles.contactList}>
							<li className={styles.contactItem}>
								<FaPhone className={styles.contactIcon} />
								<span>+33 1 23 45 67 89</span>
							</li>
							<li className={styles.contactItem}>
								<FaEnvelope className={styles.contactIcon} />
								<span>contact@thrivetoday.fr</span>
							</li>
							<li className={styles.contactItem}>
								<FaMapMarkerAlt className={styles.contactIcon} />
								<span>Paris, France</span>
							</li>
						</ul>
					</div>
				</div>

				<div className={styles.bottomSection}>
					<p className={styles.copyright}>
						© {currentYear} ThriveToday. Tous droits réservés.
					</p>
					<div className={styles.legalLinks}>
						<Link href="/privacy" className={styles.legalLink}>Confidentialité</Link>
						<Link href="/terms" className={styles.legalLink}>Conditions</Link>
					</div>
				</div>
			</div>

			<button
				className={styles.scrollToTop}
				onClick={scrollToTop}
				aria-label="Retour en haut de page"
			>
				<FaArrowUp />
			</button>
		</footer>
	);
}