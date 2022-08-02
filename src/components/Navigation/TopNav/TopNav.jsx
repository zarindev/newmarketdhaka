import { useState, useRef, useEffect } from 'react';
import brandLogo from '../../../images/brand-logo.png';
import { Link } from 'react-router-dom';
import './TopNav.css';
import hamburgerButton from '../../../images/svg/bytesize_menu.svg';
import closeButton from '../../../images/svg/radix-icons_cross-circled.svg';
import { navData } from '../navData';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';

function TopNav() {
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
    <div className="navbar">
      <div className="nav-brand-logo-ctn">
        <img
          src={brandLogo}
          alt="new-market-dhaka logo"
          className="nav-brand-logo"
        />
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
