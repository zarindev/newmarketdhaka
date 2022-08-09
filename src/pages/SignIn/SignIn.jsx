import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import sign from '../../images/sign.png';
import google from '../../images/google.png';
import facebook from '../../images/facebook.png';
import brandLogo from '../../images/brand-logo.png';
import brandLogoDesk from '../../images/brand-logo-transparent.png';
import './SignIn.css';
import { useDocTitle } from '../../hooks/useDocTitle';
import { useAuth } from '../../context/AuthProvider';
import { useEffect } from 'react';

const SignIn = () => {
  useDocTitle();

  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'all' });

  /** signin */
  const { signin, user } = useAuth();
  const [catchError, setCatchError] = useState('');

  const notify = () => {
    if (user) {
      toast.success('Successfully Signed in', {
        progress: undefined,
      });
    } else {
      toast.error(catchError, { progress: undefined });
    }
  };

  // via google
  const { signinGoogle } = useAuth();

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

  useEffect(() => {
    if (user !== null) {
      navigate('/');
    }
  }, [user, navigate]);

  // via facebook
  const { signinFb } = useAuth();

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

  // via email, password
  const onSubmit = async ({ email, password }) => {
    try {
      await signin(email, password);
      notify();
      navigate('/');
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
        <img
          src={sign}
          alt="cover"
          className="
        sign-up-img"
        />
        <img src={brandLogoDesk} alt="brand logo" className="sign-up-logo" />
        <img
          src={brandLogo}
          alt="brand logo"
          className="sign-up-logo sign-up-logo-mobile"
        />
      </div>
      <div className="right-side">
        <h2 className="sign-up-title">Sign In</h2>
        <div>
          <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
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
              placeholder="Email"
              className="field-style"
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
              placeholder="Password"
              className="field-style"
            />
            {errors.password && (
              <p className="error-message">{errors.password?.message}</p>
            )}
            <button className="sign-up-btn">Sign In</button>
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

export default SignIn;
