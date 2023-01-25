import React, { useEffect, useState } from 'react';
import {
  AMOUNT_ADD_DESKTOP,
  AMOUNT_ADD_LARGE_DESKTOP,
  AMOUNT_ADD_LARGE_MOBILE,
  AMOUNT_ADD_MOBILE,
  AMOUNT_ADD_TABLET,
  DESKTOP_WIDTH,
  LARGE_DESKTOP_WIDTH,
  MOBILE_WIDTH,
  QUANTITY_LOAD_DESKTOP,
  QUANTITY_LOAD_LARGE_DESKTOP,
  QUANTITY_LOAD_MOBILE,
  QUANTITY_LOAD_TABLET,
  TABLET_WIDTH,
} from '../../../utils/constants';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ moviesData, handleMovieLike }) {
  const [quantityLoad, setQuantityLoad] = useState(0);
  const visibleMovies = moviesData.slice(0, quantityLoad);

  function checkQuantityDisplayItems() {
    setTimeout(() => {
      const sizeWindow = document.documentElement.clientWidth;
      if (sizeWindow >= LARGE_DESKTOP_WIDTH) {
        setQuantityLoad(QUANTITY_LOAD_LARGE_DESKTOP);
      } else if (sizeWindow >= DESKTOP_WIDTH && sizeWindow < LARGE_DESKTOP_WIDTH) {
        setQuantityLoad(QUANTITY_LOAD_DESKTOP);
      } else if (sizeWindow >= TABLET_WIDTH && sizeWindow < DESKTOP_WIDTH) {
        setQuantityLoad(QUANTITY_LOAD_DESKTOP);
      } else if (sizeWindow >= MOBILE_WIDTH && sizeWindow < TABLET_WIDTH) {
        setQuantityLoad(QUANTITY_LOAD_TABLET);
      } else {
        setQuantityLoad(QUANTITY_LOAD_MOBILE);
      }
    }, 66);
  }
  const checkButtonMoreActive = () => {
    if (moviesData.length === visibleMovies.length) {
      return false;
    }
    return true;
  };
  useEffect(() => {
    window.addEventListener('resize', checkQuantityDisplayItems.bind(this));
    checkQuantityDisplayItems();
    return window.removeEventListener('resize', checkQuantityDisplayItems.bind(this));
  }, []);

  const handleButtonMore = () => {
    const sizeWindow = document.documentElement.clientWidth;
    if (sizeWindow >= LARGE_DESKTOP_WIDTH) {
      setQuantityLoad((l) => l + AMOUNT_ADD_LARGE_DESKTOP);
    } else if (sizeWindow >= DESKTOP_WIDTH && sizeWindow < LARGE_DESKTOP_WIDTH) {
      setQuantityLoad((l) => l + AMOUNT_ADD_DESKTOP);
    } else if (sizeWindow >= TABLET_WIDTH && sizeWindow < DESKTOP_WIDTH) {
      setQuantityLoad((l) => l + AMOUNT_ADD_TABLET);
    } else if (sizeWindow >= MOBILE_WIDTH && sizeWindow < TABLET_WIDTH) {
      setQuantityLoad((l) => l + AMOUNT_ADD_LARGE_MOBILE);
    } else {
      setQuantityLoad((l) => l + AMOUNT_ADD_MOBILE);
    }
  };

  return (
    <div className="movies-list">
      <div className="movies-list__body">
        {moviesData.length === 0 ? (
          <h3 className="movies-list__title-not-movies">Ничего не найдено</h3>
        ) : (
          <>
            <ul className="movies-list__list">
              {visibleMovies.map((movie) => (
                <li key={movie.id} className="movies-list__item movies-list__item_location_movies">
                  <MoviesCard movie={movie} handleMovieLike={handleMovieLike} />
                </li>
              ))}
            </ul>
            <button
              onClick={handleButtonMore}
              className={`movies-list__button-more ${
                !checkButtonMoreActive() ? 'movies-list__button-more_inactive' : ''
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
