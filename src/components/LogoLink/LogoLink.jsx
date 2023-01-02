import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/header/header-logo.svg';
import './LogoLink.css';

function LogoLink() {
  return (
    <Link to="/" className="logo-link__link">
      <img src={logo} alt="Логотип проекта" className="logo-link__logo" />
    </Link>
  );
}

export default LogoLink;
