import styles from 'app/sass/methods.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWheelchair,
  faHandsBubbles,
  faHandHoldingHeart,
  faBrain,
  faDumbbell,
  faBandage,
} from '@fortawesome/free-solid-svg-icons';

export default function Methods() {
  return (
    <div id="offer" className="m-container">
      <div className="m-title">
        <h1 className="m-title__h1">Nasza oferta</h1>
      </div>
      <div className="methods">
        <div className="methods__info">
          <div className="methods__icon">
            <FontAwesomeIcon icon={faWheelchair} />
          </div>
          <a
            className="methods__link"
            href="/pages/method/rehabilitacja"
            target="_parent">
            <h3 className="methods__name">Rehabilitacja</h3>
            <p className="methods__description">
              Szereg działań które podejmujemy na rzecz pacjenta mające na celu
              przywrócenie całkowitej lub przynajmniej częsciowej sprawności
              fizycznej lub psychicznej.
            </p>
          </a>
        </div>
        <div className="methods__info">
          <div className="methods__icon">
            <FontAwesomeIcon icon={faHandsBubbles} />
          </div>
          <a
            className="methods__link"
            href="/pages/method/manualna"
            target="_parent">
            <h3 className="methods__name">Terapia manualna</h3>
            <p className="methods__description">
              Naturalna i nieinwazyjna metoda leczenia i diagnostyki stosowana w
              odwracalnych dysfunkcjach elementów tworzących układ ruchu, takich
              jak mięśnie, stawy, więzadła, kręgosłup.
            </p>
          </a>
        </div>
        <div div className="methods__info">
          <div className="methods__icon">
            <FontAwesomeIcon icon={faHandHoldingHeart} />
          </div>
          <a
            className="methods__link"
            href="/pages/method/wisceralna"
            target="_parent">
            <h3 className="methods__name">Terapia wisceralna</h3>
            <p className="methods__description">
              Rodzaj masażu brzucha przeprowadzany w celu przywrócenia
              prawidłowego napięcia w obrębie jamy brzusznej.
            </p>
          </a>
        </div>
        <div className="methods__info">
          <div className="methods__icon">
            <FontAwesomeIcon icon={faBrain} />
          </div>
          <a
            className="methods__link"
            href="/pages/method/neuro-orto"
            target="_parent">
            <h3 className="methods__name">Terapia neuro/orto</h3>
            <p className="methods__description">
              Terapia neuro/orto PNF to metoda kinezyterapii opierająca się na
              neurofizjologicznych wzorcach wykonywania czynności ruchowych oraz
              ich rozwoju i zmian w trakcie całego życia człowieka.
            </p>
          </a>
        </div>
        <div className="methods__info">
          <div className="methods__icon">
            <FontAwesomeIcon icon={faDumbbell} />
          </div>
          <a
            className="methods__link"
            href="/pages/method/trening"
            target="_parent">
            <h3 className="methods__name">Trenig medyczny</h3>
            <p className="methods__description">
              Najogólniej ujmując jest to połączenie fizjoterapii oraz treningu.
              Trening medyczny powstał z myślą o sportowcach, którzy po
              rehabilitacji potrzebują treningu specjalistycznego w swojej
              dyscyplinie.
            </p>
          </a>
        </div>
        <div className="methods__info">
          <div className="methods__icon">
            <FontAwesomeIcon icon={faBandage} />
          </div>
          <a
            className="methods__link"
            href="/pages/method/iglowanie"
            target="_parent">
            <h3 className="methods__name">Suche igłowanie</h3>
            <p className="methods__description">
              Polega na nakłuciu punktu spustowego w mięśniu lub nakłuciu
              napiętego pasma mięśniowego za pomocą igieł do akupunktury w celu
              leczenia bólu mięśniowo-powięziowego i dysfunkcji w obrębie
              narządu ruchu.
            </p>
          </a>
        </div>
      </div>
      <a href="/pages/method/" target="_parent">
        <button className="button-more">Więcej...</button>
      </a>
    </div>
  );
}
