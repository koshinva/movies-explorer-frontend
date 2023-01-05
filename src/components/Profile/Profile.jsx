import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <section className="profile">
      <div className="profile__body">
        <h2 className="profile__welcome-text">Привет, Валерий!</h2>
        <div className="profile__info">
          <div className="profile__row">
            <p className="profile__value">Имя</p>
            <p className="profile__value">Валерий</p>
          </div>
          <div className="profile__row">
            <p className="profile__value">E-mail</p>
            <p className="profile__value">pochta@yandex.ru</p>
          </div>
        </div>
        <div className="profile__actions">
          <button className="profile__button profile__button_type_edit">Редактировать</button>
          <button className="profile__button profile__button_type_signout">
            Выйти из аккаунта
          </button>
        </div>
      </div>
    </section>
  );
}

export default Profile;
