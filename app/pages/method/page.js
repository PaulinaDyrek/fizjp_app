import styles from 'app/sass/offer.scss';
import Link from 'next/link';

export default function Offer() {
  return (
    <div className="work">
      <div className="main-area">
        <div className="title-container">
          <h1>Jesteśmy gotowi Ci pomóc!</h1>
          <svg
            className="wave"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 190">
            <path
              fill="#f6fbff"
              d="M0,96L34.3,117.3C68.6,139,137,181,206,181.3C274.3,181,343,139,411,117.3C480,96,549,96,617,117.3C685.7,139,754,181,823,165.3C891.4,149,960,75,1029,74.7C1097.1,75,1166,149,1234,170.7C1302.9,192,1371,160,1406,144L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
          </svg>
        </div>
        <div className="offer">
          <h1 className="offer__title">Rehabilitacja</h1>
          <div className="offer__description">
            <div className="offer__text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repudiandae, iusto illo praesentium laborum quasi unde enim
                doloribus. Eos consequatur vitae, autem voluptates voluptas
                aperiam. Sint recusandae veniam ab tempora reprehenderit?
                Incidunt, quo. Ex distinctio est officiis tempora qui, totam rem
                nulla reiciendis quod, fugiat, debitis odit asperiores!
                Distinctio quae voluptatem possimus id architecto dolorum itaque
                deserunt sit eius corporis. Laudantium. Nam quidem dolore
                quisquam nihil cumque, esse, veniam, quia eius voluptate libero
                consectetur? Facilis asperiores, velit in possimus itaque
                dignissimos, ratione adipisci, consequuntur quam eveniet dolore
                libero molestias cupiditate quibusdam?
              </p>
            </div>
            <img className="img__method" src="/offer/method_1.jpg" />
          </div>
          <button className="btn-question">
            <Link className="btn-form" href="/pages/contact">
              Masz pytanie?
            </Link>
          </button>
        </div>
      </div>
      <div className="sidebar">
        <div className="logo">
          <img className="logo__img" src="/files/logo.jpg" alt="" />
          <div className="sidebar__title">
            <h2>Fizjostacja</h2>
          </div>
        </div>
        <ul className="sidebar__ul">
          <li className="sidebar__list">
            <img className="sidebar__img" src="/offer/offer_1.png" alt="" />
            <Link className="sidebar__link" href="/pages/method/rehabilitacja">
              <p>Rehabilitacja</p>
            </Link>
          </li>
          <li className="sidebar__list">
            <img className="sidebar__img" src="/offer/offer_2.png" alt="" />
            <Link className="sidebar__link" href="/pages/method/manualna">
              <p>Terapia manualna</p>
            </Link>
          </li>
          <li className="sidebar__list">
            <img className="sidebar__img" src="/offer/offer_3.png" alt="" />
            <Link className="sidebar__link" href="/pages/method/neuro-orto">
              <p>Terapia neuro/orto</p>
            </Link>
          </li>
          <li className="sidebar__list">
            <img className="sidebar__img" src="/offer/offer_4.png" alt="" />
            <Link className="sidebar__link" href="/pages/method/wisceralna">
              <p>Terapia wisceralna</p>
            </Link>
          </li>
          <li className="sidebar__list">
            <img className="sidebar__img" src="/offer/offer_5.png" alt="" />
            <Link className="sidebar__link" href="/pages/method/iglowanie">
              <p>Suche igłowanie</p>
            </Link>
          </li>
          <li className="sidebar__list">
            <img className="sidebar__img" src="/offer/offer_6.png" alt="" />
            <Link className="sidebar__link" href="/pages/method/trening">
              <p>Trening medyczny</p>
            </Link>
          </li>
        </ul>
        {/* <button className="btn-back">
          <Link className="btn-link" href="/">
            Wstecz
          </Link>
        </button> */}
        <a className="btn-link" href="/" target="_parent">
          <button className="btn-back"> Wstecz</button>
        </a>
      </div>
    </div>
  );
}
