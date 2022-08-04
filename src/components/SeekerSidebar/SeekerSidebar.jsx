import React from 'react';
import { Link } from 'react-router-dom';
import './SeekerSidebar.css';
import brandLogo from '../../images/brand-logo.png';
import seekerProfileIcon from '../../images/seeker-profile.png';
import seekerServicesIcon from '../../images/seeker-services.png';
import seekerSwitchIcon from '../../images/seeker-switch.png';

const SeekerSidebar = () => {
  return (
    <div className="seeker-sidebar">
      <img src={brandLogo} alt="brand logo" className="nav-brand-logo" />
      <div className="seeker-item">
        <img
          src={seekerServicesIcon}
          alt="services"
          className="seeker-item-icon"
        />
        <p className="seeker-item-text">My Services</p>
      </div>
      <Link to="/profile">
        <div className="seeker-item">
          <img
            src={seekerProfileIcon}
            alt="services"
            className="seeker-item-icon"
          />
          <p className="seeker-item-text">Profile</p>
        </div>
      </Link>
      <div className="seeker-item seeker-bottom-item">
        <img
          src={seekerSwitchIcon}
          alt="services"
          className="seeker-item-icon"
        />
        <p className="seeker-item-text">Swtich to seeker mode</p>
      </div>
    </div>
  );
};

export default SeekerSidebar;
