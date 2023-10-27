import styles from 'app/sass/offer.scss';
import Link from 'next/link';

export default function Offer(){
  return(
    <div className='work'>
      <div className='title-container'>
        <h1>Jesteśmy gotowi Ci pomóc!</h1>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#f6fbff" fill-opacity="1" d="M0,192L18.5,176C36.9,160,74,128,111,133.3C147.7,139,185,181,222,213.3C258.5,245,295,267,332,240C369.2,213,406,139,443,133.3C480,128,517,192,554,197.3C590.8,203,628,149,665,144C701.5,139,738,181,775,208C812.3,235,849,245,886,208C923.1,171,960,85,997,74.7C1033.8,64,1071,128,1108,154.7C1144.6,181,1182,171,1218,186.7C1255.4,203,1292,245,1329,245.3C1366.2,245,1403,203,1422,181.3L1440,160L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"></path></svg>
      </div>
      <div className='sidebar'>
        <div className='logo'>
          <img className='logo__img' src='/logo.jpg' alt="" />
          <div className='sidebar__title'>
            <h2>Fizjostacja</h2>
          </div></div>
          <ul className='sidebar__ul'>
            <li className='sidebar__list'><img className='sidebar__img' src='/offer/offer_1.png' alt="" /><p>Rehabilitacja</p></li>
            <li className='sidebar__list'><img className='sidebar__img' src='/offer/offer_2.png' alt="" /><p>Terapia manualna</p></li>
            <li className='sidebar__list'><img className='sidebar__img' src='/offer/offer_3.png' alt="" /><p>Terapia neurofizjologiczna</p></li>
            <li className='sidebar__list'><img className='sidebar__img' src='/offer/offer_4.png' alt="" /><p>Terapia wisceralna</p></li>
            <li className='sidebar__list'><img className='sidebar__img' src='/offer/offer_5.png' alt="" /><p>Suche igłowamie</p></li>
            <li className='sidebar__list'><img className='sidebar__img' src='/offer/offer_6.png' alt="" /><p>Trenig medyczny</p></li>
          </ul>
          <button className='btn-back'><Link className='btn-link'href='/'>Wstecz</Link></button>
      </div>
      <div className='offer'>
        <h1 className='offer__title'>Rehabilitacja</h1>
        <div className='offer__description'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa labore quae, eum maiores neque quibusdam culpa facilis similique doloremque illo, totam, at ab dicta tenetur laboriosam quia quaerat iure magnam!
          Animi earum ex ratione laborum! Esse hic natus ad iste quidem ipsum, odit vero atque provident laborum, similique fugiat obcaecati ea adipisci eaque porro veniam velit. Excepturi doloremque quisquam ullam.
          Natus quos fugit earum deleniti molestias, ex, nam illum nesciunt vero dolorem, unde alias quae enim pariatur doloremque accusamus magni assumenda a rem nisi? In iure aut reiciendis soluta odio.
          Aspernatur esse exercitationem ipsum, quasi laborum rem et ad quos a vel eius porro quidem quam velit minima tenetur. Fugit dolore deserunt deleniti, reiciendis assumenda accusantium veritatis minus cum omnis.
          Harum esse pariatur ducimus quo laborum eveniet, porro, provident quam dicta culpa a aliquid assumenda sunt deleniti id! Magni nobis iure eum perspiciatis facere amet doloribus fugit sed ad molestiae!</p>
          <div className='offer__img'>
            <img src='/offer/method1.jpg'alt='<a href="https://pl.freepik.com/darmowe-zdjecie/profesjonalny-fizjoterapeuta-zenski-masaz-ramion-do-kobiety-blondynka_1318975.htm#query=rehabilitacja&position=18&from_view=search&track=sph">Obraz autorstwa javi_indy</a> na Freepik' />
          </div>
        </div>
        <div className='main__question'></div>
      </div>
    </div>
    
  )
}

