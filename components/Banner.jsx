import Image from "next/image";
import banner from '@/public/weight.jpg';
import styles from "./Banner.module.css";

export default function Banner() {
    return <>
        <div className={styles.banner}>
            <Image
                src={banner}
                alt="ThriveToday Banner"
                fill
                style={{ objectFit: "cover" }}
                quality={100}
                className={styles.bannerImage}
            />
            <div className={styles.bannerText}>
                <h1 className={styles.bannerTitle}>ThriveToday</h1>
                <p className={styles.bannerSubtitle}>Votre partenaire pour une vie saine et active</p>
                <div className={styles.ctaButtons}>
                    <button className={`${styles.ctaButton} ${styles.primary}`}>Nos Programmes</button>
                    <button className={`${styles.ctaButton} ${styles.secondary}`}>En savoir plus</button>
                </div>
            </div>
        </div>
    </>
}
