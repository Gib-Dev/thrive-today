import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.topSection}>
					<div className={styles.about}>
						<Link href="/" className={styles.logo}>
							<Image src="/logo.png" alt="ThriveToday Logo" width={40} height={40} />
							<span>ThriveToday</span>
						</Link>
						<p>Votre partenaire pour une vie saine et active. Transformez votre corps et votre esprit avec nos programmes spécialisés.</p>
						<div className={styles.socialLinks}>
							<a href="#" aria-label="Facebook"><FaFacebook /></a>
							<a href="#" aria-label="Instagram"><FaInstagram /></a>
							<a href="#" aria-label="Twitter"><FaTwitter /></a>
							<a href="#" aria-label="YouTube"><FaYoutube /></a>
						</div>
					</div>
					<div className={styles.links}>
						<h4>Nos Programmes</h4>
						<ul>
							<li><Link href="/events/yoga">Yoga</Link></li>
							<li><Link href="/events/hiit">HIIT</Link></li>
							<li><Link href="/events/martial">Arts Martiaux</Link></li>
							<li><Link href="/apropos">À propos</Link></li>
						</ul>
					</div>
					<div className={styles.links}>
						<h4>Contact</h4>
						<ul>
							<li>+33 1 23 45 67 89</li>
							<li>contact@thrivetoday.fr</li>
							<li>123 Rue du Sport, 75001 Paris</li>
						</ul>
					</div>
					<div className={styles.links}>
						<h4>Horaires</h4>
						<ul>
							<li>Lundi - Vendredi: 6h - 22h</li>
							<li>Samedi: 8h - 20h</li>
							<li>Dimanche: 9h - 18h</li>
						</ul>
					</div>
				</div>
				<div className={styles.bottomSection}>
					<p>&copy; {new Date().getFullYear()} ThriveToday - Tous droits réservés.</p>
					<div className={styles.legalLinks}>
						<Link href="#">Mentions légales</Link>
						<Link href="#">Politique de confidentialité</Link>
						<Link href="#">CGV</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}