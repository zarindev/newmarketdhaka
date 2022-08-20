import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import './Register.css';
import RegisterLeft from './elements/RegisterLeft';
import successImage from '../../images/success.png';
import { useDocTitle } from '../../hooks/useDocTitle';
import { useAuth } from '../../context/AuthProvider';
import { useFind } from '../../hooks/useFind';

const RegisterFormSuccess = () => {
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

  const comGet = `http://mdadmin-001-site2.ftempurl.com/api/Servivce/GetServiceCompList`;
  const { user } = useAuth();
  const uid = user?.uid;
  const comFetched = useFind(comGet, uid);
  const activeCom = comFetched?.activeItem;
  const activeComId = activeCom?.id;
  console.log(activeComId);

  useEffect(() => {
    toast.success('Redirecting to the Dashbaord in 4 seconds', {
      progress: undefined,
      toastId: 'companySuccess',
    });

    const navigateToDash = setTimeout(() => {
      navigate('/service_dashboard', {
        state: { id: 1, activeComId: activeComId },
      });
    }, 4000);

    return () => clearTimeout(navigateToDash);
  }, [navigate, activeComId]);

  const onSubmit = () => {
    reset();
    navigate('/service_dashboard', {
      state: { id: 1, activeComId: activeComId },
    });
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
