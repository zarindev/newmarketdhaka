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
import { useAuth } from '../../context/AuthProvider';

const RegisterFormFour = () => {
  useDocTitle();

  const navigate = useNavigate();

  const { register, setValue, setError, clearErrors, handleSubmit } = useForm({
    mode: 'all',
  });
  const { actions, state } = useStateMachine({ updateAction });

  // register company
  const { user } = useAuth();
  const uid = user?.uid;

  const comFetch = `http://mdadmin-001-site2.ftempurl.com/api/Servivce/PotCompany`;
  const onSubmit = async (data) => {
    actions.updateAction(data);

    const stateAction = { ...state, actions };
    delete stateAction.state;
    delete stateAction.actions;
    stateAction.id = 0;
    delete stateAction.password;
    delete stateAction.data;
    stateAction.logo = '';
    stateAction.document = '';
    stateAction.userid = 1;
    stateAction.userUId = uid;

    // const logoBuffer = 'stateAction.logo.buffer';
    // const documentBuffer = 'stateAction.document.buffer';
    // stateAction.logo = logoBuffer;
    // stateAction.document = documentBuffer;
    console.log(stateAction);

    const res = await fetch(comFetch, {
      method: 'POST',
      body: JSON.stringify(stateAction),
      headers: {
        'Content-type': 'application/json; carset=UTF-8',
      },
    });

    const formData = await res.json();
    console.log(formData);

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

export default RegisterFormFour;
