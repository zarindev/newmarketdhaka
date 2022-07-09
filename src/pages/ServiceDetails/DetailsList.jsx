import React, { useEffect, useState } from 'react';
import ellipse from '../../images/svg/Ellipse 2.svg';
import paperPlaneIcon from '../../images/svg/paper-plane.svg';
import clockIcon from '../../images/svg/clock.svg';
import calendarIcon from '../../images/svg/calendar-2.svg';

const DetailsList = ({
  title,
  image,
  serviceClose,
  serviceOpen,
  serviceDetails,
  offeredServices,
  extraServices,
  whyUs,
}) => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setImageIndex(imageIndex + 1);
    }, 4000);
    return () => clearInterval(slider);
  }, [imageIndex]);

  useEffect(() => {
    imageIndex > image.length - 1 && setImageIndex(0);
  }, [image, imageIndex]);

  return (
    <>
      <div className="details-image-ctn">
        <img src={image[imageIndex]} alt={title} className="details-image" />
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
                  src={clockIcon}
                  alt="clock icon"
                  className="service-working-hours-icon"
                />
                <p className="service-working-hours-time">
                  Close on {serviceClose}
                </p>
              </div>
              <div className="service-working-hours">
                <img
                  src={calendarIcon}
                  alt="calendar icon"
                  className="service-working-hours-icon"
                />
                <p className="service-working-hours-time">
                  Opens at {serviceOpen}
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
            <p className="details-list-content">{serviceDetails}</p>
          </div>
          <div className="details-list">
            <p className="details-list-sub-title">Services we offer:</p>
            <ul className="details-list-items">
              {offeredServices.map((item, index) => {
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
              {extraServices.map((item, index) => {
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
              {whyUs.map((item, index) => {
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
    </>
  );
};

export default DetailsList;
