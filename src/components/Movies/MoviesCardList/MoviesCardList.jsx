import React, { useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ moviesData, handleMovieLike }) {

  const [quantityLoad, setQuantityLoad] = useState(0);
  const visibleMovies = moviesData.slice(0, quantityLoad);

  function checkQuantityDisplayItems() {
    setTimeout(() => {
      const sizeWindow = document.documentElement.clientWidth;
      if (sizeWindow > 1569) {
        setQuantityLoad(15);
      } else if (sizeWindow > 1279 && sizeWindow < 1570) {
        setQuantityLoad(12);
      } else if (sizeWindow > 929 && sizeWindow < 1280) {
        setQuantityLoad(12);
      } else if (sizeWindow > 589 && sizeWindow < 930) {
        setQuantityLoad(8);
      } else {
        setQuantityLoad(5);
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
    if (sizeWindow > 1569) {
      setQuantityLoad((l) => l + 5);
    } else if (sizeWindow > 1279 && sizeWindow < 1570) {
      setQuantityLoad((l) => l + 4);
    } else if (sizeWindow > 929 && sizeWindow < 1280) {
      setQuantityLoad((l) => l + 3);
    } else if (sizeWindow > 589 && sizeWindow < 930) {
      setQuantityLoad((l) => l + 2);
    } else {
      setQuantityLoad((l) => l + 1);
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
