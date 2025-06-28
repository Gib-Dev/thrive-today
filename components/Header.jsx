'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef(null);
  const firstEl = useRef(null);
  const lastEl = useRef(null);

  const isLinkActive = (href) => {
    return pathname === href;
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const scrolled = window.scrollY > 50;
        setIsScrolled(scrolled);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [mounted]);

  useEffect(() => {
    if (!mounted || !isMenuOpen) return;

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    const trapFocus = (event) => {
      if (event.key === 'Tab') {
        if (event.shiftKey) {
          if (document.activeElement === firstEl.current) {
            event.preventDefault();
            lastEl.current?.focus();
          }
        } else {
          if (document.activeElement === lastEl.current) {
            event.preventDefault();
            firstEl.current?.focus();
          }
        }
      }
    };

    if (typeof document !== 'undefined') {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEsc);
      document.addEventListener('keydown', trapFocus);
      document.body.style.overflow = 'hidden';

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleEsc);
        document.removeEventListener('keydown', trapFocus);
        document.body.style.overflow = '';
      };
    }
  }, [isMenuOpen, mounted]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { href: '/', label: 'Accueil' },
    { href: '/events', label: 'Événements' },
    { href: '/apropos', label: 'À propos' },
    { href: '/contact', label: 'Contact' }
  ];

  // Rendu côté serveur sans les états dynamiques
  if (!mounted) {
    return (
      <header className={styles.header}>
        <div className={styles.navContainer}>
          <Link href="/" className={styles.logo} aria-label="Accueil ThriveToday">
            <img src="/logo.png" alt="ThriveToday Logo" />
            <span className={styles.logoText}>ThriveToday</span>
          </Link>

          <nav className={styles.desktopNav} role="navigation" aria-label="Menu principal">
            <ul className={styles.desktopNavList}>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className={`${styles.desktopNavLink} ${isLinkActive(item.href) ? styles.active : ''}`} 
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.contactInfo}>
            <a href="tel:+33123456789" className={styles.contactLink}>
              <FaPhone />
              <span>+33 1 23 45 67 89</span>
            </a>
            <a href="mailto:contact@thrivetoday.fr" className={styles.contactLink}>
              <FaEnvelope />
              <span>contact@thrivetoday.fr</span>
            </a>
          </div>

          <button className={styles.mobileMenuButton} aria-label="Menu">
            <FaBars />
          </button>
        </div>
      </header>
    );
  }

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo} aria-label="Accueil ThriveToday" onClick={closeMenu}>
          <img src="/logo.png" alt="ThriveToday Logo" />
          <span className={styles.logoText}>ThriveToday</span>
        </Link>

        {/* Menu Desktop */}
        <nav className={styles.desktopNav} role="navigation" aria-label="Menu principal">
          <ul className={styles.desktopNavList}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href} 
                  className={`${styles.desktopNavLink} ${isLinkActive(item.href) ? styles.active : ''}`} 
                >
                  {item.label}
                  {isLinkActive(item.href) && (
                    <div className={styles.activeIndicator} />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact info visible sur desktop */}
        <div className={styles.contactInfo}>
          <a href="tel:+33123456789" className={styles.contactLink}>
            <FaPhone />
            <span>+33 1 23 45 67 89</span>
          </a>
          <a href="mailto:contact@thrivetoday.fr" className={styles.contactLink}>
            <FaEnvelope />
            <span>contact@thrivetoday.fr</span>
          </a>
        </div>

        {/* Bouton Menu Mobile */}
        <button
          className={styles.mobileMenuButton}
          aria-label="Ouvrir le menu"
          aria-controls="main-navigation"
          aria-expanded={isMenuOpen}
          tabIndex={0}
          onClick={toggleMenu}
          ref={firstEl}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Overlay mobile */}
        {isMenuOpen && (
          <div 
            className={styles.mobileOverlay} 
            onClick={closeMenu} 
            aria-hidden="true"
          />
        )}

        {/* Menu Mobile */}
        <nav
          ref={menuRef}
          className={`${styles.mobileNav} ${isMenuOpen ? styles.open : ''}`}
          role="navigation"
          aria-label="Menu mobile"
        >
          <ul className={styles.mobileNavList}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href} 
                  className={`${styles.mobileNavLink} ${isLinkActive(item.href) ? styles.active : ''}`} 
                  onClick={closeMenu}
                >
                  {item.label}
                  {isLinkActive(item.href) && (
                    <div className={styles.activeIndicator} />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact mobile */}
          <div className={styles.mobileContact}>
            <a href="tel:+33123456789" className={styles.mobileContactLink}>
              <FaPhone />
              <span>+33 1 23 45 67 89</span>
            </a>
            <a href="mailto:contact@thrivetoday.fr" className={styles.mobileContactLink}>
              <FaEnvelope />
              <span>contact@thrivetoday.fr</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}