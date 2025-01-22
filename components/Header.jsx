import Image from "next/image";
import logo from '@/public/logo.png';
import banner from '@/public/weight.jpg';
import styles from "./Header.module.css";

export default function Header() {
  return <>
    <header className={styles.header}>
    {/* Bannière avec une image texte */}
      {/* Menu de Navigation */}
      <nav className={styles.nav}>
        <div className={styles.logo}>
          {/* Logo du site */}
          <Image src={logo} alt="ThriveToday Logo" width={50} height={50} />
        </div>
       <ul className={styles.navList}>
          <li><a href="#home" className={styles.navLink}>Accueil</a></li>
          <li><a href="#programs" className={styles.navLink}>Programmes</a></li>
          <li><a href="#events" className={styles.navLink}>Événements</a></li>
          <li><a href="#contact" className={styles.navLink}>Contact</a></li>
       </ul>
      </nav>

      {/* Bannière */}
      <div className={styles.banner}>
        <Image
          src={banner}
          alt="ThriveToday Banner"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
          className={styles.bannerImage}
        />
    {/* Texte superposé sur la banniere */}
    <div className={styles.bannerText}>
          <h1>ThriveToday</h1>
          <p>Votre partenaire pour une vie saine et active</p>
          <div className={styles.ctaButtons}>
            <button className={styles.ctaButton}>Nos Programmes</button>
            <button className={styles.ctaButtonSecondary}>En savoir plus</button>
          </div>
        </div>
      </div>
    </header>
 </>
}