import React from 'react';
import '../../Movies/MoviesCard/MoviesCard.css';
import card_icon_delete from '../../../images/card-saved-movies/card-icon-dislike.svg';

function MoviesCard({ name, duration, image }) {
  return (
    <div className="movies-card">
      <img className="movies-card__image" src={image} alt={name} />
      <div className="movies-card__info">
        <h3 className="movies-card__name">{name}</h3>
        <button type="button" className="movies-card__button movies-card__button_type_delete">
          <img
            className="movies-card__icon-action"
            src={card_icon_delete}
            alt="Иконка удаления из сохраненных"
          />
        </button>
      </div>
      <p className="movies-card__duration">{duration}</p>
    </div>
  );
}

export default MoviesCard;
