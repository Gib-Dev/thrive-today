'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef(null);

  const isLinkActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  // Fermer le menu mobile sur navigation, clic extérieur, touche Esc, et focus trap
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    const handleEsc = (event) => {
      if (menuOpen && event.key === 'Escape') {
        setMenuOpen(false);
      }
    };
    const trapFocus = (event) => {
      if (menuOpen && menuRef.current) {
        const focusableEls = menuRef.current.querySelectorAll('a, button');
        const firstEl = focusableEls[0];
        const lastEl = focusableEls[focusableEls.length - 1];
        if (event.key === 'Tab') {
          if (event.shiftKey) {
            if (document.activeElement === firstEl) {
              event.preventDefault();
              lastEl.focus();
            }
          } else {
            if (document.activeElement === lastEl) {
              event.preventDefault();
              firstEl.focus();
            }
          }
        }
      }
    };
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEsc);
      document.addEventListener('keydown', trapFocus);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
      document.removeEventListener('keydown', trapFocus);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo} aria-label="Accueil ThriveToday" onClick={closeMenu}>
          <Image src="/logo.png" alt="ThriveToday Logo" width={50} height={50} />
        </Link>
        {/* Overlay mobile */}
        {menuOpen && <div className={styles.mobileOverlay} onClick={closeMenu} aria-hidden="true"></div>}
        <nav
          ref={menuRef}
          className={`${styles.navListWrapper} ${menuOpen ? styles.open : ''}`}
          role="navigation"
          aria-label="Menu principal"
        >
          <ul className={styles.navList}>
            <li><Link href="/" className={`${styles.navLink} ${isLinkActive('/') ? styles.active : ''}`} onClick={closeMenu}>Accueil</Link></li>
            <li><Link href="/apropos" className={`${styles.navLink} ${isLinkActive('/apropos') ? styles.active : ''}`} onClick={closeMenu}>À propos</Link></li>
            <li><Link href="/events/yoga" className={`${styles.navLink} ${isLinkActive('/events/yoga') ? styles.active : ''}`} onClick={closeMenu}>Yoga</Link></li>
            <li><Link href="/events/hiit" className={`${styles.navLink} ${isLinkActive('/events/hiit') ? styles.active : ''}`} onClick={closeMenu}>HIIT</Link></li>
            <li><Link href="/events/martial" className={`${styles.navLink} ${isLinkActive('/events/martial') ? styles.active : ''}`} onClick={closeMenu}>Arts Martiaux</Link></li>
            <li><Link href="/contact" className={`${styles.navLink} ${isLinkActive('/contact') ? styles.active : ''}`} onClick={closeMenu}>Contact</Link></li>
          </ul>
        </nav>
        <button
          className={styles.mobileMenuButton}
          aria-label="Ouvrir le menu"
          aria-controls="main-navigation"
          aria-expanded={menuOpen}
          tabIndex={0}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </div>
    </header>
  );
}