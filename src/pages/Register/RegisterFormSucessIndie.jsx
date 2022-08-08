import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import updateAction from './elements/updateAction';
import { ToastContainer, toast } from 'react-toastify';
import './Register.css';
import RegisterLeft from './elements/RegisterLeft';
import successImage from '../../images/success.png';
import { useDocTitle } from '../../hooks/useDocTitle';

const RegisterFormSucessIndie = () => {
  useDocTitle();

  const navigate = useNavigate();

  const { handleSubmit, reset } = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      companyName: '',
      address: '',
      binNumber: '',
      taxNumber: '',
      phoneNumber: '',
    },
  });
  const { actions, state } = useStateMachine({ updateAction });

  const notify = () => {
    toast.success('Redirecting to the Dashbaord in 4 seconds', {
      progress: undefined,
    });
    toast.error('Registration failed', { progress: undefined });
  };

  useEffect(() => {
    notify();
    const navigateToDash = setTimeout(() => {
      navigate('/service_dashboard');
    }, 4000);

    return () => clearTimeout(navigateToDash);
  }, []);

  const onSubmit = () => {
    reset();
    navigate('/service_dashboard');
  };

  return (
    <div className="register register-com">
      <RegisterLeft />
      <div className="register-form-right">
        <div className="register-form-ctn register-form-sucess-ctn">
          <p className="register-form-title register-form-success-title">
            You have uploaded all of your documents successfully
          </p>
          <form
            className="register-form register-form-success"
            onSubmit={handleSubmit(onSubmit)}
          >
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
            <div className="register-success-image-ctn">
              <img
                src={successImage}
                alt="success"
                className="register-success-image"
              />
            </div>
            <button className="register-form-button register-form-fit-button register-form-success-button">
              Go to Dashboard
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterFormSucessIndie;
