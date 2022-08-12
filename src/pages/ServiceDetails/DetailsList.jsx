import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import ellipse from '../../images/svg/Ellipse 2.svg';
import paperPlaneIcon from '../../images/svg/paper-plane.svg';
import clockIcon from '../../images/svg/clock.svg';
import calendarIcon from '../../images/svg/calendar-2.svg';
import serviceMap from '../../images/service-map.png';
import logo from '../../images/service-logo.png';
import emailIcon from '../../images/svg/Email-gray.svg';
import phoneIcon from '../../images/svg/Phone-gray.svg';
import locationIcon from '../../images/svg/Location-gray.svg';
import { capitalCase } from '../../functions/formatString';
import defaultOne from '../../images/service-one.png';
import defaultTwo from '../../images/service-two.png';
import defaultThree from '../../images/service-three.png';
import defaultFour from '../../images/service-zero.png';

const DetailsList = ({ activeSer }) => {
  const {
    title,
    image,
    serClose,
    serOpen,
    serDetails,
    offeredServices,
    extraServices,
    whyUs,
  } = activeSer;

  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setImageIndex(imageIndex + 1);
    }, 4000);
    return () => clearInterval(slider);
  }, [imageIndex]);

  useEffect(() => {
    if (image) {
      imageIndex > image.length - 1 && setImageIndex(0);
    }
  }, [image, imageIndex]);

  /** moch data start */
  const email = 'test@gmail.com';
  const phoneNumber = '012345678901';
  const location = 'testdist, testcity';
  /** moch data end */

  const defaultImg = [defaultOne, defaultTwo, defaultThree, defaultFour];

  // send email to the service creator
  const [emailBreak, setEmailBreak] = useState('sadmann898@gmail.com');
  const creatorEmail = `http://mdadmin-001-site2.ftempurl.com/api/Servivce/SendMail?toMail=${emailBreak}`;

  const sendEmail = async () => {
    try {
      await fetch(creatorEmail, {
        method: 'GET',
      });
      toast.success('Successfully sent', { progress: undefined });
    } catch (error) {
      console.log(error);
      toast.error('Failed to send email', { progress: undefined });
    }
  };

  return (
    <div className="service-details-contents">
      <div className="service-details-content">
        <div className="details-image-ctn">
          {image && (
            <img src={image[imageIndex]} alt={title} className="slide-image" />
          )}
          {image || (
            <img
              src={defaultImg[imageIndex]}
              alt={title}
              className="slide-image"
            />
          )}
          <div className="details-dots-ctn">
            {Array.from({ length: 4 }).map((item, index) => {
              return (
                <img
                  src={ellipse}
                  alt="ellipse icon"
                  key={index}
                  className={
                    imageIndex === index
                      ? 'details-dot details-dot-active'
                      : 'details-dot'
                  }
                  onClick={() => setImageIndex(index)}
                />
              );
            })}
          </div>
        </div>
        <div className="details-ctn">
          <div className="details-intro">
            <div className="details-styled-divider"></div>
            <div className="details-info">
              <h4 className="details-service-title">{title}</h4>
              <div className="service-working-hours-ctn">
                <div className="service-working-hours">
                  <img
                    src={calendarIcon}
                    alt="clock icon"
                    className="service-working-hours-icon"
                  />
                  <p className="service-working-hours-time">
                    Close on {serClose}
                  </p>
                </div>
                <div className="service-working-hours">
                  <img
                    src={clockIcon}
                    alt="calendar icon"
                    className="service-working-hours-icon"
                  />
                  <p className="service-working-hours-time">
                    Opens at {serOpen}
                  </p>
                </div>
              </div>
            </div>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
            <button className="details-button" onClick={sendEmail}>
              <img
                src={paperPlaneIcon}
                alt="paper-plane icon"
                className="details-button-icon"
              />
              <p className="detials-button-text">Send Email</p>
            </button>
          </div>
          <div className="details-lists">
            <div className="details-list">
              <p className="details-list-main-title">Details</p>
              <p className="details-list-content">{serDetails}</p>
            </div>
            {offeredServices && (
              <div className="details-list">
                <p className="details-list-sub-title">Services we offer:</p>
                <ul className="details-list-items">
                  <li className="details-list-item">{offeredServices}</li>
                </ul>
              </div>
            )}
            {extraServices && (
              <div className="details-list">
                <p className="details-list-sub-title">
                  Extra services we offer:
                </p>
                <ul className="details-list-items">
                  <li className="details-list-item">{offeredServices}</li>
                </ul>
              </div>
            )}
            {whyUs && (
              <div className="details-list">
                <p className="details-list-sub-title">Why choose us:</p>
                <ul className="details-list-items">
                  <li className="details-list-item">{whyUs}</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="service-details-contact">
        <div className="details-contact-intro">
          <div className="details-contact-logo-ctn">
            <img
              src={logo}
              alt={`${capitalCase(title)} brand logo`}
              className="details-contact-logo"
            />
          </div>
          <p className="details-contact-title">{capitalCase(title)}</p>
          <div className="details-contact-info-ctn">
            <div className="details-contact-info">
              <img
                src={emailIcon}
                alt="email icon"
                className="details-contact-icon"
              />
              <p className="details-contact-address">{email}</p>
            </div>
            <div className="details-contact-info">
              <img
                src={phoneIcon}
                alt="phone icon"
                className="details-contact-icon"
              />
              <p className="details-contact-address">{phoneNumber}</p>
            </div>
            <div className="details-contact-info">
              <img
                src={locationIcon}
                alt="location icon"
                className="details-contact-icon"
              />
              <p className="details-contact-address">{location}</p>
            </div>
          </div>
        </div>
        <div className="details-contact-map">
          <img
            src={serviceMap}
            alt="google map"
            className="details-contact-image"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsList;
