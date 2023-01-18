import React from 'react';
import '../../Movies/MoviesCard/MoviesCard.css';
import card_icon_delete from '../../../images/card-saved-movies/card-icon-dislike.svg';
import { editDisplayDuration } from '../../../utils/editDisplayDuration';

function MoviesCard({movie}) {
  return (
    <div className="movies-card">
      <a
        href={movie.trailerLink}
        target="_blank"
        rel="noreferrer"
        className="movies-card__image-link"
      >
        <img className="movies-card__image" src={movie.image} alt={movie.nameRU} />
      </a>
      <div className="movies-card__info">
        <h3 className="movies-card__name">{movie.nameRU}</h3>
        <button type="button" className="movies-card__button movies-card__button_type_delete">
          <img
            className="movies-card__icon-action"
            src={card_icon_delete}
            alt="Иконка удаления из сохраненных"
          />
        </button>
      </div>
      <p className="movies-card__duration">{editDisplayDuration(movie.duration)}</p>
    </div>
  );
}

export default MoviesCard;
