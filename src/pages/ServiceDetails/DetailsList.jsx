import { useState, useEffect, useMemo } from "react";
import { toast } from "react-toastify";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";

// components import
import { capitalCase } from "../../functions/formatString";

// images import
import paperPlaneIcon from "../../images/svg/paper-plane.svg";
import serviceMap from "../../images/service-map.png";
import logo from "../../images/service-logo.png";
import emailIcon from "../../images/svg/Email-gray.svg";
import phoneIcon from "../../images/svg/Phone-gray.svg";
import locationIcon from "../../images/svg/Location-gray.svg";
import defaultService from "../../images/default-service.png";

const DetailsList = ({ activeSer, activeUser }) => {
  // fetched data
  const {
    serImg1,
    serImg2,
    serImg3,
    serImg4,
    title,
    location,
    serviceOpen,
    serviceDetails,
    offeredServices,
  } = activeSer;

  const serImgData = useMemo(
    () => [serImg1, serImg2, serImg3, serImg4],
    [serImg1, serImg2, serImg3, serImg4]
  );

  const [serImages, setSerImages] = useState([]);

  useEffect(() => {
    if (!serImgData) return;
    setSerImages(serImgData.filter(Boolean));
  }, [serImgData]);

  //? send email to the service creator
  const activeUserEmail = activeUser?.email;
  const emailPost = process.env.REACT_APP_EMAIL_POST_API_KEY;

  const mailData = {
    toMail: serviceOpen,
    mailBody: `Email sent by ${activeUserEmail}`,
  };

  const sendEmail = async () => {
    try {
      const res = await fetch(emailPost, {
        method: "POST",
        body: JSON.stringify(mailData),
        headers: {
          "Content-type": "application/json",
        },
      });

      const formData = await res.json();
      console.log(formData);
      toast.success("Successfully sent", { progress: undefined });
    } catch (error) {
      console.log(error);
      toast.error("Failed to send email", { progress: undefined });
    }
  };

  return (
    <div className="service-details-contents">
      <div className="service-details-content">
        <div className="details-img-ctn">
          {serImages ? (
            <ServiceImages serImages={serImages} />
          ) : (
            <img
              src={defaultService}
              alt="default service"
              className="details-img"
              width="100%"
              height={480}
              loading="lazy"
            />
          )}
        </div>
        <div className="details-ctn">
          <div className="details-intro">
            <div className="details-styled-divider"></div>
            <div className="details-info">
              <h4 className="details-service-title">{title}</h4>
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
              <p className="details-list-main-title">Service Details</p>
              {serviceDetails && (
                <p className="details-list-content">{serviceDetails || "-"}</p>
              )}
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
            {serviceOpen && (
              <div className="details-contact-info">
                <img
                  src={emailIcon}
                  alt="email icon"
                  className="details-contact-icon"
                />
                <p className="details-contact-address">{serviceOpen}</p>
              </div>
            )}
            {location && (
              <div className="details-contact-info">
                <img
                  src={locationIcon}
                  alt="location icon"
                  className="details-contact-icon"
                />
                <p className="details-contact-address">{location}</p>
              </div>
            )}
            {offeredServices && (
              <div className="details-contact-info">
                <img
                  src={phoneIcon}
                  alt="location icon"
                  className="details-contact-icon"
                />
                <p className="details-contact-address">{offeredServices}</p>
              </div>
            )}
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

const ServiceImages = ({ serImages }) => {
  return (
    <Gallery>
      {serImages.map((segment, index) => (
        <Item
          key={index}
          original={`http://mdadmin-001-site2.ftempurl.com/images/${segment}`}
          thumbnail={`http://mdadmin-001-site2.ftempurl.com/images/${segment}`}
          width="1024"
          height="768"
        >
          {({ ref, open }) => (
            <img
              src={`http://mdadmin-001-site2.ftempurl.com/images/${segment}`}
              alt="service"
              className="details-img"
              width="100%"
              height={480}
              loading="lazy"
              ref={ref}
              onClick={open}
            />
          )}
        </Item>
      ))}
    </Gallery>
  );
};
