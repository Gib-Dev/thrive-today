import Image from "next/image";
import banner from '@/public/weight.jpg';
import Link from 'next/link';
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
                    <Link href="/apropos" className={`${styles.ctaButton} ${styles.secondary}`}>
                    En savoir plus
                    </Link>
                </div>
            </div>
        </div>
    </>
}