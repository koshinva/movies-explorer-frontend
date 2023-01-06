import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFoundPage.css';

function NotFoundPage() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div className="not-found-page">
      <div className="not-found-page__body">
        <h2 className="not-found-page__title">404</h2>
        <p className="not-found-page__subtitle">Страница не найдена</p>
        <button type="button" className="not-found-page__button-back" onClick={goBack} >
          Назад
        </button>
      </div>
    </div>
  );
}

export default NotFoundPage;
