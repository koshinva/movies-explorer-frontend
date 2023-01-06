import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import { moviesData } from '../../../utils/moviesData';

function MoviesCardList() {
  return (
    <div className="movies-list">
      <div className="movies-list__body">
        {moviesData.length === 0 ? (
          <h3 className="movies-list__title-not-movies">Фильмы не найдены</h3>
        ) : (
          <>
            <ul className="movies-list__list">
              {moviesData.map((movie, i) => (
                <li key={i} className="movies-list__item movies-list__item_location_movies">
                  <MoviesCard {...movie} />
                </li>
              ))}
            </ul>
            <button className="movies-list__button-more">Ещё</button>
          </>
        )}
      </div>
    </div>
  );
}

export default MoviesCardList;
