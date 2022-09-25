import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import updateAction from './elements/updateAction';
import './SignUp.css';
import signImg from '../../images/sign.png';
import google from '../../images/google.png';
import facebook from '../../images/facebook.png';
import brandLogo from '../../images/brand-logo.png';
import brandLogoDesk from '../../images/brand-logo-transparent.png';
import { useAuth } from '../../context/AuthProvider';
import { useDocTitle } from '../../hooks/useDocTitle';

const SignUp = () => {
  useDocTitle();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm({ mode: 'all' });
  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = (data) => {
    actions.updateAction(data);
    navigate('/sign_up/step2');
  };

  /** signin */
  const { user, signinGoogle, signinFb } = useAuth();
  const [catchError, setCatchError] = useState('');

  useEffect(() => {
    if (user !== null) {
      navigate('/');
    }
  }, [user, navigate]);

  // via google
  const handleSiginGoogle = async () => {
    try {
      await signinGoogle();
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setCatchError(errorMessage);
      console.log(catchError);
    }
  };

  // via facebook
  const handleSigninFb = async () => {
    try {
      await signinFb();
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setCatchError(errorMessage);
      console.log(catchError);
    }
  };

  return (
    <div className="sign-up-page">
      <div className="left-side">
        <img src={signImg} alt="cover" className="sign-up-img" />
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
          <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="field-text">Email</h3>
            <input
              type="text"
              {...register('email', {
                required: 'Email Address is required',
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Please enter a valid email',
                },
              })}
              className="field-style"
              placeholder="Email"
            />
            {errors.email && (
              <p className="error-message">{errors.email?.message}</p>
            )}
            <h3 className="field-text">Password</h3>
            <input
              type="password"
              {...register('password', {
                required: 'Password is required',
                pattern: {
                  value:
                    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                  message:
                    'Password must contain at least 8 characters, at least 1 number and both lower and uppercase letters and 1 special character',
                },
              })}
              className="field-style"
              placeholder="Password"
            />
            {errors.password && (
              <p className="error-message">{errors.password?.message}</p>
            )}
            <h3 className="field-text">Confirm Password</h3>
            <input
              type="password"
              {...register('confirmPassword', {
                required: 'Confirm Password is required',
                validate: (value) =>
                  value === watch('password') || 'Password did not match',
              })}
              className="field-style"
              placeholder="Confirm Password"
            />
            {errors.confirmPassword && (
              <p className="error-message">{errors.confirmPassword?.message}</p>
            )}
            <button className="sign-up-btn">Next</button>
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
            <button className="signin-btn" onClick={handleSiginGoogle}>
              <img src={google} alt="google" />
            </button>
            <button className="signin-btn" onClick={handleSigninFb}>
              <img src={facebook} alt="facebook" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
