import React from 'react';
import './Header.css';
import logo from '../../images/header/header-logo.svg';
import { Link, useLocation } from 'react-router-dom';
import NavigationMain from '../NavigationMain/NavigationMain';
import NavigationMovies from '../NavigationMovies/NavigationMovies';

function Header() {
  const { pathname } = useLocation();
  return (
    <div className={`header ${pathname === '/' && 'header_location_main-page'}`}>
      <div className="header__body">
        <Link to="/" className="header__link-to-main">
          <img src={logo} alt="Логотип заголовка" className="header__logo" />
        </Link>
        {pathname === '/' ? <NavigationMain /> : <NavigationMovies />}
      </div>
    </div>
  );
}

export default Header;
