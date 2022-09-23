import React from 'react';
import './UserProfile.css';
import { Link } from 'react-router-dom';
import TopNav from '../../components/Navbar/TopNav';
import { useDocTitle } from '../../hooks/useDocTitle';

const UserProfile = () => {
  useDocTitle();

  return (
    <>
      <TopNav />
      <div className="service-dash-ctn profile-ctn">
        <div className="service-dash">
          <img src="" alt="profile" className="profile-image" />
          <div className="profile-items">
            <div className="profile-title-ctn">
              <div className="profile-styled-divider"></div>
              <p className="profile-title">Company Profile</p>
              <Link to="/profile/edit_profile">
                <div className="profile-edit-ctn">
                  <img
                    src=""
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
                    <img src="" alt="profile" className="profile-label-icon" />
                    <p className="profile-label-text">Name</p>
                  </label>
                  <p className="profile-info">{}</p>
                </div>
                <div className="profile-content">
                  <label className="profile-label">
                    <img src="" alt="phone" className="profile-label-icon" />
                    <p className="profile-label-text">Phone Number</p>
                  </label>
                  <p className="profile-info">{}</p>
                </div>
              </div>
              <div className="profile-content-right">
                <div className="profile-content">
                  <label className="profile-label">
                    <img src="" alt="email" className="profile-label-icon" />
                    <p className="profile-label-text">Email</p>
                  </label>
                  <p className="profile-info">{}</p>
                </div>
                <div className="profile-content">
                  <label className="profile-label">
                    <img src="" alt="location" className="profile-label-icon" />
                    <p className="profile-label-text">Location Info</p>
                  </label>
                  <p className="profile-info">''</p>
                </div>
              </div>
            </div>
            <div className="profile-title-ctn">
              <div className="profile-styled-divider"></div>
              <p className="profile-title">Company Details</p>
            </div>
            <div className="profile-info-ctn">
              <div className="profile-content-left">
                <div className="profile-content">
                  <label className="profile-label">
                    <img src="" alt="profile" className="profile-label-icon" />
                    <p className="profile-label-text">License Key</p>
                  </label>
                  <p className="profile-info">{}</p>
                </div>
              </div>
              <div className="profile-content-right">
                <div className="profile-content">
                  <label className="profile-label">
                    <img src="" alt="email" className="profile-label-icon" />
                    <p className="profile-label-text">BIN Number</p>
                  </label>
                  <p className="profile-info">{}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
