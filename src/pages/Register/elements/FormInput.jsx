import React, { useState } from 'react';

const FormInput = ({
  type,
  name,
  placeholder,
  inputLabel,
  handleChange,
  handleBlur,
  specifErrors,
}) => {
  return (
    <div className="register-form-item">
      <label className="register-form-input-label">{inputLabel}</label>
      <input
        type={type}
        className="register-form-input"
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {specifErrors && <p className="error-message">{specifErrors}</p>}
    </div>
  );
};

export default FormInput;
