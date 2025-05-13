'use client'
// On importe le composant Image optimisé de Next.js pour gérer les images de manière performante
import Image from 'next/image';

// On applique les styles CSS spécifiques à ce composant via le fichier module CSS
import styles from './EventHero.module.css';
import { usePathname } from 'next/navigation';

// Le composant EventHero est conçu pour afficher une section visuelle forte en haut d'une page d'événement.
// Il met en valeur une image de fond immersive avec le titre, la catégorie, une description et deux boutons d'appel à l'action.
export default function EventHero({ title, category, description, image }) {
    
const pathname = usePathname();

const loadingStrategy = pathname === '/events/hiit' || '/events/martial' ? 'eager' : 'lazy';
    return (
        <section className={styles.hero}>
            {/* Cette division contient l’image de fond qui occupe toute la largeur et la hauteur de la section */}
            <div className={styles.heroImageContainer}>
                <Image
                    src={image}                 // L'image est injectée dynamiquement selon la page (ex: /hiit.webp)
                    alt={title}                 // Texte alternatif important pour l’accessibilité et le SEO
                    layout="fill"               // Permet à l’image de remplir tout son conteneur (cover full section)
                    objectFit="cover"           // L’image s’adapte au conteneur sans être déformée
                    priority = {pathname === '/events/hiit' || '/events/martial'}
                    loading= {loadingStrategy}                   // On force le chargement prioritaire pour booster les performances Lighthouse
                    quality={85}                // Niveau de compression pour équilibrer qualité visuelle et performance
                    className={styles.heroImage} // On applique les styles définis pour cette image
                />

                {/* Overlay sombre appliqué au-dessus de l’image pour améliorer la lisibilité du texte */}
                <div className={styles.heroOverlay} />
            </div>

            {/* Contenu principal affiché au-dessus de l’image (textes + boutons) */}
            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>
                    {/* On sépare la catégorie de l’événement pour créer un contraste visuel */}
                    <span>{category}</span>
                    <span className={styles.titleAccent}>{title}</span>
                </h1>

                {/* Description succincte qui donne envie d’en savoir plus */}
                <p className={styles.heroDescription}>{description}</p>

                {/* Boutons d'appel à l'action : incitent l’utilisateur à interagir directement */}
                <div className={styles.ctaContainer}>
                    <button className={styles.primaryButton}>Réserver maintenant</button>
                    <button className={styles.secondaryButton}>Voir le programme</button>
                </div>
            </div>
        </section>
    );
}