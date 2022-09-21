import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { snakeCase, titleCase } from '../../functions/formatString';
import './Footer.css';
import brandLogo from '../../images/brand-logo.webp';
import facebookLogo from '../../images/svg/Facebook.svg';
import twitterLogo from '../../images/svg/Twitter.svg';
import instagramLogo from '../../images/svg/Instagram.svg';
import linkedInLogo from '../../images/svg/LinkedIn.svg';
import youtubeLogo from '../../images/svg/YouTube.svg';
import emailIcon from '../../images/svg/Email-black.svg';
import phoneIcon from '../../images/svg/Phone-black.svg';
import locationIcon from '../../images/svg/Location-black.svg';
import { useGlobalContext } from '../../context/AppProvider';

const Footer = () => {
  const { mergedSerTypeAll } = useGlobalContext();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <img src={brandLogo} alt="brand logo" className="footer-logo" />
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
            <li className="footer-link">Features</li>
            <li className="footer-link">Pricing</li>
            <li className="footer-link">Case studies</li>
            <li className="footer-link">Reviews</li>
            <li className="footer-link">Updates</li>
          </ul>
        </div>
        <div className="footer-services-ctn">
          <h4 className="footer-services-title">Services</h4>
          <ul className="footer-services">
            {mergedSerTypeAll.map((item) => {
              return (
                <Link to={`/home/${snakeCase(item)}`} key={uuidv4()}>
                  <li className="footer-link">{titleCase(item)}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="footer-copyright-ctn">
        <div className="footer-styled-divider"></div>
        <p className="footer-copyright">
          Copyright &copy; {new Date().getFullYear()} BRIX Templates
        </p>
        <p className="footer-terms">
          <span className="footer-first-term">All Rights Reserved</span>
          <span className="footer-vertical-divider">|</span>
          <span className="footer-styled-term">Terms and Conditions</span>
          <span className="footer-vertical-divider">|</span>
          <span className="footer-styled-term">Privacy Policy</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
