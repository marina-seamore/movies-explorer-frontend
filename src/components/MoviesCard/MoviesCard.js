import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({ card, onCardSave, onCardRemove, isSaved }) {
  const page = useLocation().pathname;
  const name = card.nameRU;
  const time = card.duration;
  const img = (`${page === '/movies' ? `https://api.nomoreparties.co/${card.image.url}` : card.image}`)
  const link = card.trailerLink;
  const buttonText = (`${page === '/saved-movies' || isSaved(card) ? '' : 'Сохранить'}`);
  const buttonClassName = (`card__button ${page === '/movies' ? `card__button_save${isSaved(card) ? 'd' : ''}` : 'card__button_remove'}`);

  function handleSave() {
    onCardSave(card);
  };

  function handleRemove() {
    onCardRemove(card);
  }

  function handleBtnClick() {
    if (page === '/movies' && !isSaved(card)) {
      handleSave();
    } else {
      handleRemove();
    }
  }

  return (
    <div className='card'>
      <div className='card__info'>
        <div className='card__name'>{name}</div>
        <div className='card__time'>{time} минут</div>
      </div>
      <a className='card__trailer' href={link} target='_blank' rel='noreferrer'>
        <img className='card__img' src={img} alt='film' />
      </a>
      <button className={buttonClassName} onClick={handleBtnClick}>{buttonText}</button>
    </div>
  )
};
export default MoviesCard;
