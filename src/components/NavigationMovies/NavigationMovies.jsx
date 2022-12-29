import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationMovies.css';

function NavigationMovies() {
  return (
    <div className="navigation-movies">
      <Link to="movies" className="navigation-movies__link navigation-movies__link-movies">
        Фильмы
      </Link>
      <Link to="saved-movies" className="navigation-movies__link navigation-movies__link-saved">
        Сохранённые фильмы
      </Link>
      <Link to="profile" className="navigation-movies__link navigation-movies__link-account">
        Аккаунт
      </Link>
    </div>
  );
}

export default NavigationMovies;
