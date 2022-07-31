import React from 'react';
import { Link } from 'react-router-dom';
import ProfileNav from '../../components/Navigation/ProfileNav/ProfileNav';
import profile from '../../images/profile.png';
import profileEditIcon from '../../images/svg/user-edit.svg';
import profileIcon from '../../images/svg/Profile-red.svg';
import emailIcon from '../../images/svg/Email-red.svg';
import phoneIcon from '../../images/svg/Phone-red.svg';
import loginLogo from '../../images/Logo-google-icon-PNG 1.png';
import locationIcon from '../../images/svg/Location-red.svg';

import './Profile.css';
import { useDocTitle } from '../../hooks/useDocTitle';

const Profile = () => {
  useDocTitle();

  return (
    <>
      <ProfileNav />
      <div className="profile-ctn">
        <div className="profile">
          <div className="profile-image-ctn">
            <img src={profile} alt="profile" className="profile-image" />
          </div>
          <div className="profile-items">
            <div className="profile-title-ctn">
              <div className="profile-styled-divider"></div>
              <p className="profile-title">Your Profile</p>
              <Link to="/profile/edit_profile">
                <div className="profile-edit-ctn">
                  <img
                    src={profileEditIcon}
                    alt="profile-edit"
                    className="profile-edit-icon"
                  />
                  <p className="profile-edit-text">Edit Profile</p>
                </div>
              </Link>
            </div>
            <div className="profile-info-ctn">
              <div className="profile-content-left">
                <div className="profile-content">
                  <label className="profile-label">
                    <img
                      src={profileIcon}
                      alt="profile"
                      className="profile-label-icon"
                    />
                    <p className="profile-label-text">Full Name</p>
                  </label>
                  <p className="profile-info">Monica Amberstone</p>
                </div>
                <div className="profile-content">
                  <label className="profile-label">
                    <img
                      src={phoneIcon}
                      alt="phone"
                      className="profile-label-icon"
                    />
                    <p className="profile-label-text">Phone Number</p>
                  </label>
                  <p className="profile-info">+8801753-807123</p>
                </div>
                <div className="profile-content">
                  <label className="profile-label">
                    <img
                      src={locationIcon}
                      alt="location"
                      className="profile-label-icon"
                    />
                    <p className="profile-label-text">Location Information</p>
                  </label>
                  <p className="profile-info">
                    2333 Overlook Ct Frazier Park, California(CA), 93222
                  </p>
                </div>
              </div>
              <div className="profile-content-right">
                <div className="profile-content">
                  <label className="profile-label">
                    <img
                      src={emailIcon}
                      alt="email"
                      className="profile-label-icon"
                    />
                    <p className="profile-label-text">Email</p>
                  </label>
                  <p className="profile-info">monica.amb95@gmail.com</p>
                </div>
                <div className="profile-content">
                  <label className="profile-label">
                    <p className="profile-label-text">Log in via</p>
                  </label>
                  <button className="profile-login-btn">
                    <img
                      src={loginLogo}
                      alt="login"
                      className="profile-login-image"
                    />
                    <p className="profile-login-text">Google</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
