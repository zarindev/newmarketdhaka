import { useState, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/AuthProvider';
import { formatError } from '../../functions/formatString';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import downArrow from '../../images/svg/arrow-down.svg';

const ProfileBtn = () => {
  const [showProfileDrop, setShowProfileDrop] = useState(false);
  const navigate = useNavigate();

  const btnWrapperRef = useRef(null);
  useOnClickOutside(btnWrapperRef, () => setShowProfileDrop(false));

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

  return (
    <>
      {user !== null && Object.keys(user).length !== 0 ? (
        <div ref={btnWrapperRef}>
          <div
            className={
              showProfileDrop ? 'profileBtn profileBtnActive' : 'profileBtn'
            }
            onClick={() => setShowProfileDrop(!showProfileDrop)}
          >
            <p>Profile</p>
            <img src={downArrow} alt="down-arrow" />
          </div>
          <ul
            className={
              showProfileDrop ? 'profileDrop profileDropActive' : 'profileDrop'
            }
          >
            <li className="profileLink">Settings</li>
            <li className="profileLink" onClick={handleSignout}>
              Sign out
            </li>
          </ul>
        </div>
      ) : (
        <li>
          <NavLink to="/sign_in" className="profileBtn">
            Sign in
          </NavLink>
        </li>
      )}
    </>
  );
};

export default ProfileBtn;
