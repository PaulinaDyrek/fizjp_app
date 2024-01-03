import styles from 'app/sass/contact-form.scss';
import Image from 'next/image';
import Script from 'next/script';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser, faPhone, faEnvelope, faComments, faPaperPlane, faClock, faLocationDot, faAt } from "@fortawesome/free-solid-svg-icons";



export default function ContactForm(){
  return(
    <div id='contact' className='form-container'>
      <div className='contact-title'>
        <h1>Jesteśmy dla Ciebie</h1>
      </div>
      <div className='form-wrapper'>
        <form className='form' action="https://formsubmit.co/eaa58d0a52aeee04d59bbdec1281a6db" method="POST">
          <input type="hidden" name="_captcha" value="false"/>
          <div className='row'>
            <div className='input-group'>
              <input className='input' type='text' name='name' id='name' required />
              <label htmlFor='name'><FontAwesomeIcon icon={faUser} style={{color: "#fff",width:'1.5rem', paddingRight:'10px'}}/>Imię</label>
            </div>
            <div className='input-group'>
              <input className='input' type='text' name='number' id='number' required />
              <label htmlFor='number'><FontAwesomeIcon icon={faPhone} style={{color: "#fff",width:'1.5rem', paddingRight:'10px'}}/>Numer tel:</label>
            </div>
          </div>
            <div className='input-group'>
              <input className='input' type='text' name='email' id='email' required />
              <label htmlFor='email'><FontAwesomeIcon icon={faEnvelope} style={{color: "#fff",width:'1.5rem', paddingRight:'10px'}}/>Adres e-mail</label>
            </div>
            <div className='input-group'>
              <textarea className='text-area' name='message' id='message'  rows="5" required></textarea>
              <label htmlFor='message'><FontAwesomeIcon icon={faComments} style={{color: "#fff",width:'1.5rem', paddingRight:'10px'}}/>Pytanie do nas...</label>
            </div>
            <button type='submit'><FontAwesomeIcon icon={faPaperPlane} style={{color: "#fff",width:'1.5rem', paddingRight:'10px'}}/>Wyślij</button>
        </form>
        <script scr='https://smtpjs.com/v3/smtp.js'></script>
        <div className='info'>
          <div className='info__short'> 
            <Image className='info__image'
            src='/baner_logo.png'
            width={160}
            height={80}
            />
          </div>
          <div className='info__short'>
            <p className='info_description'><FontAwesomeIcon icon={faClock} style={{color: "#fff",width:'1.5rem', paddingRight:'10px'}}/>Godziny pracy: Pn-Pt 8:00-20:00</p>
          </div>
          <div className='info__short'>
            <p className='info_description'><FontAwesomeIcon icon={faLocationDot} style={{color: "#fff",width:'1.5rem', paddingRight:'10px'}}/>Łukowica 440, 34-606 Łukowica</p>
          </div>
          <div className='info__short'>
            <a className='info__link' href='tel:+485105860688'><FontAwesomeIcon icon={faPhone} style={{color: "#fff",width:'1.5rem', paddingRight:'10px'}}/>+48 510 860 688</a>
          </div>
          <div className='info__short'>
            <a className='info__link' href='mailto:fizjostacja@gmail.com'><FontAwesomeIcon icon={faAt} style={{color: "#fff",width:'1.5rem', paddingRight:'10px'}}/>fizjostacja@gmail.com</a>
          </div>
        </div>
      </div>
      <div className='map-container'>
        <iframe className='map' src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=%C5%81ukowica%20440+(Fizjostacja)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
      </div>

    </div>
  )
}