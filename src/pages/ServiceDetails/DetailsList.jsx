import React, { useEffect, useState } from 'react';
import ellipse from '../../images/svg/Ellipse 2.svg';
import paperPlaneIcon from '../../images/svg/paper-plane.svg';
import clockIcon from '../../images/svg/clock.svg';
import calendarIcon from '../../images/svg/calendar-2.svg';
import serviceMap from '../../images/service-map.png';
import emailIcon from '../../images/svg/Email-gray.svg';
import phoneIcon from '../../images/svg/Phone-gray.svg';
import locationIcon from '../../images/svg/Location-gray.svg';
import { capitalCase } from '../../functions/formatString';

const DetailsList = ({
  title,
  logo,
  image,
  serClose,
  serOpen,
  serDetails,
  offeredServices,
  extraServices,
  whyUs,
  email,
  phoneNumber,
  location,
}) => {
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

  return (
    <div className="service-details-contents">
      <div className="service-details-content">
        <div className="details-image-ctn">
          {image && (
            <img
              src={image[imageIndex]}
              alt={title}
              className="details-image"
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
            <button className="details-button">
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
            <div className="details-list">
              <p className="details-list-sub-title">Services we offer:</p>
              <ul className="details-list-items">
                {offeredServices?.map((item, index) => {
                  return (
                    <li className="details-list-item" key={index}>
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="details-list">
              <p className="details-list-sub-title">Extra services we offer:</p>
              <ul className="details-list-items">
                {extraServices?.map((item, index) => {
                  return (
                    <li className="details-list-item" key={index}>
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="details-list">
              <p className="details-list-sub-title">Why choose us:</p>
              <ul className="details-list-items">
                {whyUs?.map((item, index) => {
                  return (
                    <li className="details-list-item" key={index}>
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
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
