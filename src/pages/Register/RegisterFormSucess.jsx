import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import updateAction from './elements/updateAction';
import { toast } from 'react-toastify';
import './Register.css';
import RegisterLeft from './elements/RegisterLeft';
import successImage from '../../images/success.png';
import { useDocTitle } from '../../hooks/useDocTitle';
import { useAuth } from '../../context/AuthProvider';
import { useGlobalContext } from '../../context/AppProvider';

const RegisterFormSuccess = () => {
  useDocTitle();

  const navigate = useNavigate();

  const { state } = useStateMachine({ updateAction });

  console.log(state);

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

  useEffect(() => {
    toast.success('Redirecting to the Dashbaord in 4 seconds', {
      progress: undefined,
      toastId: 'companySuccess',
    });

    const navigateToDash = setTimeout(() => {
      navigate('/service_dashboard');
    }, 4000);

    return () => clearTimeout(navigateToDash);
  }, [navigate]);

  // register company
  const { user } = useAuth();
  const uid = user?.uid;

  const { comPost } = useGlobalContext();

  const onSubmit = async () => {
    delete state.state;
    delete state.actions;
    state.id = 0;
    delete state.password;
    delete state.data;
    state.logo = '';
    state.document = '';
    state.userid = 1;
    state.userUId = uid;

    // const logoBuffer = 'state.logo.buffer';
    // const documentBuffer = 'state.document.buffer';
    // state.logo = logoBuffer;
    // state.document = documentBuffer;
    console.log(state);

    const res = await fetch(comPost, {
      method: 'POST',
      body: JSON.stringify(state),
      headers: {
        'Content-type': 'application/json; carset=UTF-8',
      },
    });

    const formData = await res.json();
    console.log(formData);
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

export default RegisterFormSuccess;
