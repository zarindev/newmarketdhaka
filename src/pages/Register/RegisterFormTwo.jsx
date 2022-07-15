import React, { useState, useEffect } from 'react';
import { useNavigate, withRouter } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import updateAction from './elements/updateAction';
import './Register.css';
import RegisterLeft from './elements/RegisterLeft';
import FormInput from './elements/FormInput';
import FormButton from './elements/FormButton';

const RegisterFormTwo = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { actions, state } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
    navigate('/register/company/step2');
  };

  return (
    <div className="register register-com">
      <RegisterLeft />
      <div className="register-form-right">
        <div className="register-form-ctn">
          <p className="register-form-title">Register Your Company</p>
          <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="register-form-item">
              <label
                htmlFor="companyName"
                className="register-form-input-label"
              >
                Company Name
              </label>
              <input
                className="register-form-input"
                placeholder="ex: Google"
                {...register('companyName')}
                defaultValue={state.companyName}
              />
            </div>
            <div className="register-form-item">
              <label htmlFor="address" className="register-form-input-label">
                Company Address
              </label>
              <input
                className="register-form-input"
                placeholder="***********"
                {...register('address')}
                defaultValue={state.address}
              />
            </div>
            <div className="register-form-item">
              <label htmlFor="binNumber" className="register-form-input-label">
                Company BIN Number
              </label>
              <input
                className="register-form-input"
                placeholder="***********"
                {...register('binNumber')}
                defaultValue={state.binNumber}
              />
            </div>
            <div className="register-form-item">
              <label htmlFor="taxNumber" className="register-form-input-label">
                Company Tax Number
              </label>
              <input
                className="register-form-input"
                placeholder="***********"
                {...register('taxNumber')}
                defaultValue={state.taxNumber}
              />
            </div>
            <div className="register-form-item">
              <label
                htmlFor="phoneNumber"
                className="register-form-input-label"
              >
                Phone Number
              </label>
              <input
                className="register-form-input"
                placeholder="***********"
                {...register('phoneNumber')}
                defaultValue={state.phoneNumber}
              />
            </div>
            <button className="register-form-button">Next</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterFormTwo;
