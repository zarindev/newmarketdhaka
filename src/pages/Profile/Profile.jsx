import { Link } from "react-router-dom";
import profileLogo from "../../images/service-logo.png";
import profileEditIcon from "../../images/svg/user-edit.svg";
import profileIcon from "../../images/svg/Profile-red.svg";
import emailIcon from "../../images/svg/Email-red.svg";
import phoneIcon from "../../images/svg/Phone-red.svg";
import locationIcon from "../../images/svg/Location-red.svg";
import licenseIcon from "../../images/svg/license-key.svg";
import binIcon from "../../images/svg/bin-number.svg";
import "./Profile.css";
import SeekerSidebar from "../../components/SeekerSidebar/SeekerSidebar";
import { useDocTitle } from "../../hooks/useDocTitle";
import { useFind } from "../../hooks/useFind";
import Loading from "../../components/Loading/Loading";

const Profile = () => {
  useDocTitle();

  const { activeUser, serIsLoading } = useFind();
  console.log(activeUser);

  const { companyName, email, phoneNumber, location, binNumber, licenseKey } =
    activeUser.companyInfo;

  return (
    <div className="service-dash-ctn profile-ctn">
      <SeekerSidebar />
      {serIsLoading && Object.keys(activeUser)?.length === 0 ? (
        <Loading color="#ce2d4f" size={115} />
      ) : (
        <div className="service-dash">
          <div className="profile-image-ctn">
            <img
              src={profileLogo}
              alt="profile"
              className="profile-image"
              loading="lazy"
            />
          </div>
          <div className="profile-items">
            <div className="profile-title-ctn">
              <div className="profile-styled-divider"></div>
              <p className="profile-title">Company Profile</p>
              <Link to="/profile/edit_profile" className="profileEditBtn">
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
                      src={profileIcon}
                      alt="profile"
                      className="profile-label-icon"
                    />
                    <p className="profile-label-text">Name</p>
                  </label>
                  <p className="profile-info">{companyName}</p>
                </div>
                <div className="profile-content">
                  <label className="profile-label">
                    <img
                      src={phoneIcon}
                      alt="phone"
                      className="profile-label-icon"
                    />
                    <p className="profile-label-text">Phone Number</p>
                  </label>
                  <p className="profile-info">{phoneNumber}</p>
                </div>
              </div>
              <div className="profile-content-right">
                <div className="profile-content">
                  <label className="profile-label">
                    <img
                      src={emailIcon}
                      alt="email"
                      className="profile-label-icon"
                    />
                    <p className="profile-label-text">Email</p>
                  </label>
                  <p className="profile-info">{email}</p>
                </div>
                <div className="profile-content">
                  <label className="profile-label">
                    <img
                      src={locationIcon}
                      alt="location"
                      className="profile-label-icon"
                    />
                    <p className="profile-label-text">Location Info</p>
                  </label>
                  <p className="profile-info">{location}</p>
                </div>
              </div>
            </div>
            <div className="profile-title-ctn">
              <div className="profile-styled-divider"></div>
              <p className="profile-title">Company Details</p>
            </div>
            <div className="profile-info-ctn">
              <div className="profile-content-left">
                <div className="profile-content">
                  <label className="profile-label">
                    <img
                      src={licenseIcon}
                      alt="profile"
                      className="profile-label-icon"
                    />
                    <p className="profile-label-text">License Key</p>
                  </label>
                  <p className="profile-info">{licenseKey}</p>
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
                    <p className="profile-label-text">BIN Number</p>
                  </label>
                  <p className="profile-info">{binNumber}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
