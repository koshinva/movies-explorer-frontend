import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__body">
        <h4 className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</h4>
        <div className="footer__main">
          <p className="footer__copyright">© 2023</p>
          <ul className="footer__list-links">
            <li className="footer__list-item">
              <a
                href="https://practicum.yandex.ru"
                target="_blank"
                rel="noreferrer"
                className="footer__link"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__list-item">
              <a
                href="https://github.com/koshinva/movies-explorer-frontend"
                target="_blank"
                rel="noreferrer"
                className="footer__link"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
