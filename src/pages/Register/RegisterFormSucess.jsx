import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import updateAction from './elements/updateAction';
import './Register.css';
import RegisterLeft from './elements/RegisterLeft';
import successImage from '../../images/success.png';

const RegisterFormSuccess = () => {
  const navigate = useNavigate();

  const { handleSubmit } = useForm({ mode: 'all' });
  const { state } = useStateMachine({ updateAction }); // state => final data

  const onSubmit = () => {
    navigate('/sign_in');
  };

  return (
    <div className="register register-com">
      <RegisterLeft />
      <div className="register-form-right">
        <div className="register-form-ctn register-form-sucess-ctn">
          <p className="register-form-title register-form-success-title">
            You have uploaded all of your documents successfully
          </p>
          <form
            className="register-form register-success-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="register-success-image-ctn">
              <img
                src={successImage}
                alt="success"
                className="register-success-image"
              />
            </div>
            <button className="register-form-button register-form-fit-button register-form-success-button">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterFormSuccess;
