import React from 'react';
import { moviesData } from '../../../utils/moviesData';
import MoviesCard from '../MoviesCard/MoviesCard';
import '../../Movies/MoviesCardList/MoviesCardList.css';
import './MoviesCardList.css';

function MoviesCardList() {
  return (
    <div className="movies-list movies-saved-list">
      <div className="movies-list__body">
        {moviesData.length === 0 ? (
          <h3 className="movies-list__title-not-movies">Сохранённых фильмов нет</h3>
        ) : (
          <ul className="movies-list__list">
            {moviesData
              .filter((movie) => movie.liked)
              .map((movie, i) => (
                <li key={i} className="movies-list__item">
                  <MoviesCard {...movie} />
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default MoviesCardList;
