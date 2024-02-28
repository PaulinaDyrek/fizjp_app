'use client';
import { useEffect } from 'react';
import styles from '../sass/review.scss';

export default function () {
  useEffect(() => {
    var slide = document.getElementById('slide');
    var upArrow = document.getElementById('upArrow');
    var downArrow = document.getElementById('downArrow');
    let x = 0;

    upArrow.onclick = function () {
      if (x > '-900') {
        x = x - 320;
        slide.style.top = x + 'px';
      }
    };

    downArrow.onclick = function () {
      if (x < '0') {
        x = x + 320;
        slide.style.top = x + 'px';
      }
    };
  }, []);
  return (
    <div className="review" id="opinion">
      <h1 className="review__title">Opinie pacjentów</h1>
      <div className="review__box">
        <div id="slide">
          <div className="card">
            <div className="profile">
              <img className="profile__img" src="files/review-1.jpg" alt="" />
              <h3 className="profile__name">Ania Zagórowska</h3>
            </div>
            <p className="profile__description">
              "Indywidualne podejście do pacjenta! Fizjoterapeuta posiada bardzo
              dużą wiedze, którą przekazuje w zrozumiały sposób. Miejsce godne
              polecenia !"
            </p>
          </div>
          <div className="card">
            <div className="profile">
              <img className="profile__img" src="/files/review-2.jpg" alt="" />
              <h3 className="profile__name">Laura Ogrodnik</h3>
            </div>
            <p className="profile__description">
              "Bradzo szybko pozbyłam się bólu, który towarzyszył mi w obrębie
              szyji od mięsiecy. Świetnie dobrana terapia. Gorąco polecam !"
            </p>
          </div>
          <div className="card">
            <div className="profile">
              <img className="profile__img" src="/files/review-3.jpg" alt="" />
              <h3 className="profile__name">Marek Ptak</h3>
            </div>
            <p className="profile__description">
              "Pan Rafał odpowiedni człowiek na odpowiednim miejscu! Fachowe
              podejście, sympatyczna atmosfera i oczywiście efekty! Polecam."
            </p>
          </div>
          <div className="card">
            <div className="profile">
              <img className="profile__img" src="/files/review-4.jpg" alt="" />
              <h3 className="profile__name">Paweł Bielan</h3>
            </div>
            <p className="profile__description">
              "Miejsce godne zaufania, Pani Marta robi świętną robote. Pomógła
              nie tylko w pozbyciu się problemu, ale również w zbudowaniu
              większej świadomości własnego ciała. Osoba godna zaufania i
              polecenia."
            </p>
          </div>
        </div>
        <div className="sidebar">
          <img
            className="sidebar__arrow"
            src="/files/arrow-up.png"
            id="upArrow"
          />
          <img
            className="sidebar__arrow"
            src="/files/arrow-down.png"
            id="downArrow"
          />
        </div>
      </div>
    </div>
  );
}
