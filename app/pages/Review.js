'use client';
import { useEffect } from 'react';
import styles from '../sass/review.scss';

export default function (){
  useEffect(() => {
     var slide = document.getElementById('slide');
     var upArrow = document.getElementById('upArrow');
     var downArrow = document.getElementById('downArrow');
     let x = 0;
    
     upArrow.onclick = function(){
      if(x > '-900'){
      x = x-320;
      slide.style.top = x + 'px';
      }
     }

     downArrow.onclick = function(){
      if(x < '0'){
      x = x+320;
      slide.style.top = x + 'px';
      }
     }
    }, []);
  return(
    <div className='review' id='opinion'>
      <h1 className='review__title'>Opinie pacjentów</h1>
      <div className='review__box'>
        <div id='slide'>
          <div className='card'>
            <div className='profile'>
              <img className='profile__img' src='/review-1.jpg' alt="" />
              <h3 className='profile__name'>Ania Zagórowska</h3>
            </div>
              <p className='profile__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ratione dolorum atque consectetur repellat magnam, perferendis nisi similique explicabo quod quidem </p>
          </div>
          <div className='card'>
            <div className='profile'>
              <img className='profile__img' src='/review-2.jpg' alt="" />
              <h3 className='profile__name'>Laura Ogrodnik</h3>
            </div>
              <p className='profile__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ratione dolorum atque consectetur repellat magnam, perferendis </p>
          </div>
          <div className='card'>
            <div className='profile'>
              <img className='profile__img' src='/review-3.jpg' alt="" />
              <h3 className='profile__name'>Marek Ptak</h3>
            </div>
              <p className='profile__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ratione dolorum atque consectetur repellat magnam, perferendis nisi similique explicabo quod quidem distinctio debitis illum magni exercitationem ipsum </p>
          </div>
          <div className='card'>
            <div className='profile'>
              <img className='profile__img' src='/review-4.jpg' alt="" />
              <h3 className='profile__name'>Paweł Bielan</h3>
            </div>
              <p className='profile__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ratione dolorum atque consectetur repellat magnam, perferendis nisi similique explicabo quod quidem distinctio debitis </p>
          </div>

        </div>
        <div className='sidebar'>
          <img className='sidebar__arrow' src="/arrow-up.png" id='upArrow'/>
          <img className='sidebar__arrow' src="/arrow-down.png" id='downArrow' />
        </div>


      </div>
    </div>
  )
}