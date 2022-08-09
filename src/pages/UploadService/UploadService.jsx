import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import updateAction from '../Register/elements/updateAction';
import SeekerSidebar from '../../components/SeekerSidebar/SeekerSidebar';
import './UploadService.css';
import supportIcon from '../../images/svg/customer-support.svg';
import categoryIcon from '../../images/svg/category.svg';
import clockIcon from '../../images/svg/clock-red.svg';
import calendarIcon from '../../images/svg/calendar.svg';
import viewDetailsIcon from '../../images/svg/view-details.svg';
import imageIcon from '../../images/svg/image-el.svg';
import uploadPlaceholderUp from '../../images/upload-placeholder-up.png';
import UploadSelect from './UploadSelect';
import RegisterUpload from '../Register/elements/RegisterUpload';
import { categoryTags, closingDays, dragAndDrops } from './uploadData';
import { useFetch } from '../../hooks/useFetch';
import { useDocTitle } from '../../hooks/useDocTitle';

const UploadService = () => {
  useDocTitle();

  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    control,
    setValue,
    setError,
    clearErrors,
    handleSubmit,
  } = useForm();
  const { actions, state } = useStateMachine({ updateAction });

  const serviceApi = `https://jsonplaceholder.typicode.com/todos/`;
  const onSubmit = async (data) => {
    actions.updateAction(data);

    const stateAndActions = {
      ...state,
      ...actions,
    };

    const res = await fetch(serviceApi, {
      method: 'POST',
      body: JSON.stringify(stateAndActions),
      headers: {
        'Content-type': 'application/json; carset=UTF-8',
      },
    });

    const formData = await res.json();
    console.log(formData);

    // navigate('/service_dashboard');
  };

  return (
    <div className="upload-ser-ctn">
      <SeekerSidebar />
      <div className="upload-ser">
        <div className="upload-ser-heading">
          <h4 className="upload-ser-title">Get Started Setting Up Services</h4>
          <p className="upload-ser-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor
            aliquam arcu tincidunt eros quis ut tristique iaculis consectetur.{' '}
          </p>
        </div>
        <form className="upload-ser-form-ctn" onSubmit={handleSubmit(onSubmit)}>
          <div className="upload-ser-form">
            <div className="upload-ser-left">
              <div className="upload-ser-input-ctn">
                <label htmlFor="serviceName" className="upload-ser-label-ctn">
                  <img
                    src={supportIcon}
                    alt="label icon"
                    className="upload-ser-label-icon"
                  />
                  <p className="upload-ser-label-title">Service Name</p>
                </label>
                <input
                  type="text"
                  className="register-form-input"
                  placeholder="Service Name"
                  {...register('title', {
                    required: true,
                  })}
                />
              </div>
              <div className="upload-ser-input-ctn">
                <label htmlFor="serType" className="upload-ser-label-ctn">
                  <img
                    src={categoryIcon}
                    alt="label icon"
                    className="upload-ser-label-icon"
                  />
                  <p className="upload-ser-label-title">Category</p>
                </label>
                <UploadSelect
                  name="serType"
                  control={control}
                  items={categoryTags}
                  isMulti={false}
                />
              </div>
              <div className="upload-ser-input-ctn">
                <label htmlFor="serOpen" className="upload-ser-label-ctn">
                  <img
                    src={clockIcon}
                    alt="label icon"
                    className="upload-ser-label-icon"
                  />
                  <p className="upload-ser-label-title">Opening Time</p>
                </label>
                <input
                  type="time"
                  className="register-form-input"
                  placeholder="Select opening time"
                  {...register('serOpen', {
                    required: true,
                  })}
                />
              </div>
              <div className="upload-ser-input-ctn">
                <label htmlFor="close" className="upload-ser-label-ctn">
                  <img
                    src={calendarIcon}
                    alt="label icon"
                    className="upload-ser-label-icon"
                  />
                  <p className="upload-ser-label-title">Select Closing Days</p>
                </label>
                <UploadSelect
                  name="serClose"
                  control={control}
                  items={closingDays}
                  isMulti={true}
                />
              </div>
              <div className="upload-ser-input-ctn">
                <label htmlFor="serDetails" className="upload-ser-label-ctn">
                  <img
                    src={viewDetailsIcon}
                    alt="label icon"
                    className="upload-ser-label-icon"
                  />
                  <p className="upload-ser-label-title">Add Details</p>
                </label>
                <textarea
                  cols="30"
                  rows="10"
                  className="register-form-input upload-ser-textarea"
                  placeholder="Describe your service"
                  {...register('serDetails', {
                    required: true,
                  })}
                ></textarea>
              </div>
              <div className="upload-ser-input-ctn">
                <label
                  htmlFor="offeredServices"
                  className="upload-ser-label-ctn"
                >
                  <img
                    src={viewDetailsIcon}
                    alt="label icon"
                    className="upload-ser-label-icon"
                  />
                  <p className="upload-ser-label-title">Add offered services</p>
                </label>
                <textarea
                  cols="30"
                  rows="10"
                  className="register-form-input upload-ser-textarea"
                  placeholder="Services offered"
                  {...register('offeredServices', {
                    required: true,
                  })}
                ></textarea>
              </div>
              <div className="upload-ser-input-ctn">
                <label htmlFor="extraServices" className="upload-ser-label-ctn">
                  <img
                    src={viewDetailsIcon}
                    alt="label icon"
                    className="upload-ser-label-icon"
                  />
                  <p className="upload-ser-label-title">Add extra services</p>
                </label>
                <textarea
                  cols="30"
                  rows="10"
                  className="register-form-input upload-ser-textarea"
                  placeholder="Extra services"
                  {...register('extraServices', {
                    required: true,
                  })}
                ></textarea>
              </div>
              <div className="upload-ser-input-ctn">
                <label htmlFor="whyUs" className="upload-ser-label-ctn">
                  <img
                    src={viewDetailsIcon}
                    alt="label icon"
                    className="upload-ser-label-icon"
                  />
                  <p className="upload-ser-label-title">Why choose us</p>
                </label>
                <textarea
                  cols="30"
                  rows="10"
                  className="register-form-input upload-ser-textarea"
                  placeholder="Why choose us"
                  {...register('whyUs', {
                    required: true,
                  })}
                ></textarea>
              </div>
            </div>
            <div className="upload-ser-right">
              <div className="upload-ser-input-ctn upload-ser-input-ctn-img">
                <label htmlFor="whyUs" className="upload-ser-label-ctn">
                  <img
                    src={imageIcon}
                    alt="label icon"
                    className="upload-ser-label-icon"
                  />
                  <p className="upload-ser-label-title">Upload Service Image</p>
                </label>
                <div className="upload-ser-img-ctn">
                  {dragAndDrops.map((item) => {
                    const { id } = item;
                    return (
                      <RegisterUpload
                        key={id}
                        isTypeImg={true}
                        uploadPlaceholderImg={uploadPlaceholderUp}
                        changePlaceholderText={true}
                        getFiles={null}
                        setValue={setValue}
                        setError={setError}
                        clearErrors={clearErrors}
                        {...register(`serImg${id}`, {
                          required: true,
                        })}
                        ref={null}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="upload-ser-btn-ctn">
            <button className="upload-ser-upload-btn">Upload</button>
            <button className="upload-ser-upload-btn upload-ser-upload-btn-draft">
              Save as draft
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadService;
