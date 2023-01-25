import React from 'react';
import './Header.css';
import { useLocation } from 'react-router-dom';
import NavigationMain from '../NavigationMain/NavigationMain';
import NavigationMovies from '../NavigationMovies/NavigationMovies';
import LogoLink from '../LogoLink/LogoLink';
import { useLoggedIn } from '../../hooks/useLoggedIn';

function Header() {
  const loggedIn = useLoggedIn();
  const { pathname } = useLocation();
  return (
    <header className={`header ${pathname === '/' ? 'header_location_main-page' : ''}`}>
      <div className="header__body">
        <LogoLink />
        {!loggedIn ? <NavigationMain /> : <NavigationMovies />}
      </div>
    </header>
  );
}

export default Header;
