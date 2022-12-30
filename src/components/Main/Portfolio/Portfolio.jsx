import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list-works">
        <li className="portfolio__work">
          <p className="portfolio__work-name">Статичный сайт</p>
          <a
            href="https://github.com/koshinva/how-to-learn"
            target="_blank"
            rel="noreferrer"
            className="portfolio__work-link"
          >
            ↗
          </a>
        </li>
        <li className="portfolio__work">
          <p className="portfolio__work-name">Адаптивный сайт</p>
          <a
            href="https://github.com/koshinva/russian-travel"
            target="_blank"
            rel="noreferrer"
            className="portfolio__work-link"
          >
            ↗
          </a>
        </li>
        <li className="portfolio__work">
          <p className="portfolio__work-name">Одностраничное приложение</p>
          <a
            href="https://github.com/koshinva/react-mesto-api-full"
            target="_blank"
            rel="noreferrer"
            className="portfolio__work-link"
          >
            ↗
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;