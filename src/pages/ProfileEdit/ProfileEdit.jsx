import React from 'react';
import ProfileNav from '../../components/Navigation/ProfileNav/ProfileNav';
import profile from '../../images/profile.png';
import saveIcon from '../../images/svg/save.svg';
import profileEditIcon from '../../images/svg/user-edit.svg';
import profileIcon from '../../images/svg/Profile-red.svg';
import emailIcon from '../../images/svg/Email-red.svg';
import phoneIcon from '../../images/svg/Phone-red.svg';
import locationIcon from '../../images/svg/Location-red.svg';
import './ProfileEdit.css';

const ProfileEdit = () => {
  return (
    <>
      <ProfileNav />
      <div className="edit-ctn">
        <div className="edit">
          <div className="profile-image-ctn">
            <img src={profile} alt="profile" className="profile-image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileEdit;
