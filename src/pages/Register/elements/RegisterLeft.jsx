import React from 'react';
import { Link } from 'react-router-dom';
import brandLogo from '../../../images/brand-logo.png';
import brandLogoDesk from '../../../images/brand-logo-transparent.png';

const RegisterLeft = () => {
  return (
    <div className="register-left">
      <Link to="/">
        <img src={brandLogoDesk} alt="brand logo" className="register-logo" />
      </Link>
      <img
        src={brandLogo}
        alt="brand logo"
        className="register-logo register-logo-mobile"
      />
      <div className="register-title-ctn">
        <h4 className="register-title">Register Your Services</h4>
        <p className="register-desc">& boost your customer engagement</p>
      </div>
    </div>
  );
};

export default RegisterLeft;
