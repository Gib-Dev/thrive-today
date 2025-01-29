import Image from 'next/image';
import martialImage from '@/public/martial.jpg';
import boxingImage from '@/public/boxe.jpg'
import mmaImage from '@/public/mma.jpg'
import judoImage from '@/public/judo.jpg'

export default function MartialPage() {
    return  <>
    <main>
            <section>
              <Image src={martialImage} alt="Arts Martiaux" width={800} height={400} />
              <h1>Arts Martiaux</h1>
              <p>Découvrez les différents cours d'arts martiaux qui vous sont offert.</p>
              <h3>Boxe</h3>
              <Image src={boxingImage} alt="Cours de Boxe" width={600} height={300} />
              <h3>Arts martiaux mixte</h3>
              <Image src={mmaImage} alt="Cours de MMA" width={600} height={300} />
              <h3>Judo</h3>
              <Image src={judoImage} alt="Cours de Judo" width={600} height={300} />
            </section>
          </main>
        </>
    }