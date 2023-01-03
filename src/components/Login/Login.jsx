import React from 'react'
import FormAuth from '../FormAuth/FormAuth'

function Login() {
  return (
    <FormAuth
      welcomeTitle="Рады видеть!"
      labelButton="Войти"
      alreadyText="Ещё не зарегистрированы?"
      linkTo="/signup"
      linkLabel="Регистрация"
    >
      <ul className="form-auth__input-list">
        <li className="form-auth__input-item">
          <label className="form-auth__label" htmlFor="email">
            E-mail
          </label>
          <input
            type="email"
            className="form-auth__input"
            id="email"
            name="email"
            autocomplete="off"
            required
            value="pochta@yandex.ru"
          />
        </li>
        <li className="form-auth__input-item">
          <label className="form-auth__label" htmlFor="password">
            Пароль
          </label>
          <input
            type="password"
            className="form-auth__input"
            id="password"
            name="password"
            required
            autocomplete="off"
          />
        </li>
      </ul>
    </FormAuth>
  );
}

export default Login