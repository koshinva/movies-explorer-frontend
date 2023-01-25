import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import '../../Movies/MoviesCardList/MoviesCardList.css';

function MoviesCardList({ savedMovies, handleRemoveMovieFromFavorite }) {
  return (
    <div className="movies-list movies-saved-list">
      <div className="movies-list__body">
        {savedMovies.length === 0 ? (
          <h3 className="movies-list__title-not-movies">Сохранённых фильмов нет</h3>
        ) : (
          <ul className="movies-list__list">
            {savedMovies.map((movie) => (
              <li key={movie.movieId} className="movies-list__item">
                <MoviesCard
                  handleRemoveMovieFromFavorite={handleRemoveMovieFromFavorite}
                  movie={movie}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default MoviesCardList;
