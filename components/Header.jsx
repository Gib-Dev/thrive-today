import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>ThriveToday</h1>
      <nav>
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/programs">Programmes</a></li>
          <li><a href="/events">Événements</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}