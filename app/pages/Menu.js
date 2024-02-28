'use client';
import Image from 'next/image';
import styles from '../sass/menu.scss';
import { useState } from 'react';

export default function Menu() {
  const [showNavigation, setShowNavigation] = useState(false);
  function handleNav() {
    setShowNavigation(!showNavigation);
  }

  return (
    <header className="menu">
      <div className="menu__logo">
        <Image src="/files/logo1.png" width={50} height={50} />
      </div>
      <div
        id="hamburger"
        className={showNavigation ? 'show' : ''}
        onClick={handleNav}>
        <div className="hamburger__line"></div>
        <div className="hamburger__line"></div>
        <div className="hamburger__line"></div>
      </div>
      <nav id="menu__bar" className={showNavigation ? 'show' : ''}>
        <ul className="menu__lists">
          <li className="menu__list">
            <a href="#" className="menu__link">
              Fizjostacja
            </a>
          </li>
          <li className="menu__list">
            <a href="#aboutMe" className="menu__link">
              O nas
            </a>
          </li>
          <li className="menu__list">
            <a href="#offer" className="menu__link">
              Oferta
            </a>
          </li>
          <li className="menu__list">
            <a href="#opinion" className="menu__link">
              Opinie
            </a>
          </li>
          <li className="menu__list">
            <a href="#contact" className="menu__link">
              Kontakt
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
