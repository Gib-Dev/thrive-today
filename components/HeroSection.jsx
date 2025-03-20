import Image from 'next/image';
import styles from './HeroSection.module.css';
import Highlight from '@/components/Highlight';
import { quotesData } from '@/data/quotes';

export default function HeroSection({ title, subtitle, backgroundImage = '/hero-fitness.webp', highlights = quotesData }) {
  return (
    <section className={styles.heroSection}>
      {/* Image de fond avec Next/Image */}
      <div className={styles.imageWrapper}>
        <Image
          src={backgroundImage}
          alt="Image de fond Hero"
          fill
          priority
          quality={85}
          className={styles.heroImage}
        />
        <div className={styles.overlay}></div>
      </div>

      {/* Texte au-dessus de l'image */}
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{title}</h1>
        <p className={styles.heroSubtitle}>{subtitle}</p>

        {highlights.length > 0 && (
          <div className={styles.highlights}>
            {highlights.map((quote, index) => (
              <Highlight key={index} author={quote.author}>
                {quote.text}
              </Highlight>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
