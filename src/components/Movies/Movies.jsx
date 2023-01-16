import React from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';

function Movies({
  isEmptyInputError,
  moviesData,
  setQuerySearchMovies,
  shortFilmFilter,
  setShortFilmFilter,
}) {
  return (
    <section className="movies">
      <SearchForm
        isEmptyInputError={isEmptyInputError}
        setQuerySearchMovies={setQuerySearchMovies}
        shortFilmFilter={shortFilmFilter}
        setShortFilmFilter={setShortFilmFilter}
      />
      <MoviesCardList moviesData={moviesData} />
    </section>
  );
}

export default Movies;
