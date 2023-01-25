import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './FilterCheckbox.css';

function FilterCheckbox({ handleChangeFilter }) {
  const { pathname } = useLocation();
  const localStorageName = pathname === '/movies' ? 'filter-movies' : 'filter-saved-movies';
  const [filter, setFilter] = useState(false);
  const handleChange = () => {
    setFilter(!filter);
    localStorage.setItem(localStorageName, JSON.stringify(!filter));
    handleChangeFilter(!filter);
  };
  useEffect(() => {
    setFilter(JSON.parse(localStorage.getItem(localStorageName)) ?? false);
  }, []);
  return (
    <div className="checkbox-filter">
      <form className="checkbox-filter__form">
        <input
          type="checkbox"
          className={`checkbox-filter__checkbox ${filter && 'checkbox-filter__checkbox_active'}`}
          id="checkbox-filter"
          onChange={handleChange}
          value={filter}
        />
      </form>
      <p className="checkbox-filter__text-filter">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
