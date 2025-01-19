
import styles from '@/components/Highlight.module.css';

export default function Highlight({ children, author}) {
    return <>
        <div className={styles.highlight}>
            {/* Contenu principaal */}
            <div className={styles.text}>
                {children}
            </div>
             {/* Contenu principaal */}
             <div className={styles.author}>
                {author}
            </div>           
        </div>
    </>
}