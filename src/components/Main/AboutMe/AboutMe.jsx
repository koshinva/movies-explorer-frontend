import React from 'react';
import Portfolio from '../Portfolio/Portfolio';
import './AboutMe.css';

function AboutMe() {
  return (
    <div className="about-me">
      <div className="about-me__body">
        <h2 className="title about-me__title">Студент</h2>
        <div className="about-me__info">
          <div className="about-me__info-description">
            <h3 className="about-me__name">Валерий</h3>
            <p className="about-me__profession">Фронтенд-разработчик, 29 лет</p>
            <p className="about-me__text">
              Я родился и вырос в Пензе, там же закончил медицинский институт ПГУ. С 2018 работал
              врачом-хирургом в Москве, затем переехал в Санкт-Петербург. В 2021 году увлекся
              программированием, с 2022 плотно занялся обучением. В данный момент прохожу курс по
              "веб-разработке" в Яндекс Практикум. Люблю читать книги, смотреть кино, гулять и
              узнавать новое.
            </p>
            <a href="#" className="about-me__link-github">
              Github
            </a>
          </div>
          <img className="about-me__photo" src="#" alt="Фото студента" />
        </div>
        <Portfolio />
      </div>
    </div>
  );
}

export default AboutMe;
