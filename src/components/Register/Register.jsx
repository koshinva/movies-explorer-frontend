import React from 'react';
import { useFormWithValidation } from '../../hooks/formValidator';
import FormAuth from '../FormAuth/FormAuth';
import './Register.css';

function Register() {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  return (
    <section className="register">
      <FormAuth
        welcomeTitle="Добро пожаловать!"
        labelButton="Зарегистрироваться"
        alreadyText="Уже зарегистрированы?"
        linkTo="/signin"
        linkLabel="Войти"
        isValid={isValid}
      >
        <ul className="form-auth__input-list">
          <li className="form-auth__input-item">
            <label className="form-auth__label" htmlFor="username">
              Имя
            </label>
            <input
              type="text"
              className={`form-auth__input ${errors.username && 'form-auth__input_error'}`}
              id="user-name"
              name="username"
              autoComplete="off"
              required
              minLength="2"
              maxLength="30"
              pattern="^[a-zA-Z\- \u0400-\u04FF]*$"
              onChange={handleChange}
              value={values.username ?? ''}
            />
            {errors.username && <span className="form-auth__span-error">{errors.username}</span>}
          </li>
          <li className="form-auth__input-item">
            <label className="form-auth__label" htmlFor="email">
              E-mail
            </label>
            <input
              type="text"
              className={`form-auth__input ${errors.email && 'form-auth__input_error'}`}
              id="email"
              name="email"
              autoComplete="off"
              required
              pattern="^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$"
              onChange={handleChange}
              value={values.email ?? ''}
            />
            {errors.email && <span className="form-auth__span-error">{errors.email}</span>}
          </li>
          <li className="form-auth__input-item">
            <label className="form-auth__label" htmlFor="password">
              Пароль
            </label>
            <input
              type="password"
              className={`form-auth__input ${errors.password && 'form-auth__input_error'}`}
              id="password"
              name="password"
              autoComplete="off"
              required
              onChange={handleChange}
              value={values.password ?? ''}
            />
            {errors.password && <span className="form-auth__span-error">{errors.password}</span>}
          </li>
        </ul>
      </FormAuth>
    </section>
  );
}

export default Register;
