import React, { useState, useRef } from 'react';
import TopNav from '../../components/Navigation/TopNav/TopNav';
import profile from '../../images/profile.png';
import saveIcon from '../../images/svg/save.svg';
import profileIcon from '../../images/svg/Profile-red.svg';
import emailIcon from '../../images/svg/Email-red.svg';
import phoneIcon from '../../images/svg/Phone-red.svg';
import locationIcon from '../../images/svg/Location-red.svg';
import './ProfileEdit.css';
import { useDocTitle } from '../../hooks/useDocTitle';

const ProfileEdit = () => {
  useDocTitle();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');

  const nameRef = useRef('');
  const emailRef = useRef('');
  const phoneRef = useRef('');
  const locationRef = useRef('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <TopNav />
      <div className="edit-ctn">
        <div className="edit">
          <div className="profile-image-ctn">
            <img src={profile} alt="profile" className="profile-image" />
          </div>
          <div className="edit-items">
            <div className="edit-items-title-ctn">
              <div className="profile-styled-divider"></div>
              <p className="profile-title">Your Profile</p>
              <div className="profile-edit-ctn">
                <img src={saveIcon} alt="save" className="profile-edit-icon" />
                <p className="profile-edit-text">Save</p>
              </div>
            </div>
            <form className="edit-form" onSubmit={handleSubmit}>
              <div className="edit-form-item">
                <label className="profile-label">
                  <img
                    src={profileIcon}
                    alt="profile"
                    className="profile-label-icon"
                  />
                  <p className="profile-label-text">Full Name</p>
                </label>
                <input
                  type="text"
                  className="edit-form-input"
                  placeholder="Full Name"
                  ref={nameRef}
                  onChange={() => setName(nameRef.current.value)}
                />
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
                  ref={emailRef}
                  onChange={() => setEmail(emailRef.current.value)}
                />
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
                  ref={phoneRef}
                  onChange={() => setPhone(phoneRef.current.value)}
                />
              </div>
              <div className="edit-form-item">
                <label className="profile-label">
                  <img
                    src={locationIcon}
                    alt="location"
                    className="profile-label-icon"
                  />
                  <p className="profile-label-text">Location Information</p>
                </label>
                <input
                  type="text"
                  className="edit-form-input"
                  placeholder="Location Information"
                  ref={locationRef}
                  onChange={() => setLocation(locationRef.current.value)}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileEdit;
