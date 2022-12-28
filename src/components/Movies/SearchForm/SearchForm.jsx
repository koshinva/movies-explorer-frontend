import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import logo from '../../../images/movies/search-logo.svg';

function SearchForm() {
  return (
    <div className="search-form">
      <div className="search-form__body">
        <form className="search-form__form">
          <input type="text" className="search-form__input" placeholder="Фильм" />
          <button type="submit" className="search-form__button">
            <img className="search-form__logo" src={logo} alt="Логотип поиска" />
          </button>
        </form>
        <FilterCheckbox />
      </div>
    </div>
  );
}

export default SearchForm;
