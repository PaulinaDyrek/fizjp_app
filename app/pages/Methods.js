import styles from 'app/sass/methods.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faWheelchair,faHandsBubbles, faHandHoldingHeart, faBrain, faDumbbell} from "@fortawesome/free-solid-svg-icons";


export default function Methods (){
 
  return(
    <div id='offer' className='m-container'>
      <div className='methods'>
        <h1>Nasza oferta</h1>
      </div>
      <div className='methods__info'>
        <div className='methods__icon'>
          <FontAwesomeIcon  icon={faWheelchair}/></div>
        <h3 className='methods__description'>Rehabilitacja</h3>
        <Link className='methods__link' href='/pages/method/rehabilitacja'><p>Szereg działań które podejmujemy na rzecz pacjenta mające na celu przywrócenie całkowitej lub przynajmniej częsciowej sprawności fizycznej lub psychicznej.</p></Link>
      </div>
      <div className='methods__info'>
        <div className='methods__icon'>
          <FontAwesomeIcon icon={faHandsBubbles}/></div>
        <h3 className='methods__description'>Terapia manualna</h3>
        <Link className='methods__link' href='/pages/method/manualna'><p>Naturalna i nieinwazyjna metoda leczenia i diagnostyki stosowana w odwracalnych dysfunkcjach elementów tworzących układ ruchu, takich jak mięśnie, stawy, więzadła, kręgosłup.</p></Link>
      </div>
      <div className='methods__info'>
        <div className='methods__icon'>
          <FontAwesomeIcon icon={faHandHoldingHeart} /></div>
        <h3 className='methods__description'>Terapia wisceralna</h3>
        <Link className='methods__link' href='/pages/method/wisceralna'><p>Rodzaj masażu brzucha przeprowadzany w celu przywrócenia prawidłowego napięcia w obrębie jamy brzusznej. Odpowiednie uciskanie narządów pozwala zdjąć napięcie z mięśni i poprawić działanie układu trzewnego.</p></Link>
      </div>
      <div className='methods__info'>
        <div className='methods__icon'>
          <FontAwesomeIcon  icon={faBrain} /></div>
        <h3 className='methods__description'>Terapia neuro/orto</h3>
        <Link className='methods__link' href='/pages/method/neuro-orto'><p>PNF to metoda kinezyterapii opierająca się na neurofizjologicznych wzorcach wykonywania czynności ruchowych oraz ich rozwoju i zmian w trakcie całego życia człowieka.</p></Link>
      </div>
      <div className='methods__info'>
        <div className='methods__icon'>
          <FontAwesomeIcon  icon={faDumbbell} /></div>
        <h3 className='methods__description'>Trenig medyczny</h3>
        <Link className='methods__link' href='/pages/method/trenig'><p>Najogólniej ujmując jest to połączenie fizjoterapii oraz treningu. Trening medyczny powstał z myślą o sportowcach, którzy po zakończeniu rehabilitacji potrzebują łagodnego przejścia do treningu specjalistycznego w swojej dyscyplinie.</p></Link>
      </div>
    <div className='m-img'></div>
    <div className='methods__more'>
      <button><Link className='methods__link' className='btn-more'href='/pages/method/rehabilitacja'>Więcej...</Link></button>
    </div>
    
    
    </div>
  )
}