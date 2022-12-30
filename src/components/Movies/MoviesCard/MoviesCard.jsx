import React, { useState } from 'react';
import './MoviesCard.css';
import card_icon_liked from '../../../images/card-movies/card-icon-liked.svg';
import card_icon_unliked from '../../../images/card-movies/card-icon-unliked.svg';

function MoviesCard({ name, duration, image, liked }) {
  const [like, setLike] = useState(liked);
  const handleLikeClick = () => {
    setLike((l) => !l);
  };
  return (
    <div className="movies-card">
      <img className="movies-card__image" src={image} alt={name} />
      <div className="movies-card__info">
        <h3 className="movies-card__name">{name}</h3>
        <img
          onClick={handleLikeClick}
          className="movies-card__icon-action"
          src={like ? card_icon_liked : card_icon_unliked}
          alt="Иконка лайка"
        />
      </div>
      <p className="movies-card__duration">{duration}</p>
    </div>
  );
}

export default MoviesCard;
