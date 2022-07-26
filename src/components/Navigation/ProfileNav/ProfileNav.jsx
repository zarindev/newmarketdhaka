import React from 'react';
import { Link } from 'react-router-dom';
import './ProfileNav.css';
import network from '../../../images/network.png';
import profile from '../../../images/profile.png';

const ProfileNav = () => {
  return (
    <div className="profile-nav">
      <div className="navbar">
        <div className="nav-brand-logo-ctn">
          <img
            src={network}
            alt="new-market-dhaka logo"
            className="nav-brand-logo"
          />
        </div>
        <div>
          <ul className="navlinks">
            <li>
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about_us" className="nav-link">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact_us" className="nav-link">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/sign_up" className="nav-link">
                Sign in
              </Link>
            </li>
            <li>
              <Link to="/register">
                <button className="nav-btn">Register Your Service</button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="profile-nav-user-ctn">
          <div className="profile-nav-image-ctn">
            <img src={profile} alt="profile" className="profile-nav-image" />
          </div>
          <p className="profile-nav-name">Monica</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileNav;
