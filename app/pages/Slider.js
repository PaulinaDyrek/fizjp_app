import styles from '../sass/slider.scss';
import Image from 'next/image';

export default function Slider(){
  return(
    <div className='slider-container'>
      <div className='banner1'>
        <Image className='img'
        src='/slider-1.jpg'
        fill={true}
        sizes="(max-width: 768px) 100vw"
        />
        <div className='text-box text-box1'>
          <h1 className='title'>Czujesz ból i dyskomfort?</h1>
          <span className='horizontal-line'></span>
          <p className='description'>Wiemy jak Ci pomóc! Zapoznaj się z naszą ofertą.</p>
        </div>
      </div>
      <div className='banner2'>
        <Image className='img'
        src='/slider-2.jpg'
        fill={true}
        sizes="(max-width: 768px) 100vw"
        />
        <div className='text-box text-box2'>
          <h1 className='title'>Rozmowa z pacjentem</h1>
          <span className='horizontal-line'></span>
          <p className='description'>W naszej pracy rozmowa z pacjentem to niezwykle istotna kwestia i pierwszy klucz do osiągnięcia spektakularnych efektów terapii. </p>
        </div>
      </div>
      <div className='banner3'>
        <Image className='img'
        src='/slideer_3.jpg'
        fill={true}
        sizes="(max-width: 768px) 100vw"
        />
        <div className='text-box text-box3'>
          <h1 className='title'>Idywidualnie dobrana terapia</h1>
          <span className='horizontal-line'></span>
          <p className='description'>Po konsultacji niezwykle ważny jest dobór skutecznej metody lecznia.</p>
        </div>
      </div>
      <div className='banner4'>
        <Image className='img'
        src='/slider-4.jpg'
        fill={true}
        sizes="(max-width: 768px) 100vw"
        />
        <div className='text-box text-box4'>
          <h1 className='title'>Terapia właściwa</h1>
          <span className='horizontal-line'></span>
          <p className='description'>Naszym celem jest przywrócenie sprawności fizycznej oraz psychicznej i szybki powrót do funkcjonowania w życiu codziennym.</p>
        </div>
      </div>
    </div>

  )
}