import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import profileLogo from '../../images/service-logo.png';
import saveIcon from '../../images/svg/save.svg';
import profileIcon from '../../images/svg/Profile-red.svg';
import emailIcon from '../../images/svg/Email-red.svg';
import phoneIcon from '../../images/svg/Phone-red.svg';
import locationIcon from '../../images/svg/Location-red.svg';
import licenseIcon from '../../images/svg/license-key.svg';
import binIcon from '../../images/svg/bin-number.svg';
import './ProfileEdit.css';
import SeekerSidebar from '../../components/SeekerSidebar/SeekerSidebar';
import { useDocTitle } from '../../hooks/useDocTitle';
import { useFetch } from '../../hooks/useFetch';

const ProfileEdit = () => {
  useDocTitle();

  const serviceApi = `https://jsonplaceholder.typicode.com/todos/`;
  const fetchedData = useFetch(serviceApi);

  const [preloadedValues, setPreloadedValues] = useState({
    companyName: '',
    email: '',
    phoneNumber: '',
    location: '',
    licenseKey: '',
    binNumber: '',
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    reset,
  } = useForm({ mode: 'all', defaultValues: preloadedValues });

  const [profileData, setProfileData] = useState({});
  const onSubmit = async (data) => {
    console.log(data);

    const res = await fetch(serviceApi, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; carset=UTF-8',
      },
    });

    const formData = await res.json();
    setProfileData(formData);
  };
  console.log(profileData);

  useEffect(() => {
    reset(preloadedValues);
  }, [reset, preloadedValues]);

  return (
    <div className="edit-ctn">
      <SeekerSidebar />
      <div className="edit">
        <div className="profile-image-ctn">
          <img src={profileLogo} alt="profile" className="profile-image" />
        </div>
        <div className="edit-items">
          <form className="edit-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="edit-items-title-ctn">
              <div className="profile-styled-divider"></div>
              <p className="profile-title">Company Profile</p>
              <button className="profile-edit-ctn">
                <img src={saveIcon} alt="save" className="profile-edit-icon" />
                <p className="profile-edit-text">Save</p>
              </button>
            </div>
            <div className="edit-form-item">
              <label className="profile-label">
                <img
                  src={profileIcon}
                  alt="profile"
                  className="profile-label-icon"
                />
                <p className="profile-label-text">Name</p>
              </label>
              <input
                type="text"
                className="edit-form-input"
                placeholder="ex: Google"
                {...register('companyName', {
                  required: 'Company Name is required',
                })}
              />
              {errors.companyName && (
                <p className="error-message">{errors.companyName?.message}</p>
              )}
            </div>
            <div className="edit-form-item">
              <label className="profile-label">
                <img
                  src={emailIcon}
                  alt="email"
                  className="profile-label-icon"
                />
                <p className="profile-label-text">Email</p>
              </label>
              <input
                type="text"
                className="edit-form-input"
                placeholder="Email"
                {...register('email', {
                  required: 'Company Email is required',
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Please enter a valid email',
                  },
                })}
              />
              {errors.email && (
                <p className="error-message">{errors.email?.message}</p>
              )}
            </div>
            <div className="edit-form-item">
              <label className="profile-label">
                <img
                  src={phoneIcon}
                  alt="phone"
                  className="profile-label-icon"
                />
                <p className="profile-label-text">Phone Number</p>
              </label>
              <input
                type="text"
                className="edit-form-input"
                placeholder="Phone Number"
                {...register('phoneNumber', {
                  required: 'Company Phone Number is required',
                  pattern: {
                    value:
                      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
                    message: 'Please enter a valid phone number',
                  },
                })}
              />
              {errors.phoneNumber && (
                <p className="error-message">{errors.phoneNumber?.message}</p>
              )}
            </div>
            <div className="edit-form-item">
              <label className="profile-label">
                <img
                  src={locationIcon}
                  alt="location"
                  className="profile-label-icon"
                />
                <p className="profile-label-text">Location Info</p>
              </label>
              <input
                type="text"
                className="edit-form-input"
                placeholder="Location Info"
                {...register('location', {
                  required: 'Company Location Info is required',
                })}
              />
              {errors.location && (
                <p className="error-message">{errors.location?.message}</p>
              )}
            </div>
            <div className="edit-form-item">
              <label className="profile-label">
                <img
                  src={licenseIcon}
                  alt="email"
                  className="profile-label-icon"
                />
                <p className="profile-label-text">License Key</p>
              </label>
              <input
                type="text"
                className="edit-form-input"
                placeholder="Licence Key"
                {...register('licenseKey', {
                  required: 'Company License Key is required',
                })}
              />
              {errors.licenseKey && (
                <p className="error-message">{errors.licenseKey?.message}</p>
              )}
            </div>
            <div className="edit-form-item">
              <label className="profile-label">
                <img src={binIcon} alt="phone" className="profile-label-icon" />
                <p className="profile-label-text">BIN Number</p>
              </label>
              <input
                type="text"
                className="edit-form-input"
                placeholder="BIN Number"
                {...register('binNumber', {
                  required: 'Company BIN Number is required',
                })}
              />
              {errors.binNumber && (
                <p className="error-message">{errors.binNumber?.message}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
