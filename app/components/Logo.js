'use client';
import styles from '../sass/logo.scss';
import { useEffect } from 'react';
import Image from 'next/image';


 function Logo() {
  useEffect(() => {
  var counter = 1;
  setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
  }, 5000); 
  }, []);
  

  return(
    <div className='slide-container'>
    <div className='question'>
      <h1 className='question__text'>Czujesz dyskomfort? Wiemy jak Ci pomóc!</h1>
      <a href ="#" className='question__button'>Więcej...</a>
    </div>  
      <div className='slider'>
        <div className='slides'>
          <input type='radio' name='radio-btn' id='radio1' />
          <input type='radio' name='radio-btn' id='radio2' />
          <input type='radio' name='radio-btn' id='radio3' />
          <input type='radio' name='radio-btn' id='radio4' />
          <div className='slide first'>
            <img src="baner1.jpg" alt="" />
          </div>
          <div className='slide'>
            <img src="baner2.jpg" alt="" />
          </div>
          <div className='slide'>
            <img src="baner3.jpg" alt="" />
          </div>
          <div className='slide'>
            <img src="baner4.jpg" alt="" />
          </div>
          <div className='navigation-auto'>
            <div className='auto-btn1'></div>
            <div className='auto-btn2'></div>
            <div className='auto-btn3'></div>
            <div className='auto-btn4'></div>
          </div>
        </div>
        <div className='navigation-manual'>
          <label htmlFor='radio1' className='manual-btn'></label>
          <label htmlFor='radio2' className='manual-btn'></label>
          <label htmlFor='radio3' className='manual-btn'></label>
          <label htmlFor='radio4' className='manual-btn'></label>
        </div>
      </div>
    </div>

  )
}

export default Logo ;


