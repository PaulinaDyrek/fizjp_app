import styles from 'app/sass/offer.scss';

export default function Offer(){
  return(
    <div className='work'>
    <h1>Usługi jakie świadczymy</h1>
      <div className='main'>
        <div className='divider'>
          <h4>Rehabilitacja</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quasi quaerat quis natus quod. Quisquam, corrupti et, temporibus deleniti natus sequi non repellendus facilis architecto similique commodi ratione? Ipsa, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quasi quaerat quis natus quod. Quisquam, corrupti et, temporibus deleniti natus sequi non repellendus facilis architecto similique commodi ratione? Ipsa, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quasi quaerat quis natus quod. Quisquam, corrupti et, temporibus deleniti natus sequi non repellendus facilis architecto similique commodi ratione? Ipsa, quod.</p>
        </div>
        <div className='circle'>
          <img src='/offer_1.png' />
        </div> 
      </div>
      {/* <div className='main'>
        <div className='divider'>diveder</div>
        <div className='circle'>circle2</div> 
      </div>
      <div className='main'>
        <div className='divider'>diveder</div>
        <div className='circle'>circle3</div> 
      </div> */}
        
    </div>
    
  )
}
