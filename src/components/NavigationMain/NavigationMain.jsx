import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationMain.css';

function Navigation() {
  return (
    <div className="navigation-main">
      <Link to="signup" className="navigation-main__link navigation-main__link-register">
        Регистрация
      </Link>
      <Link to="signin" className="navigation-main__link navigation-main__link-login">
        Войти
      </Link>
    </div>
  );
}

export default Navigation;
