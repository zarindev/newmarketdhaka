import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import SeekerSidebar from '../../components/SeekerSidebar/SeekerSidebar';
import './UploadService.css';
import supportIcon from '../../images/svg/customer-support.svg';
import categoryIcon from '../../images/svg/category.svg';
import clockIcon from '../../images/svg/clock-red.svg';
import calendarIcon from '../../images/svg/calendar.svg';
import locationIcon from '../../images/svg/Location-red.svg';
import viewDetailsIcon from '../../images/svg/view-details.svg';
import imageIcon from '../../images/svg/image-el.svg';
import uploadPlaceholderUp from '../../images/upload-placeholder-up.png';
import UploadSelect from './UploadSelect';
import RegisterUpload from '../Register/elements/RegisterUpload';
import {
  categoryTags,
  closingDays,
  dragAndDrops,
  locations,
} from './uploadData';
import { useDocTitle } from '../../hooks/useDocTitle';
import { useFind } from '../../hooks/useFind';
import { useFilter } from '../../hooks/useFilter';

const UploadService = () => {
  useDocTitle();

  const navigate = useNavigate();

  const {
    register,

    control,
    setValue,
    setError,
    clearErrors,
    handleSubmit,
  } = useForm();

  // post service
  const { activeCom } = useFind();
  const activeComId = activeCom.id;
  console.log(activeComId);

  const { serRefetch } = useFilter('companyInfoId', activeComId);
  const serPost = process.env.REACT_APP_SER_POST_API_KEY;

  const onSubmit = async (data) => {
    data.CompanyInfoId = activeComId;
    data.serType = data.serType.value;
    data.serviceClose = data.serviceClose.value;
    data.location = data.location.value;
    data.serImg1 = data.serImg1.publicId;
    data.serImg2 = data.serImg2.publicId;
    data.serImg3 = data.serImg3.publicId;
    data.serImg4 = data.serImg4.publicId;
    console.log(data);

    const res = await fetch(serPost, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json',
      },
    });

    const resData = await res.json();
    console.log(resData);
    toast.info('The created service will be displayed soon', {
      progress: undefined,
      toastId: 'uploadService',
    });
    resData && serRefetch();
    navigate('/service_dashboard');
  };

  return (
    <div className="service-dash-ctn">
      <SeekerSidebar />
      <div className="service-dash">
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
                  placeholder={
                    <p className="upload-ser-tag-placeholder">
                      Select category
                    </p>
                  }
                  isRequired={true}
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
                  {...register('serviceOpen', {
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
                  name="serviceClose"
                  control={control}
                  items={closingDays}
                  isMulti={false}
                  placeholder={
                    <p className="upload-ser-tag-placeholder">
                      Select closing days
                    </p>
                  }
                  isRequired={true}
                />
              </div>
              <div className="upload-ser-input-ctn">
                <label htmlFor="serOpen" className="upload-ser-label-ctn">
                  <img
                    src={locationIcon}
                    alt="label icon"
                    className="upload-ser-label-icon"
                  />
                  <p className="upload-ser-label-title">Location</p>
                </label>
                <UploadSelect
                  name="location"
                  control={control}
                  items={locations}
                  isMulti={false}
                  placeholder={
                    <p className="upload-ser-tag-placeholder">
                      Select location
                    </p>
                  }
                  isRequired={true}
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
                  {...register('serviceDetails', {
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
                <p className="uploadDm">Please upload images under 1MB</p>
                <div className="upload-ser-img-ctn">
                  {/* <RegisterUpload
                    isTypeImg={true}
                    uploadPlaceholderImg={uploadPlaceholderUp}
                    changePlaceholderText={true}
                    getFiles={null}
                    setValue={setValue}
                    setError={setError}
                    clearErrors={clearErrors}
                    {...register(`serImg`, {
                      required: true,
                    })}
                    ref={null}
                  /> */}
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
          <div className="combo-btn-ctn">
            <button className="combo-btn">Upload</button>
            {/* <button className="combo-btn combo-btn-two">Save as draft</button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadService;
