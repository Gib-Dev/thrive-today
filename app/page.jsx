import './globals.css';
import Highlight from '@/components/Highlight';

export default function Accueil() {
  return <>
    <div>
      <section id='home'>
        <h2>Bienvenue chez ThriveToday</h2>
        <p>Découvrez nos programmes et nos services.</p>

        <Highlight author ="M B">  
          "Si tu peux t'imaginer svelte physiquement et mentalement,
          c'est que tu peux le faire."
        </Highlight>
      </section>
    </div>
  </>
}
