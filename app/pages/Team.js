import styles from 'app/sass/team.scss';


export default function Team(){
  return(
    <div className='team_wrapper'>
      <h1 className='team__title'>Poznaj nasz zespół</h1>
      <div className="profiles__section">
        <div className='team__profiles'>
          <img src='/team/1-fizjo.jpg' className='profile-img' />
          <h3 className="user-name">Rafał</h3>
          <h5>Fizjoterapeuta</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptatum fugit tempore obcaecati adipisci?Lorem ipsum. </p>
        </div>
        <div className='team__profiles'>
          <img src='/team/2-fizjo.jpg' className='profile-img' />
          <h3 className="user-name">Marta</h3>
          <h5>Terapeuta ruchowy</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptatum fugit tempore obcaecati adipisci?Lorem ipsum. </p>
        </div>
        <div className='team__profiles'>
          <img src='/team/3-fizjo.jpg' className='profile-img' />
          <h3 className="user-name">Alicja</h3>
          <h5>Fizjoterapeuta</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptatum fugit tempore obcaecati adipisci?Lorem ipsum.</p>
        </div>
      </div>
      
      
    </div>

  )
}

