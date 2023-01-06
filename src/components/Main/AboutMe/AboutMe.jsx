import React from 'react';
import Portfolio from '../Portfolio/Portfolio';
import photo from '../../../images/about-me/photo-student.jpg';
import './AboutMe.css';
import Title from '../Title/Title';

function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me__body">
        <Title>Студент</Title>
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
            <a
              href="https://github.com/koshinva"
              target="_blank"
              rel="noreferrer"
              className="about-me__link-github"
            >
              Github
            </a>
          </div>
          <img className="about-me__photo" src={photo} alt="Фото студента" />
        </div>
        <Portfolio />
      </div>
    </section>
  );
}

export default AboutMe;
