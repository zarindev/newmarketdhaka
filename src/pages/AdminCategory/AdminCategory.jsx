import { useState } from 'react';
import { useForm } from 'react-hook-form';
import SeekerSidebar from '../../components/SeekerSidebar/SeekerSidebar';
import { useDocTitle } from '../../hooks/useDocTitle';
import './AdminCategory.css';
import categoryIcon from '../../images/subfolder 1.png';
import RoundedBtn from '../../components/Button/RoundedBtn';
import RegisterUpload from '../Register/elements/RegisterUpload';
import createServiceUp from '../../images/svg/upload 1.svg';
import Services from '../../components/Services/Services';
import { servicesData } from '../../components/Services/servicesData';

const AdminCategory = () => {
  useDocTitle();

  const {
    register,
    formState: { errors },
    setValue,
    setError,
    clearErrors,
    handleSubmit,
  } = useForm({ mode: 'all' });

  const onSubmit = (data) => {
    console.log(data);
  };

  const [dataLength, setDataLength] = useState(servicesData?.length);
  const [isClicked, setIsClicked] = useState(false);

  const addCategory = () => {
    setDataLength(0);
    setIsClicked(true);
  };

  const goBack = () => {
    setDataLength(servicesData?.length);
    setIsClicked(false);
  };

  return (
    <div className="service-dash-ctn category-dash-ctn">
      <SeekerSidebar />
      <div className="service-dash">
        {dataLength > 0 ? (
          <div className="category-dash-heading">
            <div className="created-ser-heading">
              <p className="created-ser-title">All Services</p>
              <div className="created-ser-styled-divider"></div>
              <RoundedBtn text="Add Service" onClick={addCategory} />
            </div>
            <Services serData={servicesData} />
          </div>
        ) : (
          <div className="create-category-ctn">
            {isClicked && (
              <RoundedBtn
                btnClass="create-category-back-btn"
                text="Go Back"
                onClick={goBack}
              />
            )}
            <form className="create-category" onSubmit={handleSubmit(onSubmit)}>
              <div className="create-category-heading">
                <img
                  src={categoryIcon}
                  alt="category"
                  className="create-category-heading-icon"
                />
                <p className="create-category-heading-text">Add Category</p>
              </div>
              <input
                type="text"
                className="register-form-input"
                placeholder="Add Category"
                {...register('adminCategory', {
                  required: 'Category is required',
                })}
              />
              {errors.adminCategory && (
                <p className="error-message">{errors.adminCategory?.message}</p>
              )}
              <input
                type="text"
                className="register-form-input"
                placeholder="Add Sub Category"
                {...register('adminSubCategory', {
                  required: 'Sub Category is required',
                })}
              />
              {errors.adminSubCategory && (
                <p className="error-message">
                  {errors.adminSubCategory?.message}
                </p>
              )}
              <RegisterUpload
                isTypeImg={true}
                uploadPlaceholderImg={createServiceUp}
                changePlaceholderText={true}
                getFiles={null}
                setValue={setValue}
                setError={setError}
                clearErrors={clearErrors}
                {...register(`serImg`, {
                  required: true,
                })}
                ref={null}
              />
              <RoundedBtn text="Save Category" />
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminCategory;
