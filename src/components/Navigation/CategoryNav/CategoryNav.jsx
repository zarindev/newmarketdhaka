import { useState } from 'react';
import './CategoryNav.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../../../context/AuthProvider';
import { formatError } from '../../../functions/formatString';
import { useFind } from '../../../hooks/useFind';

const CategoryNav = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();

  // signout
  const { user, signout } = useAuth();

  const handleSignout = async () => {
    try {
      await signout();
      user && navigate('/');
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = formatError(errorCode);
      toast.error(`${errorMessage}`, {
        progress: undefined,
        toastId: 'signout',
      });
      console.log(errorCode);
    }
  };

  // dynamic links for active/inactive user
  const { activeCom } = useFind();
  const activeComId = activeCom.id;

  return (
    <div className="category-nav-ctn">
      <ul className={showMobileMenu ? 'navlinks navlinks-mobile' : 'navlinks'}>
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/about_us" className="nav-link">
          About Us
        </NavLink>
        <NavLink to="/contact_us" className="nav-link">
          Contact Us
        </NavLink>
        {activeComId && (
          <NavLink to="/service_dashboard" className="nav-link">
            Dashboard
          </NavLink>
        )}
        {user !== null && Object.keys(user).length !== 0 ? (
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
    </div>
  );
};

export default CategoryNav;
