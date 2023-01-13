import React from 'react';
import InfoTooltip from '../InfoToolTip';

function FailInfoToolTip({ isOpen, title, handleClose }) {
  return <InfoTooltip title={title} onClose={handleClose} status="fail" isOpen={isOpen} />;
}

export default FailInfoToolTip;
