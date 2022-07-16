import React, { useState, useEffect, useRef } from 'react';
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
  } = useForm({ mode: 'all' });
  const { actions, state } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
    navigate('/register/company/step3');
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
                type="text"
                name="companyName"
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
                type="text"
                name="address"
                className="register-form-input"
                placeholder="***********"
                {...register('address', {
                  required: 'Company Address is required',
                })}
                defaultValue={state.address}
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
                type="text"
                name="binNumber"
                className="register-form-input"
                placeholder="***********"
                {...register('binNumber', {
                  required: 'Company BIN Number is required',
                })}
                defaultValue={state.binNumber}
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
                type="text"
                name="taxNumber"
                className="register-form-input"
                placeholder="***********"
                {...register('taxNumber', {
                  required: 'Company Tax Number is required',
                })}
                defaultValue={state.taxNumber}
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
                type="text"
                name="phoneNumber"
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
                defaultValue={state.phoneNumber}
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
