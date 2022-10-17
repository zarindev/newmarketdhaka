import { useState } from "react";
import "./navbar.css";
import BottomLinks from "./BottomLinks";

const BottomNav = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="category-nav-ctn">
      <ul className="subLinks">
        <BottomLinks setIsMobile={setIsMobile} />
      </ul>
    </nav>
  );
};

export default BottomNav;
