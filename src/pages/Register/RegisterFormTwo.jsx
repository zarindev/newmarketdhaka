import React, { useState, useEffect } from 'react';
import { useNavigate, withRouter } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import updateAction from './elements/updateAction';
import './Register.css';
import RegisterLeft from './elements/RegisterLeft';

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
                {...register('companyName', {
                  required: 'Company Name is required',
                })}
                defaultValue={state.companyName}
              />
              {errors.companyName && (
                <p className="error-message">{errors.companyName?.message}</p>
              )}
            </div>
            <div className="register-form-item">
              <label htmlFor="address" className="register-form-input-label">
                Company Address
              </label>
              <input
                className="register-form-input"
                placeholder="***********"
                {...register('address', {
                  required: 'Company Address is required',
                })}
              />
              {errors.address && (
                <p className="error-message">{errors.address?.message}</p>
              )}
            </div>
            <div className="register-form-item">
              <label htmlFor="binNumber" className="register-form-input-label">
                Company BIN Number
              </label>
              <input
                className="register-form-input"
                placeholder="***********"
                {...register('binNumber', {
                  required: 'Company BIN Number is required',
                })}
              />
              {errors.binNumber && (
                <p className="error-message">{errors.binNumber?.message}</p>
              )}
            </div>
            <div className="register-form-item">
              <label htmlFor="taxNumber" className="register-form-input-label">
                Company Tax Number
              </label>
              <input
                className="register-form-input"
                placeholder="***********"
                {...register('taxNumber', {
                  required: 'Company Tax Number is required',
                })}
              />
              {errors.taxNumber && (
                <p className="error-message">{errors.taxNumber?.message}</p>
              )}
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
                {...register('phoneNumber', {
                  required: 'Phone Number is required',
                  pattern: {
                    value:
                      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
                    message: 'Please enter a valid phone number',
                  },
                })}
              />
              {errors.phoneNumber && (
                <p className="error-message">{errors.phoneNumber?.message}</p>
              )}
            </div>
            <button className="register-form-button">Next</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterFormTwo;
