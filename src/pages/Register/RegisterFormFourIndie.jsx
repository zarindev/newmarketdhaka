import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import updateAction from './elements/updateAction';
import './Register.css';
import uploadPlaceholderRegDoc from '../../images/upload-placeholder-reg-doc.png';
import RegisterLeft from './elements/RegisterLeft';
import RegisterUpload from './elements/RegisterUpload';
import { useGlobalContext } from '../../context/AppProvider';
import { useDocTitle } from '../../hooks/useDocTitle';

const RegisterFormFourIndie = () => {
  useDocTitle();

  const navigate = useNavigate();

  const { register, setValue, setError, clearErrors, handleSubmit } = useForm({
    mode: 'all',
  });
  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = (data) => {
    actions.updateAction(data);
    navigate('/register/company/success');
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
          <p className="register-form-title">Upload Document or license</p>
          <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
            <RegisterUpload
              isTypeImg={false}
              uploadPlaceholderImg={uploadPlaceholderRegDoc}
              changePlaceholderText={false}
              getFiles={getFiles}
              setValue={setValue}
              setError={setError}
              clearErrors={clearErrors}
              {...register('document', {
                required: true,
              })}
              ref={null}
            />
            {componentFiles[0] && (
              <button className="register-form-button register-form-fit-button">
                Next
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterFormFourIndie;
