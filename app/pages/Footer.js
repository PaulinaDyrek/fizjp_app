import styles from 'app/sass/footer.scss';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__row">
        <div className="footer__col">
          <img src="/files/logo_1.png" className="logo" />
          <p className="footer__info">
            This website contains Images and Icons by Freepik
          </p>
        </div>
        <div className="footer__col">
          <h3>Fizjostacja</h3>
          <p>Gabinet fizjoterapii i terapii manualnej</p>
          <p>Abcd 111, 33-000 Abcd</p>
          <p>Godziny pracy: Pn-Pt 8:00-20:00</p>
          <p className="email-id">fizjostacja@mail.com</p>
          <h4>+48 123 456 789</h4>
        </div>
        <div className="footer__col">
          <h3>Linki</h3>
          <ul className="footer__list">
            <li className="footer__link">
              <a href="#">Fizjostacja</a>
            </li>
            <li className="footer__link">
              <a href="#aboutMe">O nas</a>
            </li>
            <li className="footer__link">
              <a href="#offer">Oferta</a>
            </li>
            <li className="footer__link">
              <a href="#opinion">Opinie</a>
            </li>
          </ul>
        </div>
        <div className="footer__col">
          <h3>Tu nas znajdziesz</h3>
          <div className="contact-wrapper">
            <a href="tel:+485105860688" className="contact">
              <Image src="/files/phone.png" width={35} height={35} />
            </a>
            <a
              href="https://www.facebook.com/fizjostacja.dyrek/"
              className="contact">
              <Image src="/files/facebook.png" width={35} height={35} />
            </a>
            <a
              href="https://maps.app.goo.gl/3WjcKhNdF8q8FUjX7"
              className="contact">
              <Image src="/files/google-maps.png" width={35} height={35} />
            </a>
          </div>
        </div>
      </div>
      <hr className="line" />
      <p className="copyrights">Fizjostacja © 2023 - All Rights Reserved</p>
    </footer>
  );
}
