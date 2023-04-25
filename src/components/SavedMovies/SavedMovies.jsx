import React, { useEffect } from 'react';
import { usePreloader } from '../../hooks/usePreloader';
import SearchForm from '../Movies/SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import { moviesFilter } from '../../utils/moviesFilter';

function SavedMovies({
  savedMovies,
  setSavedMovies,
  isEmptyInputError,
  handleRemoveMovieFromFavorite,
}) {
  const isOpenPreloader = usePreloader();

  const showSavedMovies = (query, filter) => {
    const savedMoviesFromStorage = JSON.parse(localStorage.getItem('saved-movies'));
    setSavedMovies(moviesFilter(savedMoviesFromStorage, query, filter));
  };

  const handleSearchSavedMovies = (query, event) => {
    if (!query) {
      event.target['query-film-title'].focus();
      isEmptyInputError();
      showSavedMovies('', false);
      return;
    }
    const filter = JSON.parse(localStorage.getItem('filter-saved-movies')) ?? false;
    showSavedMovies(query, filter);
  };
  const handleChangeFilter = (filter) => {
    const query = localStorage.getItem('query-saved-movies') ?? '';
    showSavedMovies(query, filter);
  };
  useEffect(() => {
    const savedMoviesFromStorage = JSON.parse(localStorage.getItem('saved-movies'));
    if (!savedMoviesFromStorage) {
      setSavedMovies([]);
      return;
    }
    const query = localStorage.getItem('query-saved-movies') ?? '';
    const filter = JSON.parse(localStorage.getItem('filter-saved-movies')) ?? false;
    setSavedMovies(moviesFilter(savedMoviesFromStorage, query, filter));
  }, []);
  
  return (
    <section className="saved-movies">
      <SearchForm handleSubmit={handleSearchSavedMovies} handleChangeFilter={handleChangeFilter} />
      {isOpenPreloader ? (
        <Preloader />
      ) : (
        <MoviesCardList
          savedMovies={savedMovies}
          handleRemoveMovieFromFavorite={handleRemoveMovieFromFavorite}
        />
      )}
    </section>
  );
}

export default SavedMovies;
