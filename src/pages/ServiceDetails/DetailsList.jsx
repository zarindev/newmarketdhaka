import { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';
import paperPlaneIcon from '../../images/svg/paper-plane.svg';
import clockIcon from '../../images/svg/clock.svg';
import calendarIcon from '../../images/svg/calendar-2.svg';
import serviceMap from '../../images/service-map.png';
import logo from '../../images/service-logo.png';
import emailIcon from '../../images/svg/Email-gray.svg';
import phoneIcon from '../../images/svg/Phone-gray.svg';
import locationIcon from '../../images/svg/Location-gray.svg';
import { capitalCase } from '../../functions/formatString';
import defaultOne from '../../images/service-one.webp';
import defaultTwo from '../../images/service-two.webp';
import defaultThree from '../../images/service-three.webp';
import defaultFour from '../../images/service-four.webp';
import Dots from '../../components/Dots/Dots';

const defaultData = [defaultOne, defaultTwo, defaultThree, defaultFour];

const DetailsList = ({ activeSer, activeUser }) => {
  const {
    companyInfo,
    data,
    title,
    image,
    serviceOpen,
    serviceClose,
    serviceDetails,
    offeredServices,
    extraServices,
    whyUs,
  } = activeSer;

  const { email, phoneNumber, location } = companyInfo;

  const [imageIndex, setImageIndex] = useState(0);

  // send email to the service creator
  const userEmail = activeUser?.email;

  const postEmail = `http://mdadmin-001-site2.ftempurl.com/api/Servivce/SendMail?`;

  const mailData = {
    toMail: email,
    mailBody: `Email sent by ${userEmail}`,
  };

  const sendEmail = async () => {
    try {
      const res = await fetch(postEmail, {
        method: 'POST',
        body: JSON.stringify(mailData),
        headers: {
          'Content-type': 'application/json; carset=UTF-8',
        },
      });

      const formData = await res.json();
      console.log(formData);
      toast.success('Successfully sent', { progress: undefined });
    } catch (error) {
      console.log(error);
      toast.error('Failed to send email', { progress: undefined });
    }
  };

  return (
    <div className="service-details-contents">
      <div className="service-details-content">
        <div className="details-img-ctn">
          {data ? (
            <img
              src={`data:image/jpeg;base64,${data}`}
              alt={title}
              className="details-img"
            />
          ) : (
            <img
              src={defaultData[imageIndex]}
              alt={title}
              className="details-img"
            />
          )}
          <Dots
            arrLength={4}
            imageIndex={imageIndex}
            setImageIndex={setImageIndex}
            imageData={defaultData}
            autoPlay={true}
          />
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
                    Close on {serviceOpen}
                  </p>
                </div>
                <div className="service-working-hours">
                  <img
                    src={clockIcon}
                    alt="calendar icon"
                    className="service-working-hours-icon"
                  />
                  <p className="service-working-hours-time">
                    Opens at {serviceClose}
                  </p>
                </div>
              </div>
            </div>
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
              <p className="details-list-content">{serviceDetails}</p>
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
            className="details-contact-img"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsList;
