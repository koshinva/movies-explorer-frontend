import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({shortFilmFilter, setShortFilmFilter}) {
  const handleCheckboxClick = () => {
    setShortFilmFilter((check) => !check);
  };
  return (
    <div className="checkbox-filter">
      <form className="checkbox-filter__form">
        <input
          type="checkbox"
          className={`checkbox-filter__checkbox ${
            shortFilmFilter && 'checkbox-filter__checkbox_active'
          }`}
          id="checkbox-filter"
          onChange={handleCheckboxClick}
          value={shortFilmFilter}
        />
      </form>
      <p className="checkbox-filter__text-filter">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
