import React from 'react';
import FormAuth from '../FormAuth/FormAuth';

function Register() {
  return (
    <FormAuth
      welcomeTitle="Добро пожаловать!"
      labelButton="Зарегистрироваться"
      alreadyText="Уже зарегистрированы?"
      linkTo="/signin"
      linkLabel="Войти"
    >
      <ul className="form-auth__input-list">
        <li className="form-auth__input-item">
          <label className="form-auth__label" htmlFor="username">
            Имя
          </label>
          <input
            type="text"
            className="form-auth__input"
            id="user-name"
            name="username"
            autocomplete="off"
            value="Валерий"
          />
        </li>
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
            value="pochta@yandex.ru"
          />
        </li>
        <li className="form-auth__input-item">
          <label className="form-auth__label" htmlFor="password">
            Пароль
          </label>
          <input
            type="password"
            className="form-auth__input form-auth__input_error"
            id="password"
            name="password"
            autocomplete="off"
            value="some-password"
          />
          <span className="form-auth__span-error">Что-то пошло не так...</span>
        </li>
      </ul>
    </FormAuth>
  );
}

export default Register;
