import React from "react";
import Image from "next/image";
import styles from "./martialArtsPage.module.css";
import martialImage from "@/public/Art-martiaux.jpg";
import boxingImage from "@/public/boxe.jpg";
import mmaImage from "@/public/mma.jpg";
import judoImage from "@/public/judo.jpg";
import taekwondoImage from "@/public/taekwondo.jpg";

const MartialArtsPage = () => {
  const disciplines = [
    { name: "Boxe", image: boxingImage, id: 1 },
    { name: "MMA", image: mmaImage, id: 2 },
    { name: "Judo", image: judoImage, id: 3 },
    { name: "Taekwondo", image: taekwondoImage, id: 4 },
  ];

  return <>
    <main className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span className={styles.titleHighlight}>Maîtrise Martiale</span>
            Excellence & Discipline
          </h1>
          <p className={styles.heroText}>
            Transformez votre passion en expertise avec nos programmes sur mesure
          </p>
          <div className={styles.ctaContainer}>
            <button className={styles.ctaButton}>Essai gratuit</button>
            <button className={styles.secondaryButton}>Programmes</button>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image
            src={martialImage}
            alt="Arts martiaux"
            layout="fill"
            objectFit="cover"
            priority
            quality={100}
          />
        </div>
      </section>

      {/* Disciplines Section */}
      <section className={styles.disciplines}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Nos Disciplines</h2>
          <p className={styles.sectionSubtitle}>Choisissez votre voie</p>
        </div>
        <div className={styles.disciplineGrid}>
          {disciplines.map((discipline) => (
            <article key={discipline.id} className={styles.card}>
              <div className={styles.imageContainer}>
                <Image
                  src={discipline.image}
                  alt={discipline.name}
                  layout="responsive"
                  objectFit="cover"
                  width={400}
                  height={300}
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{discipline.name}</h3>
                <p className={styles.cardText}>
                  Cours adaptés à tous niveaux
                </p>
                <button className={styles.cardButton}>En savoir plus →</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Join Section */}
      <section className={styles.join}>
        <div className={styles.joinContent}>
          <div className={styles.joinText}>
            <h2 className={styles.joinTitle}>
              Prêt à relever le
              <span className={styles.titleAccent}>défi</span> ?
            </h2>
            <p className={styles.joinSubtitle}>
              Commencez votre parcours dès aujourd'hui
            </p>
          </div>
          <div className={styles.formContainer}>
            <input 
              type="email" 
              placeholder="Votre email" 
              className={styles.emailInput} 
            />
            <button className={styles.joinButton}>Commencer maintenant</button>
          </div>
        </div>
      </section>
    </main>
  </>
};

export default MartialArtsPage;