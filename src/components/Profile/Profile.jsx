import React, { useEffect } from 'react';
import './Profile.css';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import { useFormWithValidation } from '../../hooks/formValidator';
import Preloader from '../Preloader/Preloader';

function Profile({ onSignOut, onUpdateInfoUser, isOpenPreloader, errorProfile }) {
  const { name, email } = useCurrentUser();

  const { values, setValues, errors, handleChange, isValid, resetForm } = useFormWithValidation();

  useEffect(() => {
    setValues({ ...values, username: name, email });
  }, [name, email]);

  const dataNotChanges = values.username === name && values.email === email;
  const buttonClass = `profile__button profile__button_type_edit ${
    (!isValid || dataNotChanges || errorProfile) && 'profile__button_inactive'
  }`;

  const onSubmit = (event) => {
    event.preventDefault();
    onUpdateInfoUser(values.username, values.email).finally(() => {
      resetForm();
    });
  };
  if (isOpenPreloader) {
    return <Preloader />;
  }
  return (
    <section className="profile">
      <div className="profile__body">
        <h2 className="profile__welcome-text">Привет, {name}!</h2>
        <form className="profile__form" onSubmit={onSubmit}>
          <ul className="profile__input-list">
            <li className="profile__input-item">
              <label htmlFor="username" className="profile__label">
                Имя
              </label>
              <input
                type="text"
                className="profile__input"
                id="user-name"
                name="username"
                autoComplete="off"
                required
                minLength="2"
                maxLength="30"
                pattern="^[a-zA-Z\- \u0400-\u04FF]*$"
                value={values.username ?? name}
                onChange={handleChange}
              />
              {errors.username && <span className="profile__input-error">{errors.username}</span>}
            </li>
            <li className="profile__input-item">
              <label htmlFor="email" className="profile__label">
                E-mail
              </label>
              <input
                type="text"
                className="profile__input"
                id="email"
                name="email"
                autoComplete="off"
                required
                pattern="^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$"
                value={values.email ?? email}
                onChange={handleChange}
              />
              {errors.email && <span className="profile__input-error">{errors.email}</span>}
            </li>
          </ul>
          {errorProfile && <span className="profile__error-above-button">{errorProfile}</span>}
          <button
            className={buttonClass}
            type="submit"
            disabled={!isValid || dataNotChanges || errorProfile}
          >
            Редактировать
          </button>
        </form>
        <button
          onClick={onSignOut}
          className="profile__button profile__button_type_signout"
          type="button"
        >
          Выйти из аккаунта
        </button>
      </div>
    </section>
  );
}

export default Profile;
