import React from 'react';
import { Link } from 'react-router-dom';
import sign from '../../images/sign.png';
import google from '../../images/google.png';
import facebook from '../../images/facebook.png';
import brandLogo from '../../images/brand-logo.png';
import brandLogoDesk from '../../images/brand-logo-transparent.png';
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
        <img
          src={brandLogoDesk}
          alt="new-market-dhaka logo"
          className="sign-up-logo"
        />
        <img
          src={brandLogo}
          alt="new-market-dhaka logo"
          className="sign-up-logo sign-up-logo-mobile"
        />
      </div>
      <div className="right-side">
        <h2 className="sign-up-title">Sign Up</h2>
        <div>
          <form className="signup-form">
            <h3 className="field-text">Email</h3>
            <input type="email" className="field-style" />
            <h3 className="field-text">Password</h3>
            <input type="password" className="field-style" />
            <h3 className="field-text">Confirm Password</h3>
            <input type="password" className="field-style" />
            <button className="sign-up-btn">
              <Link to="/sign_up_step_two" className="sign-up-link">
                Sign Up
              </Link>
            </button>
          </form>
        </div>
        <div className="signup-footer">
          <div className="signup-footer-text-ctn">
            <p>
              Already have an account?{' '}
              <span className="sign-in">
                <Link to="/sign_in" className="sign-in-btn">
                  Sign in
                </Link>
              </span>
            </p>
            <p>or, Sign up with</p>
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
