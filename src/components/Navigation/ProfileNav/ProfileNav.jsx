import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProfileNav.css';
import brandLogo from '../../../images/brand-logo.png';
import profile from '../../../images/profile.png';
import hamburgerButton from '../../../images/svg/bytesize_menu.svg';
import closeButton from '../../../images/svg/radix-icons_cross-circled.svg';
import { navData } from '../navData';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';

const ProfileNav = () => {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const hamburgerButtonRef = useRef();
  const hideHamburgerMenu = (e) => {
    if (!e.target.classList.contains('nav-link')) {
      setShowHamburgerMenu(false);
    } else if (e.target.classList.contains('nav-link')) {
      setIsClicked(true);
    }
  };
  useOnClickOutside(hamburgerButtonRef, hideHamburgerMenu);

  useEffect(() => {
    if (showHamburgerMenu && !isClicked) {
      document.querySelector('body').classList.add('stop-scroll');
    } else {
      document.querySelector('body').classList.remove('stop-scroll');
    }
  }, [showHamburgerMenu, isClicked]);

  return (
    <div className="profile-nav">
      <div className="navbar">
        <div className="nav-brand-logo-ctn">
          <img
            src={brandLogo}
            alt="new-market-dhaka logo"
            className="nav-brand-logo"
          />
        </div>
        <div>
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
        </div>
        <div className="profile-nav-user-ctn">
          <div className="profile-nav-image-ctn">
            <img src={profile} alt="profile" className="profile-nav-image" />
          </div>
          <p className="profile-nav-name">Monica</p>
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
    </div>
  );
};

export default ProfileNav;
