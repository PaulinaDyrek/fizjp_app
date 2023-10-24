import styles from '../sass/contact.scss';
import Image from "next/image";


{/* <div className="nav__contact">
        <FontAwesomeIcon icon={faMobileScreenButton} style={{color: "#000000",width:'1.5rem'}}/><a href="tel:+485105860688" className="contact">Zadzwoń</a> 
      </div> */}

export default function Contact(){
  return(
    <div className='contact-wrapper'>
      <a href='tel:+485105860688' className='contact'>
        <Image
        src='/phone.png'
        width={35}
        height={35}
        /></a> 
      <a href='https://www.facebook.com/fizjostacja.dyrek/' className='contact'>
      <Image
        src='/facebook.png'
        width={35}
        height={35}
        /></a>
      <a href='https://maps.app.goo.gl/3WjcKhNdF8q8FUjX7' className='contact'>
      <Image
        src='/google-maps.png'
        width={35}
        height={35}
        /></a>
    </div>
  )
}      
//telefon
//facebook
//mapy jak dojade pinezka

{/* <FontAwesomeIcon icon={faPhone} style={{color: "#000000",width:'1rem'}} />
<FontAwesomeIcon icon={faLaptop} style={{color: "#000000",width:'1rem'}} />
<FontAwesomeIcon icon={faLocationDot} style={{color: "#000000",width:'1rem'}} /> */}