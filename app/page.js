import Image from 'next/image';
import styles from './page.module.css';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import layout from './layout.js';
import Menu from './pages/Menu.js';
import Header from './pages/Header.js';
import Home from './pages/Home.js';
import ContactForm from './pages/contact/page.js';
import Review from './pages/Review.js';
import Methods from './pages/Methods.js';
import Team from './pages/Team.js';
import Footer from './pages/Footer.js';

export default function Web() {
  return (
    <layout id="__next">
      <Menu></Menu>
      <Header></Header>
      <Home></Home>
      <Methods></Methods>
      <Team></Team>
      <Review></Review>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </layout>
  );
}
