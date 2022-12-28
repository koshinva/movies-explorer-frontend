import React, { useState } from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
  const [filterCheckbox, setFilterCheckbox] = useState(false);
  const handleCheckboxClick = () => {
    setFilterCheckbox((check) => !check);
  };
  return (
    <div className="checkbox-filter">
      <form className="checkbox-filter__form">
        <input
          type="checkbox"
          className={`checkbox-filter__checkbox ${
            filterCheckbox && 'checkbox-filter__checkbox_active'
          }`}
          id="checkbox-filter"
          onChange={handleCheckboxClick}
          value={filterCheckbox}
        />
      </form>
      <p className="checkbox-filter__text-filter">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
