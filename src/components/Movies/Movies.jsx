import React, { useEffect, useState } from 'react';
import { usePreloader } from '../../hooks/usePreloader';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import * as moviesApi from '../../utils/api/MoviesApi';
import { moviesFilter } from '../../utils/moviesFilter';

function Movies({ handleMovieLike, setIsOpenPreloader, handleToolTipOpen, isEmptyInputError }) {
  const isOpenPreloader = usePreloader();
  const [moviesData, setMoviesData] = useState([]);

  const getMovies = (query, filter) => {
    setIsOpenPreloader(true);
    return moviesApi
      .getMoviesInfo()
      .then((res) => {
        return moviesFilter(res, query, filter);
      })
      .then((result) => {
        setMoviesData(result);
        localStorage.setItem('movies', JSON.stringify(result));
      })
      .catch((error) => {
        handleToolTipOpen(
          'fail',
          'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
        );
      })
      .finally(() => {
        setIsOpenPreloader(false);
      });
  };
  const handleSearchMovies = (query, event) => {
    const filter = JSON.parse(localStorage.getItem('filter-movies')) ?? false;
    if (!query) {
      event.target['query-film-title'].focus();
      isEmptyInputError();
      return;
    }
    getMovies(query, filter);
  };
  const handleChangeFilter = (filter) => {
    const query = localStorage.getItem('query-movies') ?? '';
    getMovies(query, filter);
  };

  useEffect(() => {
    const moviesFromStorage = JSON.parse(localStorage.getItem('movies'));
    if (!moviesFromStorage) {
      getMovies('', false);
    } else {
      setMoviesData(moviesFromStorage);
    }
  }, []);

  return (
    <section className="movies">
      <SearchForm handleSubmit={handleSearchMovies} handleChangeFilter={handleChangeFilter} />
      {isOpenPreloader ? (
        <Preloader />
      ) : (
        <MoviesCardList moviesData={moviesData} handleMovieLike={handleMovieLike} />
      )}
    </section>
  );
}

export default Movies;
