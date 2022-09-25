import './UserProfile.css';
import { Link } from 'react-router-dom';
import TopNav from '../../components/Navbar/TopNav';
import { useDocTitle } from '../../hooks/useDocTitle';
import BottomNav from '../../components/Navbar/BottomNav';
import profileEditIcon from '../../images/svg/user-edit.svg';
import emailIcon from '../../images/svg/Email-red.svg';
import binIcon from '../../images/svg/bin-number.svg';
import { useAuth } from '../../context/AuthProvider';
import Loading from '../../components/Loading/Loading';

const UserProfile = () => {
  useDocTitle();

  const { user } = useAuth();

  return (
    <>
      <TopNav />
      <BottomNav />
      <div className="service-dash-ctn profile-ctn">
        <div className="service-dash userProf">
          {user === null && Object.keys(user)?.length === 0 ? (
            <Loading color="#ce2d4f" size={115} />
          ) : (
            <div className="profile-items">
              <div className="profile-title-ctn">
                <div className="profile-styled-divider"></div>
                <p className="profile-title">My Profile</p>
                <Link
                  to="/user_profile/edit_profile"
                  className="profileEditLink"
                >
                  <div className="profile-edit-ctn">
                    <img
                      src={profileEditIcon}
                      alt="profile-edit"
                      className="profile-edit-icon"
                    />
                    <p className="profile-edit-text">Edit Profile</p>
                  </div>
                </Link>
              </div>
              <div className="profile-info-ctn">
                <div className="profile-content-left">
                  <div className="profile-content">
                    <label className="profile-label">
                      <img
                        src={emailIcon}
                        alt="profile"
                        className="profile-label-icon"
                      />
                      <p className="profile-label-text">Email</p>
                    </label>
                    <p className="profile-info">{user?.email}</p>
                  </div>
                </div>
                <div className="profile-content-right">
                  <div className="profile-content">
                    <label className="profile-label">
                      <img
                        src={binIcon}
                        alt="email"
                        className="profile-label-icon"
                      />
                      <p className="profile-label-text">Password</p>
                    </label>
                    <p className="profile-info">{'********'}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserProfile;
