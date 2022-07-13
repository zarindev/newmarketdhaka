import React from 'react';
import network from '../../../images/network.png';
import { Link } from 'react-router-dom';
import './TopNav.css';

function TopNav() {
  return (
    <div className="navbar">
      <div>
        <img src={network} alt="" />
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
        </ul>
      </div>
      <div>
        <Link to="/register">
          <button className="nav-btn">Register Your Service</button>
        </Link>
      </div>
    </div>
  );
}

export default TopNav;
