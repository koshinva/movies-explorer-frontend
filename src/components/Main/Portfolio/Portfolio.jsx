import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list-works">
        <li className="portfolio__work">
          <a
            href="https://github.com/koshinva/how-to-learn"
            target="_blank"
            rel="noreferrer"
            className="portfolio__work-link"
          >
            <p className="portfolio__work-name">Статичный сайт</p>
            <span className="portfolio__work-icon">↗</span>
          </a>
        </li>
        <li className="portfolio__work">
          <a
            href="https://github.com/koshinva/russian-travel"
            target="_blank"
            rel="noreferrer"
            className="portfolio__work-link"
          >
            <p className="portfolio__work-name">Адаптивный сайт</p>
            <span className="portfolio__work-icon">↗</span>
          </a>
        </li>
        <li className="portfolio__work">
          <a
            href="https://github.com/koshinva/react-mesto-api-full"
            target="_blank"
            rel="noreferrer"
            className="portfolio__work-link"
          >
            <p className="portfolio__work-name">Одностраничное приложение</p>
            <span className="portfolio__work-icon">↗</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
