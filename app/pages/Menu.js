import Image from "next/image";
import styles from '../sass/menu.scss';

export default function Menu (){
  return (
    <nav className='nav'>
      <div className='nav__logo'>
        <Image
          src='/logo1.png'
          width={60}
          height={60}
        />
      </div>
      <div className='nav__menu'>
        <a href='#' className='nav__link'>Fizjostacja</a>
        <a href='#aboutMe' className='nav__link'>O nas</a>
        <a href='#offer' className='nav__link'>Oferta</a>
        <a href='#opinion' className='nav__link'>Opinie</a>
        <a href='#contact' className='nav__link'>Kontakt</a>
      </div>
    </nav>
  )
}


