import React from 'react';
import '../../Movies/MoviesCard/MoviesCard.css';
import card_icon_dislike from '../../../images/card-saved-movies/card-icon-dislike.svg';

function MoviesCard({ name, duration, image }) {
  return (
    <div className="movies-card">
      <img className="movies-card__image" src={image} alt={name} />
      <div className="movies-card__info">
        <h3 className="movies-card__name">{name}</h3>
        <img
          className="movies-card__icon-action movies-card__icon-action_type_dislike"
          src={card_icon_dislike}
          alt="Иконка удаления из сохраненных"
        />
      </div>
      <p className="movies-card__duration">{duration}</p>
    </div>
  );
}

export default MoviesCard;
