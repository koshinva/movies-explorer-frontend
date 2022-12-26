import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__body">
        <h4 className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</h4>
        <div className="footer__main">
          <p className="footer__copyright">© 2020</p>
          <ul className="footer__list-links">
            <li className="footer__list-item">
              <a href="#" className="footer__link">
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__list-item">
              <a href="#" className="footer__link">
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
