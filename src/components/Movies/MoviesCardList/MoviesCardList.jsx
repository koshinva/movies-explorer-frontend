import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import { moviesData } from '../../../utils/moviesData';

function MoviesCardList() {
  return (
    <div className="movies-list">
      <div className="movies-list__body">
        <ul className="movies-list__list">
          {moviesData.map((d, i) => (
            <li key={i} className="movies-list__item">
              <MoviesCard {...d} />
            </li>
          ))}
        </ul>
        <button className="movies-list__button-more">Ещё</button>
      </div>
    </div>
  );
}

export default MoviesCardList;
