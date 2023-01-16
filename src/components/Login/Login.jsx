import React from 'react';
import { useFormWithValidation } from '../../hooks/formValidator';
import FormAuth from '../FormAuth/FormAuth';
import Preloader from '../Preloader/Preloader';
import './Login.css';

function Login({ onLogin, errorLogin, isOpenPreloader }) {
  const { handleChange, errors, isValid, values } = useFormWithValidation();
  const onSubmit = () => {
    onLogin(values.email, values.password);
  };
  if (isOpenPreloader) {
    return <Preloader />;
  }
  return (
    <section className="login">
      <FormAuth
        welcomeTitle="Рады видеть!"
        labelButton="Войти"
        alreadyText="Ещё не зарегистрированы?"
        linkTo="/signup"
        linkLabel="Регистрация"
        isValid={isValid}
        onSubmit={onSubmit}
        errorMessage={errorLogin}
      >
        <ul className="form-auth__input-list">
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

export default Login;
