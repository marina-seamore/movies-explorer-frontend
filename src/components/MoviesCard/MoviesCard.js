import './MoviesCard.css';
import img from '../../images/film-filler.jpg'

function MoviesCard({state}) {

    const name = 'В погоне за Бенкси';
    const time = '27';
    const buttonText = (`${state === 'save' ? 'Сохранить' : ''}`);
    const buttonClassName = (`card__button card__button_${state}`)

    return(
        <div className='card'>
            <div className='card__info'>
              <div className='card__name'>{name}</div>
              <div className='card__time'>{time} минут</div>
            </div>
            <img className='card__img' src={img} alt='film' />
            <button className={buttonClassName}>{buttonText}</button>
          </div>
    )
};
export default MoviesCard;
