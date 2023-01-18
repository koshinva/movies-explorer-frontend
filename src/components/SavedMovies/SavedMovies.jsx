import React, { useState } from 'react';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

function SavedMovies({ savedMovies, isEmptyInputError, handleRemoveMovieFromFavorite }) {
  const [querySearchSavedMovies, setQuerySearchSavedMovies] = useState('');
  const [filterShortSavedFilm, setFilterShortSavedFilm] = useState(false);
  return (
    <section className="saved-movies">
      <SearchForm
        isEmptyInputError={isEmptyInputError}
        querySearchMovies={querySearchSavedMovies}
        setQuerySearchMovies={setQuerySearchSavedMovies}
        shortFilmFilter={filterShortSavedFilm}
        setShortFilmFilter={setFilterShortSavedFilm}
      />
      <MoviesCardList
        savedMovies={savedMovies}
        querySearchSavedMovies={querySearchSavedMovies}
        filterShortSavedFilm={filterShortSavedFilm}
        handleRemoveMovieFromFavorite={handleRemoveMovieFromFavorite}
      />
    </section>
  );
}

export default SavedMovies;
