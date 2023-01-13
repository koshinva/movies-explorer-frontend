import React, { useEffect } from 'react';
import fail from '../../images/info-tool-tip/fail.svg';
import success from '../../images/info-tool-tip/success.svg';
import './InfoToolTip.css';

function InfoTooltip({ isOpen, onClose, title, status }) {
  console.log(title);
  const typeLogo = {
    success: { logo: success, alt: 'Логотип успешного уведомления' },
    fail: { logo: fail, alt: 'Логотип уведомления об ошибке' },
  };
  const closePopupEsc = (e) => {
    if (e.key === 'Escape' || e.key === 'Enter') {
      onClose();
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', closePopupEsc);
    return () => window.removeEventListener('keydown', closePopupEsc);
  }, []);

  return (
    <div className={`info-tool-tip ${isOpen && 'info-tool-tip_opened'}`} onClick={onClose}>
      <div className="info-tool-tip__body" onClick={(e) => e.stopPropagation()}>
        <img
          className="info-tool-tip__status-image"
          src={typeLogo[status].logo}
          alt={typeLogo[status].alt}
        />
        <h2 className="info-tool-tip__title">{title}</h2>
        <button
          className="info-tool-tip__close-icon"
          type="button"
          aria-label="Закрыть информационное окно"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default InfoTooltip;
