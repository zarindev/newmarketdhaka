import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import companyIcon from '../../images/company.png';
import indieIcon from '../../images/indie.png';
import RegisterLeft from './elements/RegisterLeft';

const Register = () => {
  return (
    <div className="register">
      <RegisterLeft />
      <div className="register-right">
        <div className="register-right-items">
          <p className="register-type-title">Provide Service as</p>
          <Link to="/register/company/step1">
            <div className="register-type">
              <img
                src={companyIcon}
                alt="company"
                className="register-type-icon"
              />
              <p className="register-type-text">Company</p>
            </div>
          </Link>
          <Link to="/register/individual/step1">
            <div className="register-type">
              <img
                src={indieIcon}
                alt="individual"
                className="register-type-icon"
              />
              <p className="register-type-text">Individual</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
