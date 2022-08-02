import { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import brandLogo from '../../../images/brand-logo.png';
import brandLogoScrolled from '../../../images/brand-logo-transparent.png';
import './TopNav.css';
import burgerBtn from '../../../images/svg/bytesize_menu.svg';
import closeButton from '../../../images/svg/radix-icons_cross-circled.svg';
import { navData } from '../navData';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';

const TopNav = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const mobileBtnRef = useRef(null);
  const hideMobileMenu = (e) => {
    if (!e.target.classList.contains('nav-link')) {
      setShowMobileMenu(false);
    } else if (e.target.classList.contains('nav-link')) {
    }
  };
  useOnClickOutside(mobileBtnRef, hideMobileMenu);

  const mobileBtnVar = {
    open: { rotate: 90 },
    closed: { rotate: 0 },
  };

  return (
    <div className="navbar-ctn">
      <div className="navbar">
        <Link to="/" className="nav-brand-link">
          <img
            src={brandLogo}
            alt="new-market-dhaka logo"
            className="nav-brand-logo"
          />
        </Link>
        <ul
          className={`${
            showMobileMenu ? 'navlinks navlinks-mobile' : 'navlinks'
          }`}
        >
          {navData.map((item, index) => {
            return (
              <li
                className="nav-link-ctn"
                key={index}
                onClick={() => setShowMobileMenu(false)}
              >
                <NavLink to={item.link} className="nav-link">
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div>
          <Link to="/register">
            <button className="nav-btn">Register Your Service</button>
          </Link>
        </div>
        <motion.div
          className="mobile-btn-ctn"
          ref={mobileBtnRef}
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          animate={showMobileMenu ? 'open' : 'close'}
          variants={mobileBtnVar}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          {showMobileMenu ? (
            <img src={closeButton} alt="mobile-close" className="mobile-btn" />
          ) : (
            <img src={burgerBtn} alt="mobile-open" className="mobile-btn" />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default TopNav;
