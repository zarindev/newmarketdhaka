import React from 'react';
import sign from '../../images/sign.png';
import google from '../../images/google.png';
import facebook from '../../images/facebook.png';
import brandLogo from '../../images/network.png';
import './SignUp.css';

import { Link } from 'react-router-dom';
import { useDocTitle } from '../../hooks/useDocTitle';

const SignUp = () => {
  useDocTitle();

  return (
    <div className="sign-up-page">
      <div className="left-side">
        <img
          src={sign}
          alt="cover"
          className="
        sign-up-img"
        />
        <img src={brandLogo} alt="brand logo" className="sign-up-logo" />
      </div>
      <div className="right-side">
        <h2 className="sign-up-title">Sign In</h2>
        <div>
          <form className="signup-form">
            <h3 className="field-text">Email</h3>
            <input type="email" className="field-style" />
            <h3 className="field-text">Password</h3>
            <input type="password" className="field-style" />
            <button className="sign-up-btn">
              <Link to="/" className="sign-up-link">
                Sign In
              </Link>
            </button>
          </form>
        </div>
        <div className="signup-footer">
          <div className="signup-footer-text-ctn">
            <p>
              Don't have an account?{' '}
              <span className="sign-in">
                <Link to="/sign_up">Sign Up</Link>
              </span>
            </p>
            <p className="signup-footer-text-bold">or, Sign up with</p>
          </div>
          <div className="signin">
            <button className="signin-btn">
              <img src={google} alt="" />
            </button>
            <button className="signin-btn">
              <img src={facebook} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
