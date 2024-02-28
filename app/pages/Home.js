import styles from '../sass/home.scss';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div className="about-wrapper" id="aboutMe">
      <div className="about-title">
        <h3 className="about-title__h3">Dlaczego my?</h3>
        <h1 className="about-title__h1">
          Nasi pacjenci są pod doskonałą opieką
        </h1>
      </div>
      <div className="about-main">
        <div className="about-question">
          <h2 className="about-question__h2">Jak pracujemy?</h2>
          <div className="about-pic">
            <img
              src="/files/about_1.png"
              alt="Obraz autorstwa jcomp na Freepik"
              className="about-pic__img"
            />
          </div>
        </div>
        <div className="about-info">
          <ul className="about-info__ul">
            <li className="about-info__list">
              <FontAwesomeIcon className="about-icon" icon={faCheck} />
              Indywidualna terapia
            </li>
            <li className="about-info__list">
              <FontAwesomeIcon className="about-icon" icon={faCheck} /> Duże
              doświadczenie
            </li>
            <li className="about-info__list">
              <FontAwesomeIcon className="about-icon" icon={faCheck} /> Wiedza
              poparta certyfikatami
            </li>
            <li className="about-info__list">
              <FontAwesomeIcon className="about-icon" icon={faCheck} />
              Nowoczesne metody badania
            </li>
            <li className="about-info__list">
              <FontAwesomeIcon className="about-icon" icon={faCheck} />
              Leczenie funkcjonalne
            </li>
            <li className="about-info__list">
              <FontAwesomeIcon className="about-icon" icon={faCheck} />
              Wiele pozytywnych opinii
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
