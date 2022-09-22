import { useState, useRef } from 'react';
import './TopNav.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import brandLogo from '../../../images/brand-logo.webp';
import burgerBtn from '../../../images/svg/bytesize_menu.svg';
import closeButton from '../../../images/svg/radix-icons_cross-circled.svg';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';
import { useAuth } from '../../../context/AuthProvider';
import SearchBox from '../../SearchBox/SearchBox';

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

  const { user } = useAuth();

  const notify = () => {
    toast.info(`You need to be signed in for registering services`, {
      progress: undefined,
      toastId: 'registration',
    });
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
          className={showMobileMenu ? 'navlinks navlinks-mobile' : 'navlinks'}
        >
          <SearchBox />
        </ul>
        {user !== null &&
        Object.keys(user).length !== 0 &&
        user.uid === 'TJyklprfkah56Y1FtrnTmXQmh8i2' ? (
          <Link to="/admin_panel">
            <button className="nav-btn">Admin Pannel</button>
          </Link>
        ) : user !== null &&
          Object.keys(user).length !== 0 &&
          user.uid !== 'TJyklprfkah56Y1FtrnTmXQmh8i2' ? (
          <Link to="/register">
            <button className="nav-btn">Post Your Need</button>
          </Link>
        ) : (
          <button className="nav-btn" onClick={notify}>
            Post Your Need
          </button>
        )}
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
