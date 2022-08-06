import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import SeekerSidebar from '../../components/SeekerSidebar/SeekerSidebar';
import './UploadService.css';
import supportIcon from '../../images/svg/customer-support.svg';
import categoryIcon from '../../images/svg/category.svg';
import subCategoryIcon from '../../images/svg/sub-category.svg';
import searchIcon from '../../images/svg/search_gray.svg';
import clockIcon from '../../images/svg/clock-red.svg';
import calendarIcon from '../../images/svg/calendar.svg';
import viewDetailsIcon from '../../images/svg/view-details.svg';
import { UpSerDays, UpSerTags } from './UpElements';
import UploadRight from './UploadRight';
import { dropImage } from './upSerData';

const UploadService = () => {
  const {
    register,
    formState: { errors },
    setValue,
    setError,
    clearErrors,
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
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
        <form className="upload-ser-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="upload-ser-left">
            <div className="upload-ser-input-ctn">
              <label htmlFor="service_name" className="upload-ser-label-ctn">
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
                {...register('serviceName', {
                  required: true,
                })}
              />
            </div>
            <div className="upload-ser-input-ctn">
              <label htmlFor="service_name" className="upload-ser-label-ctn">
                <img
                  src={categoryIcon}
                  alt="label icon"
                  className="upload-ser-label-icon"
                />
                <p className="upload-ser-label-title">Category</p>
              </label>
              <input
                type="text"
                className="register-form-input"
                placeholder="Search category"
                {...register('category', { required: true })}
              />
              <UpSerTags />
            </div>
            <div className="upload-ser-input-ctn">
              <label htmlFor="service_name" className="upload-ser-label-ctn">
                <img
                  src={subCategoryIcon}
                  alt="label icon"
                  className="upload-ser-label-icon"
                />
                <p className="upload-ser-label-title">Sub Category</p>
              </label>
              <input
                type="text"
                className="register-form-input"
                placeholder="Search sub category"
                {...register('subCategory', {
                  required: true,
                })}
              />
              <UpSerTags />
            </div>
            <div className="upload-ser-input-ctn">
              <label htmlFor="service_name" className="upload-ser-label-ctn">
                <img
                  src={clockIcon}
                  alt="label icon"
                  className="upload-ser-label-icon"
                />
                <p className="upload-ser-label-title">Opening Time</p>
              </label>
              <input
                type="date"
                className="register-form-input upload-ser-form-input-date"
                placeholder="Select opening time"
                {...register('openingTime', {
                  required: true,
                })}
              />
            </div>
            <div className="upload-ser-input-ctn">
              <label htmlFor="service_name" className="upload-ser-label-ctn">
                <img
                  src={calendarIcon}
                  alt="label icon"
                  className="upload-ser-label-icon"
                />
                <p className="upload-ser-label-title">Select Closing Days</p>
              </label>
              <UpSerDays />
            </div>
            <div className="upload-ser-input-ctn">
              <label htmlFor="service_name" className="upload-ser-label-ctn">
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
                {...register('addDetials', {
                  required: true,
                })}
              ></textarea>
            </div>
            <div className="upload-ser-btn-ctn">
              <button className="upload-ser-upload-btn">Upload</button>
              <button className="upload-ser-upload-btn">Save as draft</button>
            </div>
          </div>
          <div className="upload-ser-right">
            {dropImage.map((item) => {
              const { id } = item;
              return (
                <UploadRight
                  key={id}
                  setValue={setValue}
                  setError={setError}
                  clearErrors={clearErrors}
                  {...register(`serviceImg${id}`, {
                    required: true,
                  })}
                  ref={null}
                />
              );
            })}
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadService;
