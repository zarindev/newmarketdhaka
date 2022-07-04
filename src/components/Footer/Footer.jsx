import React from 'react';
import './Footer.css';
import logo from '../../images/svg/Network-Color 1.svg';
import facebookLogo from '../../images/svg/Facebook.svg';
import twitterLogo from '../../images/svg/Twitter.svg';
import instagramLogo from '../../images/svg/Instagram.svg';
import linkedInLogo from '../../images/svg/LinkedIn.svg';
import youtubeLogo from '../../images/svg/YouTube.svg';
import emailIcon from '../../images/svg/Email-black.svg';
import phoneIcon from '../../images/svg/Phone-black.svg';
import locationIcon from '../../images/svg/Location-black.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <div className="footer-logo-ctn">
            <img src={logo} alt="brand logo" className="footer-logo" />
          </div>
          <p className="footer-desc">
            Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
          </p>
          <div className="footer-social-links">
            <img
              src={facebookLogo}
              alt="facebook logo"
              className="footer-social-link"
            />
            <img
              src={twitterLogo}
              alt="twitter logo"
              className="footer-social-link"
            />
            <img
              src={instagramLogo}
              alt="instagram logo"
              className="footer-social-link"
            />
            <img
              src={linkedInLogo}
              alt="linkedIn logo"
              className="footer-social-link"
            />
            <img
              src={youtubeLogo}
              alt="youtube logo"
              className="footer-social-link"
            />
          </div>
          <div className="footer-contact-info-ctn">
            <div className="footer-contact-info">
              <img
                src={emailIcon}
                alt="email icon"
                className="footer-contact-icon"
              />
              <p className="footer-contact-address">contact@company.com</p>
            </div>
            <div className="footer-contact-info">
              <img
                src={phoneIcon}
                alt="phone icon"
                className="footer-contact-icon"
              />
              <p className="footer-contact-address">(414) 687 - 5892</p>
            </div>
            <div className="footer-contact-info">
              <img
                src={locationIcon}
                alt="location icon"
                className="footer-contact-icon"
              />
              <p className="footer-contact-address">
                794 Mcallister St San Francisco, 94102
              </p>
            </div>
          </div>
        </div>
        <div className="footer-links-ctn">
          <h4 className="footer-links-title">Links</h4>
          <ul className="footer-links">
            <li>Features</li>
            <li>Pricing</li>
            <li>Case studies</li>
            <li>Reviews</li>
            <li>Updates</li>
          </ul>
        </div>
        <div className="footer-services-ctn">
          <h4 className="footer-services-title">Services</h4>
          <ul className="footer-services">
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
            <li>Service 4</li>
            <li>Service 5</li>
            <li>Service 6</li>
            <li>Service 7</li>
            <li>Service 8</li>
            <li>Service 9</li>
            <li>Service 10</li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright-ctn">
        <div className="footer-styled-divider"></div>
        <p className="footer-copyright">
          Copyright &copy; {new Date().getFullYear()} BRIX Templates
        </p>
        <p className="footer-terms">
          <span className="footer-first-term">All Rights Reserved</span>|
          <span className="footer-styled-term">Terms and Conditions</span>|
          <span className="footer-styled-term">Privacy Policy</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;