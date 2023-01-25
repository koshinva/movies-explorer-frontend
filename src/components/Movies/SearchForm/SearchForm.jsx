import React, { useEffect, useState } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import logo from '../../../images/movies/search-logo.svg';
import { useLocation } from 'react-router-dom';

function SearchForm({ handleSubmit, handleChangeFilter }) {
  const { pathname } = useLocation();
  const localStorageName = pathname === '/movies' ? 'query-movies' : 'query-saved-movies';
  const [queryFilmTitle, setQueryFilmTitle] = useState('');
  const onSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem(localStorageName, queryFilmTitle);
    handleSubmit(queryFilmTitle, event);
  };
  useEffect(() => {
    setQueryFilmTitle(localStorage.getItem(localStorageName) ?? '');
  }, []);
  return (
    <div className="search-form">
      <div className="search-form__body">
        <form className="search-form__form" onSubmit={onSubmit}>
          <input
            type="text"
            className="search-form__input"
            placeholder="Фильм"
            name="query-film-title"
            value={queryFilmTitle ?? ''}
            onChange={(e) => setQueryFilmTitle(e.target.value)}
            autoComplete="off"
          />
          <button type="submit" className="search-form__button">
            <img className="search-form__logo" src={logo} alt="Логотип поиска" />
          </button>
        </form>
        <FilterCheckbox handleChangeFilter={handleChangeFilter} />
      </div>
    </div>
  );
}

export default SearchForm;
