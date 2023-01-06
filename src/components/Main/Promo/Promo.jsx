import React from 'react';
import './Promo.css';
import logo from '../../../images/promo/promo__logo.svg';

function Promo() {
  return (
    <div className="promo">
      <div className="promo__body">
        <h1 className="promo__header">Учебный проект студента факультета Веб-разработки.</h1>
        <img className="promo__logo" src={logo} alt="Логотип баннера" />
      </div>
    </div>
  );
}

export default Promo;
