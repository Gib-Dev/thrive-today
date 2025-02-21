'use client';
import '../globals.css';
import Image from 'next/image';
import styles from './apropos.module.css';
import JoinSection from '@/components/JoinSection';

export default function Apropos() {
  return <>
    <main>
      {/* Section Hero */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>À propos de ThriveToday</h1>
          <p className={styles.subtitle}>
            Votre partenaire dans l&apos;atteinte de l&apos;équilibre physique et mental
          </p>
        </div>
      </section>

      {/* Section À propos */}
      <section className={`${styles.aboutContent} section-spacing`}>
        <div className="container">
          <div className={styles.contentGrid}>
            {/* Texte de présentation */}
            <div className={styles.textContent}>
              <h2>Notre philosophie d&apos;accompagnement</h2>
              <p className={styles.leadText}>
                Chez ThriveToday, nous conjuguons expertise scientifique et approche humaine pour
                vous offrir un accompagnement sur mesure dans votre quête de bien-être.
              </p>
              <div className={styles.missionStatement}>
                <p>
                  Fondé en 2024 par une équipe de professionnels de santé et de coachs certifiés,
                  notre institut s&apos;engage à fournir des solutions holistiques adaptées aux
                  exigences de la vie moderne.
                </p>
                <ul className={styles.valueList}>
                  <li>Approche scientifiquement validée</li>
                  <li>Personnalisation des programmes</li>
                  <li>Suivi à long terme</li>
                  <li>Éthique professionnelle</li>
                </ul>
              </div>
            </div>

            {/* Image d'illustration avec ton style */}
            <div className={styles.imageWrapper}>
              <Image
                src="/apropos.jpg"
                alt="Notre équipe de spécialistes"
                width={500}
                height={350}
                className={styles.aboutImage}
                priority
              />
            </div>
          </div>
          {/* Section Rejoindre */}
          <JoinSection className={styles.joinSection} />
        </div>
      </section>
    </main>
  </>
}