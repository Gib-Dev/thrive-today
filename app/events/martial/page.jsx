import React from "react";
import Image from "next/image";
import styles from "./martialArtsPage.module.css";

const MartialArtsPage = () => {
    return <>
        <main className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <Image
                src="/Art-martiaux.jpg"
                alt="Arts Martiaux"
                className={styles.heroImage}
                width={800}
                height={400}
                />
                <div className={styles.heroText}>
                <h1>Arts Martiaux</h1>
                <p>
                    Explorez les disciplines des arts martiaux, de la maîtrise du Karaté à l'intensité du MMA.
                    Rejoignez nos cours pour améliorer votre force, votre discipline et votre confiance.
                </p>
                </div>
            </section>

            {/* Disciplines Section */}
            <section className={styles.disciplines}>
                <h2 className={styles.sectionTitle}>Nos Disciplines</h2>
                <div className={styles.disciplineGrid}>
                {[
                    { name: "Karate", image: "/kata.jpg" },
                    { name: "Judo", image: "/judo.jpg" },
                    { name: "MMA", image: "/MMA.jpg" },
                    { name: "Taekwondo", image: "/Taekwondo.jpg" },
                ].map((discipline, index) => (
                    <div key={index} className={styles.card}>
                    <Image
                        src={discipline.image}
                        alt={discipline.name}
                        className={styles.cardImage}
                        width={300}
                        height={200}
                    />
                    <h3 className={styles.cardTitle}>{discipline.name}</h3>
                    </div>
                ))}
                </div>
            </section>

            {/* Join Section */}
            <section className={styles.join}>
                <h2 className={styles.joinTitle}>Rejoignez-nous dès maintenant</h2>
                <p className={styles.joinText}>
                Découvrez votre potentiel avec nos cours d'arts martiaux. Adaptés à tous les niveaux, nos programmes vous accompagneront dans votre progression.
                </p>
                <button className={styles.joinButton}>Inscrivez-vous</button>
            </section>
        </main>
    </>
      
  };
  
  export default MartialArtsPage;