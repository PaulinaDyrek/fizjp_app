import styles from '../sass/about.scss'
import Image from 'next/image';

export default function About() {
  return(
    <div id='aboutMe'>
      <div className='rectangle'></div> 
      <h1 className='title-intro'>Poznaj naszych specjalistów</h1>
      <div className='about-wrapper'>
        <div className='image-container'>
          <img  className='physio__photo' src="/physio1.jpg" alt="" />
          {/* <Image className='physio__photo'
          src='/physio1.jpg'
          width={325}
          height={400}
          /> */}
          <div className='image-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus commodi natus suscipit rem ipsum, quibusdam porro repudiandae tempore, incidunt dolore iusto saepe eius quisquam libero dolorem. Id assumenda sequi voluptatibus.</div>
          <h1 className='physio__name'>Jan Kowalski</h1>
          <p className='physio__description'>Fizjoterapeuta</p>
        </div>
        <div className='image-container'>
          <img className='physio__photo' src="/physio2.png" alt="" />
          {/* <Image className='physio__photo'
          src='/physio2.png'
          width={325}
          height={400}
         /> */}
          <div className='image-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure sapiente culpa labore quae accusamus ut veritatis at officiis aliquid deserunt, vel laboriosam repellat tenetur. A, magni molestiae. Eum, exercitationem! Officiis.</div>
          <h1 className='physio__name'>Anna Nowak</h1>
          <p className='physio__description'>Fizjoterapeuta</p>
        </div>
        <div className='image-container'>
          <img className='physio__photo' src="/physio4.jpg" alt="" />
          {/* <Image className='physio__photo'
          src='/physio3.jpg'
          width={325}
          height={400}
          /> */}
          <div className='image-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit quidem magnam rem ullam cum, numquam in eos soluta laudantium quam consectetur quibusdam, nihil excepturi explicabo suscipit odio. Repudiandae, facilis laudantium.</div>
          <h1 className='physio__name'>Dariusz Nowakowski</h1>
          <p className='physio__description'>Terapeuta ruchowy</p>
        </div>
      </div> 
    </div>
  
    

  )
}