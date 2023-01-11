import React from 'react';
import { Link } from 'react-router-dom';
import LogoLink from '../LogoLink/LogoLink';
import './FormAuth.css';

function FormAuth({ children, welcomeTitle, labelButton, alreadyText, linkTo, linkLabel, isValid }) {
  const buttonClass = `form-auth__button ${!isValid && 'form-auth__button_inactive'}`;
  return (
    <div className="form-auth">
      <div className="form-auth__body">
        <LogoLink />
        <h2 className="form-auth__welcome-title">{welcomeTitle}</h2>
        <form className="form-auth__form" noValidate>
          {children}
          <button className={buttonClass} type="submit" disabled={!isValid}>
            {labelButton}
          </button>
        </form>
        <p className="form-auth__already-text">
          {alreadyText}
          <Link to={linkTo} className="form-auth__link-to">
            {linkLabel}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default FormAuth;
