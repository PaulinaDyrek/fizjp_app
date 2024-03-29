import styles from 'app/sass/header.scss';

export default function Header() {
  return (
    <div className="header-wrapper">
      <h1 className="main-title">Fizjostacja</h1>
      <div className="header-title">
        <h1 className="header-title__h1">Jesteśmy gotowi Ci pomóc!</h1>
        <h3 className="header-title__h3">
          Gabinet zajmuje się diagnostyką i leczeniem schorzeń i problemów
          występujących w obrębie układu ruchu.
        </h3>
      </div>
      <img
        className="header-img"
        src="/files/manekin3.png"
        alt="Obraz autorstwa benzoix na Freepik"
      />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 275">
        <path
          fill="#f6fbff"
          d="M0,96L60,90.7C120,85,240,75,360,106.7C480,139,600,213,720,240C840,267,960,245,1080,213.3C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>
      <button className="contact-link">
        <a href="#contact">Skontaktuj się z nami</a>
      </button>
    </div>
  );
}
