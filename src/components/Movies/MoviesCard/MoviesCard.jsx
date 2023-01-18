import React, { useEffect, useState } from 'react';
import './MoviesCard.css';
import card_icon_liked from '../../../images/card-movies/card-icon-liked.svg';
import card_icon_unliked from '../../../images/card-movies/card-icon-unliked.svg';
import { localStorageGetSavedMovies } from '../../../utils/handleLocalStorage';

function MoviesCard({ movie, handleMovieLike }) {
  const [like, setLike] = useState(false);
  const checkLikedCard = () => {
    const savedMovies = localStorageGetSavedMovies();
    setLike(savedMovies.some((m) => m.movieId === movie.id))
  }
  useEffect(() => {
    checkLikedCard();
  }, [])
  const onLikeClick = () => {
    handleMovieLike(movie, like);
    setLike((l) => !l);
  };
  const editDisplayDuration = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return hours ? (minutes ? `${hours}h ${minutes}m` : `${hours}h`) : `${minutes}m`;
  };
  return (
    <div className="movies-card">
      <a
        href={movie.trailerLink}
        target="_blank"
        rel="noreferrer"
        className="movies-card__image-link"
      >
        <img
          className="movies-card__image"
          src={`https://api.nomoreparties.co/${movie.image.url}`}
          alt={movie.nameRU}
        />
      </a>
      <div className="movies-card__info">
        <h3 className="movies-card__name">{movie.nameRU}</h3>
        <button type="button" className="movies-card__button" onClick={onLikeClick}>
          <img
            className="movies-card__icon-action"
            src={like ? card_icon_liked : card_icon_unliked}
            alt="Иконка лайка"
          />
        </button>
      </div>
      <p className="movies-card__duration">{editDisplayDuration(movie.duration)}</p>
    </div>
  );
}

export default MoviesCard;
