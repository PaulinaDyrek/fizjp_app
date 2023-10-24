import Image from 'next/image';
import styles from './page.module.css';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import layout from './layout.js';
import Menu from './components/Menu.js';
// import Logo from './components/Logo.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Slider from './components/Slider.js';
import ContactForm from './components/ContactForm.js';
import Review from './components/Review.js';
import Methods from './components/Methods.js';
import { Children } from 'react';


export default function Web() {
  return (  
    <layout id='__next'>
      <Contact></Contact>
      <Menu></Menu>
      <Slider></Slider>
      {/* <Logo></Logo> */}
      <Home></Home>
      <About></About>
      <Methods></Methods>
      <Review></Review>
      <ContactForm></ContactForm>
      
    </layout>
  )
}
