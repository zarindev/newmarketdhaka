import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/AuthProvider';

const notify = () => {
  toast.info(`You need to be signed in for posting services`, {
    progress: undefined,
    toastId: 'registration',
  });
};

const PostBtn = () => {
  const { user } = useAuth();
  return (
    <>
      {user !== null &&
      Object.keys(user).length !== 0 &&
      user.uid === 'TJyklprfkah56Y1FtrnTmXQmh8i2' ? (
        <Link to="/admin_panel">
          <button className="nav-btn">Admin Pannel</button>
        </Link>
      ) : user !== null &&
        Object.keys(user).length !== 0 &&
        user.uid !== 'TJyklprfkah56Y1FtrnTmXQmh8i2' ? (
        <Link to="/register">
          <button className="nav-btn">Post Your Need</button>
        </Link>
      ) : (
        <button className="nav-btn" onClick={notify}>
          Post Your Need
        </button>
      )}
    </>
  );
};

export default PostBtn;
