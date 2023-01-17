import React from 'react';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';

function Movies({
  isEmptyInputError,
  moviesData,
  setQuerySearchMovies,
  shortFilmFilter,
  setShortFilmFilter,
  isOpenPreloader,
  querySearchMovies,
}) {
  return (
    <section className="movies">
      <SearchForm
        isEmptyInputError={isEmptyInputError}
        setQuerySearchMovies={setQuerySearchMovies}
        shortFilmFilter={shortFilmFilter}
        setShortFilmFilter={setShortFilmFilter}
        querySearchMovies={querySearchMovies}
      />
      {isOpenPreloader ? <Preloader /> : <MoviesCardList moviesData={moviesData} />}
    </section>
  );
}

export default Movies;
