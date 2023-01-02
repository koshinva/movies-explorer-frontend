import React from 'react';
import { Link } from 'react-router-dom';
import LogoLink from '../LogoLink/LogoLink';
import './Register.css';

function Register() {
  return (
    <div className="register">
      <div className="register__body">
        <LogoLink />
        <h2 className="register__welcome-title">Добро пожаловать!</h2>
        <form className="register__form">
          <ul className="register__input-list">
            <li className="register__input-item">
              <label className="register__label" htmlFor="username">
                Имя
              </label>
              <input
                type="text"
                className="register__input"
                id="user-name"
                name="username"
                autocomplete="off"
                value="Валерий"
              />
            </li>
            <li className="register__input-item">
              <label className="register__label" htmlFor="email">
                E-mail
              </label>
              <input
                type="email"
                className="register__input"
                id="email"
                name="email"
                autocomplete="off"
                value="pochta@yandex.ru"
              />
            </li>
            <li className="register__input-item">
              <label className="register__label" htmlFor="password">
                Пароль
              </label>
              <input
                type="password"
                className="register__input register__input_error"
                id="password"
                name="password"
                autocomplete="off"
                value="some-password"
              />
              <span className="register__span-error">Что-то пошло не так...</span>
            </li>
          </ul>
          <button className="register__button" type="submit">
            Зарегистрироваться
          </button>
        </form>
        <p className="register__already-text">
          Уже зарегистрированы?
          <Link to="/signin" className="register__link-login">
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
