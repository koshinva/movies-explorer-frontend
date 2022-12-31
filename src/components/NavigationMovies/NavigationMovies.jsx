import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavigationMovies.css';
import close_icon from '../../images/burger-menu/close-icon.svg';

function NavigationMovies() {
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);
  const handleClickOpenBurgerMenu = () => {
    setOpenBurgerMenu(true);
  };
  const handleClickCloseBurgerMenu = () => {
    setOpenBurgerMenu(false);
  };
  return (
    <div className="navigation-movies">
      <ul className="navigation-movies__list-link">
        <li className="navigation-movies__item-link">
          <Link to="movies" className="navigation-movies__link navigation-movies__link-movies">
            Фильмы
          </Link>
        </li>
        <li className="navigation-movies__item-link">
          <Link to="saved-movies" className="navigation-movies__link navigation-movies__link-saved">
            Сохранённые фильмы
          </Link>
        </li>
        <li className="navigation-movies__item-link">
          <Link to="profile" className="navigation-movies__link navigation-movies__link-account">
            Аккаунт
          </Link>
        </li>
      </ul>
      <button
        type="button"
        className="navigation-movies__burger-button"
        onClick={handleClickOpenBurgerMenu}
      >
        <span></span>
      </button>
      {openBurgerMenu && (
        <div className="navigation-movies__burger-menu">
          <ul className="navigation-movies__burger-menu-list">
            <li className="navigation-movies__burger-menu-item">
              <Link
                to="/"
                className="navigation-movies__burger-menu-link"
                onClick={handleClickCloseBurgerMenu}
              >
                Главная
              </Link>
            </li>
            <li className="navigation-movies__burger-menu-item">
              <Link
                to="movies"
                className="navigation-movies__burger-menu-link"
                onClick={handleClickCloseBurgerMenu}
              >
                Фильмы
              </Link>
            </li>
            <li className="navigation-movies__burger-menu-item">
              <Link
                to="saved-movies"
                className="navigation-movies__burger-menu-link"
                onClick={handleClickCloseBurgerMenu}
              >
                Сохранённые фильмы
              </Link>
            </li>
            <li className="navigation-movies__burger-menu-item">
              <Link
                to="profile"
                className="navigation-movies__burger-menu-link navigation-movies__link-account"
                onClick={handleClickCloseBurgerMenu}
              >
                Аккаунт
              </Link>
            </li>
            <button type="button" className="navigation-movies__burger-menu-close-button">
              <img
                className="navigation-movies__burger-menu-close-icon"
                src={close_icon}
                alt="Иконка закрытия меню навигации"
                onClick={handleClickCloseBurgerMenu}
              />
            </button>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavigationMovies;
