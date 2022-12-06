import "./seekersidebar.css";
import { Link, NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

// components import
import PlaceholderLoading from "../Loading/PlaceholderLoading";

// images import
import brandLogo from "../../images/brand-logo.png";
import seekerSwitchIcon from "../../images/seeker-switch.png";

// data import
import { adminData, comData } from "./sidebarData";
import { useAuth } from "../../context/AuthProvider";

const SeekerSidebar = () => {
  const { user } = useAuth();

  return (
    <div className="seeker-sidebar">
      <Link to="/">
        <img src={brandLogo} alt="brand logo" className="nav-brand-logo" />
      </Link>
      {Object.keys(user).length === 0
        ? Array.from({ length: 4 }).map((item) => {
            return (
              <div className="seeker-item" key={uuidv4()}>
                <PlaceholderLoading />
              </div>
            );
          })
        : user?.uid === "TJyklprfkah56Y1FtrnTmXQmh8i2"
        ? adminData.map((item) => {
            return (
              <NavLink to={item.link} key={item.id}>
                <div className="seeker-item">
                  <img
                    src={item.icon}
                    alt="services"
                    className="seeker-item-icon"
                  />
                  <p className="seeker-item-text">{item.label}</p>
                </div>
              </NavLink>
            );
          })
        : comData.map((item) => {
            return (
              <NavLink to={item.link} key={item.id}>
                <div className="seeker-item">
                  <img
                    src={item.icon}
                    alt="services"
                    className="seeker-item-icon"
                  />
                  <p className="seeker-item-text">{item.label}</p>
                </div>
              </NavLink>
            );
          })}
    </div>
  );
};

export default SeekerSidebar;
