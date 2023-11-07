import styles from 'app/sass/team.scss';


export default function Team(){
  return(
    <div className='team_wrapper'>
      <h1 className='team__title'>Poznaj nasz zespół</h1>
      <div className='team__profiles'>
        <img src='/team/fizjo_1.jpg' className='profile-img' />
        <h3 className="user-name">Rafał</h3>
        <h5>Fizjoterapeuta</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptatum fugit tempore obcaecati adipisci?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, exercitationem animi enim fuga alias.</p>
      </div>
    </div>

  )
}