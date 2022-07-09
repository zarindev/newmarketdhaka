import React from 'react';
import sign from '../../images/sign.png';
import google from '../../images/google.png';
import facebook from '../../images/facebook.png';
import './SignUp.css';

import { Link } from 'react-router-dom';
import { useRef } from 'react';

import { useAuth } from '../../context/AuthContext';
import { useState } from 'react';


function SignUp() {
  const emailRef = useRef();
const passwordRef = useRef();
const passwordConfirmRef = useRef();
const { signup } = useAuth();

const [error, setError] = useState('');

const [loading, setLoading] = useState('');

async function handleSubmit(e) {
  e.preventDefault()



  if (passwordRef.current.value !== passwordConfirmRef.current.value){
    return setError('Password do not matched')
  }

  try {
    setError('')
    setLoading(true)
    await signup(emailRef.current.value, passwordRef.current.value)
  } catch {
    setError('Failed to create an account')
  }
  setLoading(false)
  
}

  return (
    <div className="sign-up-page">
      <img
        src={sign}
        alt="cover"
        className="
        sign-up-img"
      />
      <div className="right-side">
        <div className="signup-header">
          <div className="sign-up">
            <h2>Sign Up</h2>
            {error && <h5>{error}</h5>}
          </div>
        </div>
        <div>
          <form className="signup-form" onSubmit={handleSubmit}>
            <h3 className="field-text">Email</h3>
            <input type="email" className="field-style" />
            <h3 className="field-text">Password</h3>
            <input type="password" className="field-style" />
            <h3 className="field-text">Confirm Password</h3>
            <input type="password" className="field-style" />
            <button className="sign-up-btn" disabled={loading}>
              <Link to="/sign_up_step_two" className="sign-up-link">
                Sign Up
              </Link>
            </button>
          </form>
        </div>
        <div className="signup-footer">
          <p>
            Already have an account?{' '}
            <span className="sign-in">
              <Link to="/sign_in" className="sign-in-btn">
                Sign in
              </Link>
            </span>
          </p>
          <p>or, Sign up with</p>
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
}

export default SignUp;
