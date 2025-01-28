import Image from 'next/image';
import yogaImage from '@/public/yogaImage.jpg';

export default function YogaPage() {
  return  <>
      <main>
        <section>
          <Image src={yogaImage} alt="Yoga Session" width={800} height={400} />
          <h1>Yoga</h1>
          <p>Découvrez nos séances de yoga revitalisantes adaptées à tous les niveaux.</p>
        </section>
      </main>
    </>
}
