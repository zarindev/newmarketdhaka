import { useState, useEffect } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import brandLogo from "../../images/brand-logo.png";
import SearchBox from "../SearchBox/SearchBox";
import PostBtn from "./PostBtn";
import MobileBtn from "./MobileBtn";
import ProfileBtn from "./ProfileBtn";
import BottomLinks from "./BottomLinks";

const TopNav = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    isMobile
      ? body.classList.add("controlOverflowY")
      : body.classList.remove("controlOverflowY");
    return () => body.classList.remove("controlOverflowY");
  }, [isMobile]);

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
          className={isMobile ? "mobileLinks mobileLinksActive" : "mobileLinks"}
        >
          <BottomLinks setIsMobile={setIsMobile} />
        </ul>
        <PostBtn />
        <MobileBtn isMobile={isMobile} setIsMobile={setIsMobile} />
      </div>
    </div>
  );
};

export default TopNav;
