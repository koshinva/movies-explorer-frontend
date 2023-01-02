import React from 'react';
import './Header.css';
import { useLocation } from 'react-router-dom';
import NavigationMain from '../NavigationMain/NavigationMain';
import NavigationMovies from '../NavigationMovies/NavigationMovies';
import LogoLink from '../LogoLink/LogoLink';

function Header() {
  const { pathname } = useLocation();
  return (
    <div className={`header ${pathname === '/' && 'header_location_main-page'}`}>
      <div className="header__body">
        <LogoLink />
        {pathname === '/' ? <NavigationMain /> : <NavigationMovies />}
      </div>
    </div>
  );
}

export default Header;
