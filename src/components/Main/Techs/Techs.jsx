import React from 'react';
import Title from '../Title/Title';
import './Techs.css';

function Techs() {
  return (
    <div className="techs">
      <div className="techs__body">
        <Title bgBlack="true">Технологии</Title>
        <div className="techs__description">
          <h3 className="techs__main-text">7 технологий</h3>
          <p className="techs__text">
            На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
          </p>
        </div>
        <ul className="techs__list-labels">
          <li className="techs__label">HTML</li>
          <li className="techs__label">CSS</li>
          <li className="techs__label">JS</li>
          <li className="techs__label">React</li>
          <li className="techs__label">Git</li>
          <li className="techs__label">Express.js</li>
          <li className="techs__label">mongoDB</li>
        </ul>
      </div>
    </div>
  );
}

export default Techs;
