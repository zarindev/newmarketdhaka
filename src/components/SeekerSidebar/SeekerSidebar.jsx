import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SeekerSidebar.css';
import brandLogo from '../../images/brand-logo.png';
import seekerSwitchIcon from '../../images/seeker-switch.png';
import { adminData, comData } from './sidebarData';
import { useAuth } from '../../context/AuthProvider';

const SeekerSidebar = () => {
  const { user } = useAuth();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (
      user !== null &&
      Object.keys(user).length !== 0 &&
      user.uid === 'TJyklprfkah56Y1FtrnTmXQmh8i2'
    ) {
      setData(adminData);
    } else {
      setData(comData);
    }
  }, [user]);

  return (
    <div className="seeker-sidebar">
      <Link to="/">
        <img src={brandLogo} alt="brand logo" className="nav-brand-logo" />
      </Link>
      {data.map((item) => {
        return (
          <Link to={item.link} key={item.id}>
            <div className="seeker-item">
              <img
                src={item.icon}
                alt="services"
                className="seeker-item-icon"
              />
              <p className="seeker-item-text">{item.label}</p>
            </div>
          </Link>
        );
      })}
      <div className="seeker-item seeker-bottom-item">
        <img
          src={seekerSwitchIcon}
          alt="services"
          className="seeker-item-icon"
        />
        <p className="seeker-item-text">Swtich to seeker mode</p>
      </div>
    </div>
  );
};

export default SeekerSidebar;
