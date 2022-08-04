import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form';
import SeekerSidebar from '../../components/SeekerSidebar/SeekerSidebar';
import './UploadService.css';
import supportIcon from '../../images/svg/customer-support.svg';
import categoryIcon from '../../images/svg/category.svg';
import subCategoryIcon from '../../images/svg/sub-category.svg';
import searchIcon from '../../images/svg/search_gray.svg';
import clockIcon from '../../images/svg/clock-red.svg';
import calendarIcon from '../../images/svg/calendar.svg';
import viewDetailsIcon from '../../images/svg/view-details.svg';
import UploadTags from './UploadTags';

const UploadService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div className="upload-ser-ctn">
      <SeekerSidebar />
      <form className="upload-ser" onSubmit={handleSubmit(onSubmit)}>
        <div className="upload-ser-left">
          <div className="upload-ser-heading">
            <h4 className="upload-ser-title">
              Get Started Setting Up Services{' '}
            </h4>
            <p className="upload-ser-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor
              aliquam arcu tincidunt eros quis ut tristique iaculis consectetur.{' '}
            </p>
          </div>
          <div className="upload-ser-input-ctn">
            <label htmlFor="service_name" className="upload-ser-label-ctn">
              <p className="upload-ser-label-title">Service Name</p>
              <img
                src={supportIcon}
                alt="label icon"
                className="upload-ser-label-icon"
              />
            </label>
            <input
              type="text"
              className="upload-ser-input"
              placeholder="Service Name"
            />
          </div>
          <div className="upload-ser-input-ctn">
            <label htmlFor="service_name" className="upload-ser-label-ctn">
              <p className="upload-ser-label-title">Category</p>
              <img
                src={categoryIcon}
                alt="label icon"
                className="upload-ser-label-icon"
              />
            </label>
            <input
              type="text"
              className="upload-ser-input"
              placeholder="Search category"
            />
            <UploadTags />
          </div>
          <div className="upload-ser-input-ctn">
            <label htmlFor="service_name" className="upload-ser-label-ctn">
              <p className="upload-ser-label-title">Sub Category</p>
              <img
                src={subCategoryIcon}
                alt="label icon"
                className="upload-ser-label-icon"
              />
            </label>
            <input
              type="text"
              className="upload-ser-input"
              placeholder="Search sub category"
            />
            <UploadTags />
          </div>
          <div className="upload-ser-input-ctn">
            <label htmlFor="service_name" className="upload-ser-label-ctn">
              <p className="upload-ser-label-title">Opening Time</p>
              <img
                src={clockIcon}
                alt="label icon"
                className="upload-ser-label-icon"
              />
            </label>
            <input
              type="text"
              className="upload-ser-input"
              placeholder="Select opening time"
            />
          </div>
          <div className="upload-ser-input-ctn">
            <label htmlFor="service_name" className="upload-ser-label-ctn">
              <p className="upload-ser-label-title">Select Closing Days</p>
              <img
                src={calendarIcon}
                alt="label icon"
                className="upload-ser-label-icon"
              />
            </label>
          </div>
        </div>
        <div className="upload-ser-right">placeholder-right-side</div>
      </form>
    </div>
  );
};

export default UploadService;
