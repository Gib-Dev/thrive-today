'use client';

import Image from "next/image";
import Link from "next/link";
import Banner from "@/components/Banner";
import logo from '@/public/logo.png';
import styles from "./Header.module.css";

export default function Header() {


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

        {/* Menu de navigation */}
        <ul className={styles.navList}>
          <li>
            <Link href="/" className={styles.navLink}>
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/apropos" className={styles.navLink}>
              À propos
            </Link>
          </li>
          <li>
            <Link href="/events/yoga" className={styles.navLink}>
              Yoga
            </Link>
          </li>
          <li>
            <Link href="/events/hiit" className={styles.navLink}>
              HIIT
            </Link>
          </li>
          <li>
            <Link href="/events/martial" className={styles.navLink}>
              Arts Martiaux
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.navLink}>
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
