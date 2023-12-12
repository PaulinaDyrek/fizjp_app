'use client'
import Image from "next/image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faBars } from "@fortawesome/free-solid-svg-icons";
import styles from '../sass/menu.scss';
import { useEffect} from "react";

export default function Menu (){
  return(
    <header className='menu'>
      <div className='menu__logo'>
        <Image
          src='/logo1.png'
          width={50}
          height={50}
        />
      </div>
      <div className='hamburger'>
        <div className='hamburger__line'></div>
        <div className='hamburger__line'></div>
        <div className='hamburger__line'></div>
      </div>
      <nav className='menu__bar'>
        <ul className='menu__lists'>
          <li className='menu__list'>
          <a href='#' className='menu__link'>Fizjostacja</a>
          </li>
          <li className='menu__list'>
          <a href='#aboutMe' className='menu__link'>O nas</a>
          </li>
          <li className='menu__list'>
          <a href='#offer' className='menu__link'>Oferta</a>
          </li>
          <li className='menu__list'>
          <a href='#opinion' className='menu__link'>Opinie</a>
          </li>
          <li className='menu__list'>
          <a href='#contact' className='menu__link'>Kontakt</a>
          </li>
        </ul>
      </nav>

    </header>
  )
}


{/* <header className='nav'>
      <div className='nav__logo'>
        <Image
          src='/logo1.png'
          width={50}
          height={50}
        />
      </div>
      <nav className='nav__menu'>
        <li className='nav__list'>
          <a href='#' className='nav__link'>Fizjostacja</a>
        </li>
        <li className='nav__list'>
          <a href='#aboutMe' className='nav__link'>O nas</a>
        </li>
        <li className='nav__list'>
          <a href='#offer' className='nav__link'>Oferta</a>
        </li>
        <li className='nav__list'>
          <a href='#opinion' className='nav__link'>Opinie</a>
        </li>
        <li className='nav__list'>
          <a href='#contact' className='nav__link'>Kontakt</a>
        </li>
      </nav>
      <div className='hamburger'>
        <div className='hamburger__line'></div>
        <div className='hamburger__line'></div>
        <div className='hamburger__line'></div>
      </div>
      
      {/* <img src='/menu.png' className='menuIcon'/> */}
   