import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

const PostBtn = () => {
  const { user } = useAuth();
  return (
    <>
      {user !== null &&
      Object.keys(user).length !== 0 &&
      user.uid === "TJyklprfkah56Y1FtrnTmXQmh8i2" ? (
        <Link to="/admin_panel">
          <button className="nav-btn">Admin Pannel</button>
        </Link>
      ) : user !== null &&
        Object.keys(user).length !== 0 &&
        user.uid !== "TJyklprfkah56Y1FtrnTmXQmh8i2" ? (
        <Link to="/service_dashboard/upload_service">
          <button className="nav-btn">Post Your Need</button>
        </Link>
      ) : (
        <Link to="/sign_in">
          <button className="nav-btn">Post Your Need</button>
        </Link>
      )}
    </>
  );
};

export default PostBtn;
