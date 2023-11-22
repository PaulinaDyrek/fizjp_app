import Image from 'next/image';
import styles from './page.module.css';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import layout from './layout.js';
import Menu from './pages/Menu.js';
// import Logo from './components/Logo.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Slider from './pages/Slider.js';
import ContactForm from './pages/contact/page.js';
import Review from './pages/Review.js';
import Methods from './pages/Methods.js';
import Header from './pages/Header.js';
import Team from './pages/Team.js';
import Footer from './pages/Footer.js';
import Maps from './pages/Maps.js';


export default function Web() {
  return (  
    <layout id='__next'>
      {/* <Contact></Contact> */}
      <Menu></Menu>
      <Header></Header>
      {/* <Slider></Slider> */}
      {/* <Logo></Logo> */}
      <Home></Home>
      {/* <About></About> */}
      <Methods></Methods>
      <Team></Team>
      <Review></Review>
      <ContactForm></ContactForm>
      <Maps></Maps>
      <Footer></Footer>
    </layout>
  )
}
