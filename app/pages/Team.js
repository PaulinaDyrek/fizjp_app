import styles from 'app/sass/team.scss';

export default function Team() {
  return (
    <div className="team">
      <h1 className="team__title">
        <span className="team__title-little">Poznaj</span> nasz zespół
      </h1>
      <div className="team__section">
        <div className="team__profiles">
          <img src="/team/1-fizjo.jpg" className="team__img" />
          <h3 className="team__name">Rafał</h3>
          <h5 className="team__profession">Fizjoterapeuta</h5>
          <p className="team__about">
            Indywidualne i empatyczne podejcie do pacjenta. W swojej pracy
            skupiam sie nie tylko na bólu a także poprawi kondycji zdrowa całego
            ciała.
          </p>
        </div>
        <div className="team__profiles">
          <img src="/team/2-fizjo.jpg" className="team__img" />
          <h3 className="team__name">Marta</h3>
          <h5 className="team__profession">Terapeuta ruchowy</h5>
          <p className="team__about">
            W swojej pracy opieram się na rzetelnej diagnostyce pacjenta. w
            trakcie współpracy wykorzystuje różne metody terapeutyczne
            diagnozując i dopasowując terapie do potrzeb pacjenta.
          </p>
        </div>
        <div className="team__profiles">
          <img src="/team/3-fizjo.jpg" className="team__img" />
          <h3 className="team__name">Alicja</h3>
          <h5 className="team__profession">Fizjoterapeuta</h5>
          <p className="team__about">
            Pomoge przywrócić Ci maksymalną sprawność oraz poprawić jakość
            funkcjonowania w życiu codziennym. Zajmuje się diagnostyką i
            leczeniem nieinwazyjnym schorzeń i problemów występujących w obrębie
            układu ruchu.
          </p>
        </div>
      </div>
    </div>
  );
}
