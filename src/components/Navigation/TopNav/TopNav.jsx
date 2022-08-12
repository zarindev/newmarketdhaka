import { useState, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import brandLogo from '../../../images/brand-logo.png';
import './TopNav.css';
import burgerBtn from '../../../images/svg/bytesize_menu.svg';
import closeButton from '../../../images/svg/radix-icons_cross-circled.svg';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';
import { useAuth } from '../../../context/AuthProvider';

const TopNav = () => {
  const navigate = useNavigate();

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

  // signout
  const { user, customUser, signout } = useAuth();
  const [catchError, setCatchError] = useState('');

  const handleSignout = async () => {
    try {
      await signout();
      user && navigate('/');
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setCatchError(errorMessage);
      console.log(catchError);
    }
  };

  customUser && console.log(customUser);

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
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about_us" className="nav-link">
            About Us
          </NavLink>
          <NavLink to="/contact_us" className="nav-link">
            Contact Us
          </NavLink>
          {user?.email || user?.displayName ? (
            <li className="nav-link" onClick={handleSignout}>
              Sign out
            </li>
          ) : (
            <NavLink to="/sign_in" className="nav-link">
              Sign in
            </NavLink>
          )}
          <NavLink to="/register" className="nav-link">
            Register
          </NavLink>
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
