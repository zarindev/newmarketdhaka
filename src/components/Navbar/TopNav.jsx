import { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import brandLogo from '../../images/brand-logo.webp';
import SearchBox from '../SearchBox/SearchBox';
import PostBtn from './PostBtn';
import MobileBtn from './MobileBtn';
import ProfileBtn from './ProfileBtn';
import BottomLinks from './BottomLinks';

const TopNav = () => {
  const [isMobile, setIsMobile] = useState(false);

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
        <div className="navLinks">
          <SearchBox />
          <ProfileBtn />
        </div>
        <ul
          className={isMobile ? 'mobileLinks mobileLinksActive' : 'mobileLinks'}
        >
          <BottomLinks setIsMobile={setIsMobile} />
          <PostBtn />
        </ul>
        <PostBtn />
        <MobileBtn isMobile={isMobile} setIsMobile={setIsMobile} />
      </div>
    </div>
  );
};

export default TopNav;
