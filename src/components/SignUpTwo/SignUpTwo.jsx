import React from "react";
import sign from "../../images/sign.png";
import "./SignUpTwo.css";

function SignUpTwo() {
  return (
    <div className="sign-up-page">
      <img
        src={sign}
        alt=""
        className="
        sign-up-img"
      />
      <div className="right-side">
        <div className="signup-header">
          <div className="sign-up">
            <h2>Sign Up</h2>
          </div>
        </div>
        <div>
          <form className="location-form">
            <div>
            <select name="location" id="location">
              <option>Bangladesh</option>
              <option>USA</option>
              <option>UK</option>
              <option>India</option>
            </select>
            <input type="tel" />
            </div>
            <button className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpTwo;
