import React from 'react';
import { usePreloader } from '../../hooks/usePreloader';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';

function Movies({
  isEmptyInputError,
  moviesData,
  setQuerySearchMovies,
  shortFilmFilter,
  setShortFilmFilter,
  querySearchMovies,
  handleMovieLike
}) {
  const isOpenPreloader = usePreloader();
  return (
    <section className="movies">
      <SearchForm
        isEmptyInputError={isEmptyInputError}
        setQuerySearchMovies={setQuerySearchMovies}
        shortFilmFilter={shortFilmFilter}
        setShortFilmFilter={setShortFilmFilter}
        querySearchMovies={querySearchMovies}
      />
      {isOpenPreloader ? (
        <Preloader />
      ) : (
        <MoviesCardList moviesData={moviesData} handleMovieLike={handleMovieLike} />
      )}
    </section>
  );
}

export default Movies;
