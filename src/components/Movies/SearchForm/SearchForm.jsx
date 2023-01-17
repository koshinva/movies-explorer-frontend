import React, { useEffect, useState } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import logo from '../../../images/movies/search-logo.svg';

function SearchForm({
  isEmptyInputError,
  setQuerySearchMovies,
  shortFilmFilter,
  setShortFilmFilter,
  querySearchMovies,
}) {
  const [filmTitle, setFilmTitle] = useState('');
  const onSubmit = (event) => {
    event.preventDefault();
    if (!filmTitle) {
      isEmptyInputError();
      return;
    }
    setQuerySearchMovies(filmTitle);
  };
  useEffect(() => {
    setFilmTitle(querySearchMovies);
  }, []);
  return (
    <div className="search-form">
      <div className="search-form__body">
        <form className="search-form__form" onSubmit={onSubmit}>
          <input
            type="text"
            className="search-form__input"
            placeholder="Фильм"
            name="film-title"
            value={filmTitle ?? ''}
            onChange={(e) => setFilmTitle(e.target.value)}
            autoComplete="off"
          />
          <button type="submit" className="search-form__button">
            <img className="search-form__logo" src={logo} alt="Логотип поиска" />
          </button>
        </form>
        <FilterCheckbox shortFilmFilter={shortFilmFilter} setShortFilmFilter={setShortFilmFilter} />
      </div>
    </div>
  );
}

export default SearchForm;
