import React from 'react';
import './Header.css';
import logo from '../../images/header/header-logo.svg';

function Header() {
  return (
    <div className="header">
      <div className="header__body">
        <img src={logo} alt="Логотип заголовка" className="header__logo" />
        <div className="header__buttons">
          <button type="button" className="header__button header__button-register">
            Регистрация
          </button>
          <button type="button" className="header__button header__button-login">
            Войти
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
