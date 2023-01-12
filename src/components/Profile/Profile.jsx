import React, { useEffect, useState } from 'react';
import './Profile.css';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import { useFormWithValidation } from '../../hooks/formValidator';

function Profile({ onSignOut }) {
  const {values, setValues, errors, handleChange, isValid} = useFormWithValidation();
  const {name, email} = useCurrentUser();
  useEffect(() => {
    setValues({...values, username: name, email});
  }, [])
  const dataNotChanges = values.username === name && values.email === email;
  const buttonClass = `profile__button profile__button_type_edit ${
    (!isValid || dataNotChanges) && 'profile__button_inactive'
  }`;
  return (
    <section className="profile">
      <div className="profile__body">
        <h2 className="profile__welcome-text">Привет, Валерий!</h2>
        <form className="profile__form">
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
          <button className={buttonClass} type="submit" disabled={!isValid || dataNotChanges}>
            Редактировать
          </button>
        </form>
        <button onClick={onSignOut} className="profile__button profile__button_type_signout">
          Выйти из аккаунта
        </button>
      </div>
    </section>
  );
}

export default Profile;
