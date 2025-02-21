import styles from './HeroSection.module.css';
import Highlight from '@/components/Highlight';
import { quotesData } from '@/data/quotes';

export default function HeroSection({ title, subtitle, backgroundImage, highlights = quotesData }) {
  return <section id="home" className={styles.heroSection} style={{ backgroundImage: `url(${backgroundImage})` }}>
    <h1 className={styles.heroTitle}>{title}</h1>
    <p className={styles.heroSubtitle}>{subtitle}</p>

    {highlights.length > 0 && (
      <div className={styles.highlights}>
        {highlights.map((quote, index) => (
          <Highlight key={index} author={quote.author}>{quote.text}</Highlight>
        ))}
      </div>
    )}
  </section>
}
