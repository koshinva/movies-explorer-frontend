import React from 'react';
import './Title.css';

function Title({ children, bgBlack = false }) {
  return <h2 className={`title ${bgBlack && 'title_bg-color_black'}`}>{children}</h2>;
}

export default Title;
