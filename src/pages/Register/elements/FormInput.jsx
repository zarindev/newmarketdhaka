import React from 'react';

const FormInput = ({ name, placeholder, inputRef, inputLabel }) => {
  return (
    <div className="register-form-item">
      <label className="register-form-input-label">{inputLabel}</label>
      <input
        type="text"
        className="register-form-input"
        name={name}
        required
        placeholder={placeholder}
        ref={inputRef}
      />
    </div>
  );
};

export default FormInput;
