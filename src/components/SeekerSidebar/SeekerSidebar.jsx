import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './SeekerSidebar.css';
import brandLogo from '../../images/brand-logo.png';
import seekerSwitchIcon from '../../images/seeker-switch.png';
import { adminData, comData } from './sidebarData';
import { useAuth } from '../../context/AuthProvider';
import PlaceholderLoading from '../Loading/PlaceholderLoading';

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
        : user?.uid === 'TJyklprfkah56Y1FtrnTmXQmh8i2'
        ? adminData.map((item) => {
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
          })
        : comData.map((item) => {
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
