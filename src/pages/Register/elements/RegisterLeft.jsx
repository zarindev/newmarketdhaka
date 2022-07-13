import React from 'react';
import brandLogo from '../../../images/svg/Network-Color-white.svg';

const RegisterLeft = () => {
  return (
    <div className="register-left">
      <img src={brandLogo} alt="brand logo" className="register-logo" />
      <div className="register-title-ctn">
        <h4 className="register-title">Register Your Services</h4>
        <p className="register-desc">& boost your customer engagement</p>
      </div>
    </div>
  );
};

export default RegisterLeft;
