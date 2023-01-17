import React, { useState } from 'react';
import './MoviesCard.css';
import card_icon_liked from '../../../images/card-movies/card-icon-liked.svg';
import card_icon_unliked from '../../../images/card-movies/card-icon-unliked.svg';

function MoviesCard({ nameRU, duration, image: {url} }) {
  const [like, setLike] = useState(false);
  const handleLikeClick = () => {
    setLike((l) => !l);
  };
  const editDisplayDuration = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return hours ? (minutes ? `${hours}h ${minutes}m` : `${hours}h`) : `${minutes}m`;
  }
  return (
    <div className="movies-card">
      <div className="movies-card__image-wrapper">
        <img
          className="movies-card__image"
          src={`https://api.nomoreparties.co/${url}`}
          alt={nameRU}
        />
      </div>
      <div className="movies-card__info">
        <h3 className="movies-card__name">{nameRU}</h3>
        <button type="button" className="movies-card__button" onClick={handleLikeClick}>
          <img
            className="movies-card__icon-action"
            src={like ? card_icon_liked : card_icon_unliked}
            alt="Иконка лайка"
          />
        </button>
      </div>
      <p className="movies-card__duration">{editDisplayDuration(duration)}</p>
    </div>
  );
}

export default MoviesCard;
