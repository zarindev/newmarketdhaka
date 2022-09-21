import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import signImg from '../../images/sign.webp';
import google from '../../images/google.png';
import facebook from '../../images/facebook.png';
import brandLogo from '../../images/brand-logo.webp';
import brandLogoDesk from '../../images/brand-logo-transparent.webp';
import './SignIn.css';
import { useAuth } from '../../context/AuthProvider';
import { useDocTitle } from '../../hooks/useDocTitle';
import { formatError } from '../../functions/formatString';

const SignIn = () => {
  useDocTitle();

  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'all' });

  /** signin */
  const { user, signin, signinGoogle, signinFb } = useAuth();

  useEffect(() => {
    if (user !== null && Object.keys(user).length !== 0) {
      navigate('/');
      toast.success(`Successfully signed in`, {
        progress: undefined,
        toastId: 'singninSuccess',
      });
    }
  }, [user, navigate]);

  // via google
  const handleSiginGoogle = async () => {
    try {
      await signinGoogle();
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = formatError(errorCode);
      toast.error(`${errorMessage}`, {
        progress: undefined,
        toastId: 'signinGoogleError',
      });
      console.log(errorCode);
    }
  };

  // via facebook
  const handleSigninFb = async () => {
    try {
      await signinFb();
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = formatError(errorCode);
      toast.error(`${errorMessage}`, {
        progress: undefined,
        toastId: 'signinFbError',
      });
      console.log(errorCode);
    }
  };

  // via email, password
  const onSubmit = async ({ email, password }) => {
    try {
      await signin(email, password);
      toast.success(`Successfully signed in`, {
        progress: undefined,
        toastId: 'signinSuccess',
      });
      navigate('/');
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = formatError(errorCode);
      toast.error(`${errorMessage}`, {
        progress: undefined,
        toastId: 'signinEmailPasswordError',
      });
      console.log(errorCode);
    }
  };

  return (
    <div className="sign-up-page">
      <div className="left-side">
        <img
          src={signImg}
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
              Don't have an account? {''}
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
