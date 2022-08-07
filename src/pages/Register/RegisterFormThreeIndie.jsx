import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import updateAction from './elements/updateAction';
import './Register.css';
import uploadPlaceholderReg from '../../images/upload-placeholder-reg.png';
import RegisterLeft from './elements/RegisterLeft';
import RegisterUpload from './elements/RegisterUpload';
import { useGlobalContext } from '../../context/AppProvider';
import { useDocTitle } from '../../hooks/useDocTitle';

const RegisterFormThreeIndie = () => {
  useDocTitle();

  const navigate = useNavigate();

  const { register, setValue, setError, clearErrors, handleSubmit } = useForm({
    mode: 'all',
  });
  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = (data) => {
    actions.updateAction(data);
    navigate('/register/company/step4');
  };

  const { componentFiles, setComponentFiles } = useGlobalContext();
  const getFiles = (componentFiles) => {
    setComponentFiles(componentFiles);
  };

  return (
    <div className="register register-com">
      <RegisterLeft />
      <div className="register-form-right">
        <div className="register-form-ctn register-form-ctn-upload">
          <p className="register-form-title register-form-upload-title">
            Upload Your Company Logo
          </p>
          <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
            <RegisterUpload
              isTypeImg={true}
              uploadPlaceholderImg={uploadPlaceholderReg}
              changePlaceholderText={false}
              getFiles={getFiles}
              setValue={setValue}
              setError={setError}
              clearErrors={clearErrors}
              {...register('logo', {
                required: true,
              })}
              ref={null}
            />
            {componentFiles[0] && (
              <button className="register-form-button register-form-fit-button">
                Confirm logo
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterFormThreeIndie;
