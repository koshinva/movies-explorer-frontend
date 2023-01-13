import React from 'react';
import InfoTooltip from '../InfoToolTip';

function SuccessInfoToolTip({ isOpen, title, handleClose }) {
  return <InfoTooltip title={title} onClose={handleClose} status="success" isOpen={isOpen} />;
}

export default SuccessInfoToolTip;
