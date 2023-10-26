import styles from '../sass/home.scss';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentMedical,
  faBrain,
  faStamp,
  faUserDoctor,
  faSuitcaseMedical,
  faComments
} from "@fortawesome/free-solid-svg-icons";


export default function Home (){
  return(
    <div className='about'>
      {/* <div className='img_container'>
        <Image className='about__placeimg'
        src='/main.jpg'
        width={640}
        height={426} />
      </div> */}
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
    
    </div>
    
  )
}



  {/* <div className='about__description'>
        <h1>Poznaj mnie</h1>
        <Image className='about__img'></Image>
        <p className='about__text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi repellendus tenetur vel, laudantium neque nisi porro, sed rem facere veritatis ea ad? Distinctio velit nemo quasi voluptatibus voluptatem architecto fuga.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi repellendus tenetur vel, laudantium neque nisi porro, sed rem facere veritatis ea ad? Distinctio velit nemo quasi voluptatibus voluptatem architecto fuga.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi repellendus tenetur vel, laudantium neque nisi porro, sed rem facere veritatis ea ad? Distinctio velit nemo quasi voluptatibus voluptatem architecto fuga.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi repellendus tenetur vel, laudantium neque nisi porro, sed rem facere veritatis ea ad? Distinctio velit nemo quasi voluptatibus voluptatem architecto fuga.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi repellendus tenetur vel, laudantium neque nisi porro, sed rem facere veritatis ea ad?. o, sed rem facere veritatis ea ad? Distinctio velit nemo quasi voluptatibus voluptatem architecto fuga.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi repellendus tenetur vel, laudantium neque nisi porro, sed rem facere veritatis ea ad? Distinctio velit nemo quasi voluptatibus voluptatem architecto fuga.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi repellendus tenetur vel, laudantium neque nisi porro, sed rem facere veritatis ea ad?.</p>
      </div> */}