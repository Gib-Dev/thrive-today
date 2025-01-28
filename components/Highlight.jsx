
import styles from '@/components/Highlight.module.css';

export default function Highlight({ children, author, color = 'var(--color-primary)'}) {
    return <>
        <blockquote className={styles.highlight} style={{ borderColor: color }}>
            <div className={styles.text}>{children}</div>
            <cite className={styles.author}>- {author}</cite>
        </blockquote>
    </>
}