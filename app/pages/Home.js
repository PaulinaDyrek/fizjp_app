import styles from '../sass/home.scss';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck, 
} from "@fortawesome/free-solid-svg-icons";


export default function Home (){
  return(
    <div className='about__wrapper'>
      <div className='about__title'>
        <h3>Dlaczego my?</h3>
        <h1>Nasi pacjenci są pod doskonałą opieką</h1>
      </div>
      <div className='about__main'>
        <div className='about__question'>
          <h2>Jak pracujemy?</h2>
          <div className='about__img'><img src='/about_1.png' alt='Obraz autorstwa jcomp na Freepik' /></div>
          
        </div>
        <div className='about__info'>
          <ul>
            <li><FontAwesomeIcon className='about__icon' icon={faCheck} />Indywidualnie dobrana terapia</li>
            <li><FontAwesomeIcon className='about__icon' icon={faCheck} /> Duże doświadczenie</li>
            <li><FontAwesomeIcon className='about__icon' icon={faCheck} /> Wiedza poparta certyfikatami</li>
            <li><FontAwesomeIcon className='about__icon' icon={faCheck} />Nowoczesne metody badania</li>
            <li><FontAwesomeIcon className='about__icon' icon={faCheck} />Leczenie funkcjonalne</li>
            <li><FontAwesomeIcon className='about__icon' icon={faCheck} />Wiele pozytywnych opinii</li>
          </ul>
        </div>
      </div>
      
    </div>
  )
}

{/* <div className='about'>
      <div className='img_container'>
        <Image className='about__placeimg'
        src='/main.jpg'
        width={640}
        height={426} />
      </div>
      <div className='about_wrapper'>
        <div className='titlle'>
          <h1 className='titlle_one'>Fizjostacja</h1>
          <h2 className='short'>Krótko o nas</h2>
        </div>
        <div className='container'>
          <div className='container_first'>
            <div className='about_titlle'><p className='about_list'>
            <FontAwesomeIcon icon={faCommentMedical} style={{color: '#000000',width:'2rem', paddingRight:'10px'}}/>Indywidualnie dobrana terapia</p></div>
            <div className='about_titlle'><p className='about_list'>
            <FontAwesomeIcon icon={faBrain} style={{color: "#000000",width:'2rem', paddingRight:'10px'}} />Duże doświadczenie</p></div>
            <div className='about_titlle'><p className='about_list'>
            <FontAwesomeIcon icon={faStamp} style={{color: "#000000",width:'2rem', paddingRight:'10px'}} />Wiedza poparta certyfikatami</p></div>
          </div>  
          <div className='container_second'>
            <div className='about_titlle'><p className='about_list'>
            <FontAwesomeIcon icon={faUserDoctor} style={{color: "#000000",width:'2rem', paddingRight:'10px'}}/>Nowoczesne metody badania </p></div>
            <div className='about_titlle'><p className='about_list'>
            <FontAwesomeIcon icon={faSuitcaseMedical} style={{color: "#000000",width:'2rem', paddingRight:'10px'}}/>Leczenie funkcjonalne</p></div>
            <div className='about_titlle'><p className='about_list'>
            <FontAwesomeIcon icon={faComments} style={{color: "#000000",width:'2rem', paddingRight:'10px'}} />Wiele pozytywnych opinii</p></div>
          </div>
          
      </div>
      
      
      </div>
    
    </div> */}