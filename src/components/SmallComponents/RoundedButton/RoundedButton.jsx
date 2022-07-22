import React from 'react';
import './RoundedButton.css';

const RoundedButton = ({ buttonText, buttonIcon, buttonAltText }) => {
  return (
    <button className="rounded-btn">
      <p className="rounded-btn-text">{buttonText}</p>
      {buttonIcon && buttonAltText && (
        <img
          src={buttonIcon}
          alt={buttonAltText}
          className="rounded-btn-icon"
        />
      )}
    </button>
  );
};

export default RoundedButton;
