import styles from 'app/sass/header.scss';

export default function Header() {
  return(
    <div className='header-wrapper'>
      <div className='header-title'>
        <h1>Jesteśmy gotowi Ci pomóc!</h1>
        <h3>Gabinet zajmuje się diagnostyką i leczeniem  schorzeń i problemów występujących w obrębie układu ruchu, usprawnianiem narządów ruchu, pomocy w powrocie do zdrowia po urazach stawów i mięśni.</h3>
      </div>
      <img className='header-img' src='/header-physio.png' alt='Obraz autorstwa benzoix na Freepik' />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#fff" fill-opacity="1" d="M0,96L60,90.7C120,85,240,75,360,106.7C480,139,600,213,720,240C840,267,960,245,1080,213.3C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
    </div>
  )
}