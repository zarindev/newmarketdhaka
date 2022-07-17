import React, { useState } from 'react';
import network from '../../../images/network.png';
import { Link } from 'react-router-dom';
import './TopNav.css';
import hamburgerButton from '../../../images/svg/bytesize_menu.svg';
import closeButton from '../../../images/svg/radix-icons_cross-circled.svg';

function TopNav() {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  return (
    <div className="navbar">
      <div>
        <img src={network} alt="network logo" className="brand-logo" />
      </div>
      <div>
        <ul
          className={
            showHamburgerMenu ? 'navlinks navlinks-hamburger' : 'navlinks'
          }
        >
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
        </ul>
      </div>
      <div>
        <Link to="/register">
          <button className="nav-btn">Register Your Service</button>
        </Link>
      </div>
      <div
        className="hamburger-ctn"
        onClick={() => setShowHamburgerMenu(!showHamburgerMenu)}
      >
        {showHamburgerMenu ? (
          <img
            src={closeButton}
            alt="hamburger-close"
            className="hamburger-close-btn"
          />
        ) : (
          <img
            src={hamburgerButton}
            alt="hamburger-open"
            className="hamburger-open-btn"
          />
        )}
      </div>
    </div>
  );
}

export default TopNav;
