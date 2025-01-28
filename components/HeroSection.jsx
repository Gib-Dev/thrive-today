import styles from './HeroSection.module.css';
import Highlight from '@/components/Highlight';

export default function HeroSection() {
  return <>
    <section id="home" className={styles['hero-section']}>
      <h1 className={styles['hero-title']}>Bienvenue chez ThriveToday</h1>
      <p className={styles['hero-subtitle']}>
        Transformez votre corps et votre esprit dans un environnement inspirant.
      </p>
      <div className={styles.highlights}>
        <Highlight author="M B">
          "Si tu peux t'imaginer svelte, c'est que tu peux le faire."
        </Highlight>
        <Highlight author="A B">
          "Ici, tu peux avoir le corps dont tu rêves et garder la santé."
        </Highlight>
      </div>
    </section>
  </>
}
