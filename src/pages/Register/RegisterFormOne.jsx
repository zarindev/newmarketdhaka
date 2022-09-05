import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import updateAction from './elements/updateAction';
import './Register.css';
import RegisterLeft from './elements/RegisterLeft';
import { useDocTitle } from '../../hooks/useDocTitle';

const RegisterFormOne = () => {
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
              <label htmlFor="email" className="register-form-input-label">
                Company Email
              </label>
              <input
                className="register-form-input"
                type="text"
                name="email"
                placeholder="Email"
                {...register('email', {
                  required: 'Company Email is required',
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Please enter a valid email',
                  },
                })}
              />
              {errors.email && (
                <p className="error-message">{errors.email?.message}</p>
              )}
            </div>
            <div className="register-form-item">
              <label htmlFor="password" className="register-form-input-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="register-form-input"
                placeholder="********"
                {...register('password', {
                  required: 'Password is required',
                  pattern: {
                    value:
                      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                    message:
                      'Password must contain at least 8 characters, at least 1 number and both lower and uppercase letters and 1 special character',
                  },
                })}
              />
              {errors.password && (
                <p className="error-message">{errors.password?.message}</p>
              )}
            </div>
            <div className="register-form-item">
              <label
                htmlFor="confirmPassword"
                className="register-form-input-label"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                className="register-form-input"
                placeholder="********"
                {...register('confirmPassword', {
                  required: 'Confirm Password is required',
                  validate: (value) =>
                    value === watch('password') || 'Password did not match',
                })}
              />
              {errors.confirmPassword && (
                <p className="error-message">
                  {errors.confirmPassword?.message}
                </p>
              )}
            </div>
            <button className="register-form-button">Continue</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterFormOne;
