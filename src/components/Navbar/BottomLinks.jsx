import React from "react";
import { NavLink } from "react-router-dom";

const bottomLinks = [
  { id: 1, label: "Home", url: "/" },
  { id: 2, label: "About Us", url: "/about_us" },
  { id: 3, label: "Contact Us", url: "/contact_us" },
];

const BottomLinks = ({ setIsMobile }) => {
  return (
    <>
      {bottomLinks.map((item) => (
        <li key={item.id}>
          <NavLink
            to={item.url}
            className="nav-link"
            onClick={() => setIsMobile(false)}
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </>
  );
};

export default BottomLinks;
