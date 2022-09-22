import './Navbar.css';
import BottomLinks from './BottomLinks';

const BottomNav = () => {
  return (
    <div className="category-nav-ctn">
      <ul className="subLinks">
        <BottomLinks />
      </ul>
    </div>
  );
};

export default BottomNav;
