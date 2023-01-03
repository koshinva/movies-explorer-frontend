import React from 'react';
import Title from '../Title/Title';
import './AboutProject.css';

function AboutProject() {
  return (
    <div className="about-project">
      <div className="about-project__body">
        <Title>О проекте</Title>
        <div className="about-project__info info-about">
          <div className="info-about__block">
            <h3 className="info-about__title">Дипломный проект включал 5 этапов</h3>
            <p className="info-about__description">
              Составление плана, работу над бэкендом, вёрстку, добавление функциональности и
              финальные доработки.
            </p>
          </div>
          <div className="info-about__block">
            <h3 className="info-about__title">На выполнение диплома ушло 5 недель</h3>
            <p className="info-about__description">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы
              успешно защититься.
            </p>
          </div>
        </div>
        <div className="about-project__weeks">
          <div className="about-project__weeks-part about-project__weeks-part_bgcolor_green">
            <p className="about-project__text-week">1 неделя</p>
          </div>
          <div className="about-project__weeks-part about-project__weeks-part_bgcolor_darkgrey">
            <p className="about-project__text-week">4 недели</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutProject;
