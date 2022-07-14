import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import RegisterLeft from './elements/RegisterLeft';
import FormInput from './elements/FormInput';
import FormButton from './elements/FormButton';
import { formValidate } from './elements/formValidate';

const RegisterCom = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorValues = formValidate(values);
    setErrors(errorValues);
  };

  const handleBlur = (e) => {};

  return (
    <div className="register register-com">
      <RegisterLeft />
      <div className="register-form-right">
        <div className="register-form-ctn">
          <p className="register-form-title">Register Your Company</p>
          <form className="register-form" onSubmit={handleSubmit}>
            <FormInput
              type="text"
              name="email"
              placeholder="Email"
              inputLabel="Company Email"
              specifErrors={errors.email}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            <FormInput
              type="password"
              name="password"
              placeholder="Password"
              inputLabel="Password"
              specifErrors={errors.password}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            <FormInput
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              inputLabel="Confirm Password"
              specifErrors={errors.confirmPassword}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            <FormButton buttonText="Continue" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterCom;
