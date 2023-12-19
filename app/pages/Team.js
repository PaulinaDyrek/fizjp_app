import styles from 'app/sass/team.scss';


export default function Team(){
  return(
    <div className='team'>
      <h1 className='team__title'><span className='team__title-little'>Poznaj</span> nasz zespół</h1>
      <div className="team__section">
        <div className='team__profiles'>
          <img src='/team/1-fizjo.jpg' className='team__img' />
          <h3 className='team__name'>Rafał</h3>
          <h5 className='team__profession'>Fizjoterapeuta</h5>
          <p className='team__about'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptatum fugit tempore obcaecati adipisci?Lorem ipsum. </p>
        </div>
        <div className='team__profiles'>
          <img src='/team/2-fizjo.jpg' className='team__img' />
          <h3 className='team__name'>Marta</h3>
          <h5 className='team__profession'>Terapeuta ruchowy</h5>
          <p className='team__about'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptatum fugit tempore obcaecati adipisci?Lorem ipsum. </p>
        </div>
        <div className='team__profiles'>
          <img src='/team/3-fizjo.jpg' className='team__img' />
          <h3 className='team__name'>Alicja</h3>
          <h5 className='team__profession'>Fizjoterapeuta</h5>
          <p className='team__about'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptatum fugit tempore obcaecati adipisci?Lorem ipsum.</p>
        </div>
      </div>
    </div>
  )
}

