import Link from 'next/link';
import styles from './JoinSection.module.css';
import { joinData } from '@/data/join';


export default function JoinSection() {
  return <>
    <section id="join" className={styles.joinSection}>
      <h2>{joinData.title}</h2>
      <p>{joinData.text}</p>
      <Link href={joinData.buttonLink} className={styles.buttonLink}>
        {joinData.buttonText}
      </Link>
    </section>
  </>;
}
