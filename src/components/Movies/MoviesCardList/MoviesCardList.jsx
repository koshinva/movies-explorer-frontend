import React, { useEffect } from 'react';
import { useDisplayItems } from '../../../hooks/useDisplayItems';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ moviesData, handleMovieLike }) {
  const {
    checkDisplayWidth,
    displayWidth,
    checkQuantityDisplayItems,
    buttonMoreActive,
    checkButtonMoreActive,
    handleButtonMore,
    quantityDisplayItems: { quantityLoad },
  } = useDisplayItems();

  useEffect(() => {
    window.addEventListener('resize', checkDisplayWidth);
    return window.removeEventListener('resize', checkDisplayWidth);
  }, []);

  useEffect(() => {
    checkButtonMoreActive(moviesData);
  }, [quantityLoad]);

  useEffect(() => {
    checkQuantityDisplayItems();
  }, [displayWidth]);

  return (
    <div className="movies-list">
      <div className="movies-list__body">
        {moviesData.length === 0 ? (
          <h3 className="movies-list__title-not-movies">Ничего не найдено</h3>
        ) : (
          <>
            <ul className="movies-list__list">
              {moviesData.slice(0, quantityLoad).map((movie) => (
                <li key={movie.id} className="movies-list__item movies-list__item_location_movies">
                  <MoviesCard movie={movie} handleMovieLike={handleMovieLike} />
                </li>
              ))}
            </ul>
            <button
              onClick={handleButtonMore}
              className={`movies-list__button-more ${
                !buttonMoreActive ? 'movies-list__button-more_inactive' : ''
              }`}
            >
              Ещё
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default MoviesCardList;
