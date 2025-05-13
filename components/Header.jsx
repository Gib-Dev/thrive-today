'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Banner from "@/components/Banner";
import logo from '@/public/logo.png';
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return <>
    <header className={styles.header}>
      {/* Navigation principale */}
      <nav className={styles.nav}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/">
            <Image src={logo} alt="ThriveToday Logo" width={50} height={50} />
          </Link>
        </div>

        {/* Bouton menu hamburger (visible seulement sur mobile) */}
        <button
          className={`${styles.mobileMenuButton} ${menuOpen ? styles.mobileMenuButtonOpen : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>

        {/* Menu de navigation */}
        <ul className={`${styles.navList} ${menuOpen ? styles.navListOpen : ''}`}>
          <li>
            <Link href="/" className={styles.navLink} onClick={() => setMenuOpen(false)}>
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/apropos" className={styles.navLink} onClick={() => setMenuOpen(false)}>
              À propos
            </Link>
          </li>
          <li>
            <Link href="/events/yoga" className={styles.navLink} onClick={() => setMenuOpen(false)}>
              Yoga
            </Link>
          </li>
          <li>
            <Link href="/events/hiit" className={styles.navLink} onClick={() => setMenuOpen(false)}>
              HIIT
            </Link>
          </li>
          <li>
            <Link href="/events/martial" className={styles.navLink} onClick={() => setMenuOpen(false)}>
              Arts Martiaux
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.navLink} onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      {/* Bannière */}
      <Banner />
    </header>
  </>;
}