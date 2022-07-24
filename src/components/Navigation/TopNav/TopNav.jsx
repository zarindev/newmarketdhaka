import React, { useState, useRef } from 'react';
import network from '../../../images/network.png';
import { Link } from 'react-router-dom';
import './TopNav.css';
import hamburgerButton from '../../../images/svg/bytesize_menu.svg';
import closeButton from '../../../images/svg/radix-icons_cross-circled.svg';
import { navData } from '../navData';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';

function TopNav() {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const hamburgerButtonRef = useRef();
  const hideHamburgerMenu = (e) => {
    if (!e.target.classList.contains('nav-link')) {
      setShowHamburgerMenu(false);
    }
  };
  useOnClickOutside(hamburgerButtonRef, hideHamburgerMenu);

  return (
    <div className="navbar">
      <div>
        <img src={network} alt="network logo" className="brand-logo" />
      </div>
      <ul
        className={
          showHamburgerMenu ? 'navlinks navlinks-hamburger' : 'navlinks'
        }
      >
        {navData.map((item, index) => {
          return (
            <li className="nav-link-ctn" key={index}>
              <Link to={item.link} className="nav-link">
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <div>
        <Link to="/register">
          <button className="nav-btn">Register Your Service</button>
        </Link>
      </div>
      <div
        className="hamburger-ctn"
        onClick={() => setShowHamburgerMenu(!showHamburgerMenu)}
        ref={hamburgerButtonRef}
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
