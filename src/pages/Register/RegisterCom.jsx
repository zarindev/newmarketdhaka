import React, { useState, useRef } from 'react';
import './Register.css';
import RegisterLeft from './elements/RegisterLeft';
import FormInput from './elements/FormInput';
import FormButton from './elements/FormButton';

const RegisterCom = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  };

  return (
    <div className="register register-com">
      <RegisterLeft />
      <div className="register-form-right">
        <div className="register-form-ctn">
          <p className="register-form-title">Register Your Company</p>
          <form className="register-form" onSubmit={handleSubmit}>
            <FormInput
              name="email"
              inputLabel="Company Email"
              placeholder="Email"
              inputRef={emailRef}
            />
            <FormInput
              name="password"
              inputLabel="Company Email"
              placeholder="Password"
              inputRef={passwordRef}
            />
            <FormInput
              name="confirm_password"
              inputLabel="Company Email"
              placeholder="Confirm Password"
              inputRef={confirmPasswordRef}
            />
            <FormButton buttonText="Continue" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterCom;
