import React from 'react';
import { Link, useParams } from 'react-router-dom';
import CategoryNav from '../../components/Navigation/CategoryNav/CategoryNav';
import TopNav from '../../components/Navigation/TopNav/TopNav';
import Footer from '../../components/Footer/Footer';
import SliderComponent from '../../components/ServicesSlider/SliderComponent';
import ScrollToTop from '../../components/Utilities/ScrollToTop';
import { sliderData } from '../../components/ServicesSlider/sliderData';
import DetailsList from './DetailsList';
import './ServiceDetails.css';
import serviceLogo from '../../images/service-logo.png';
import serviceMap from '../../images/service-map.png';
import emailIcon from '../../images/svg/Email-gray.svg';
import phoneIcon from '../../images/svg/Phone-gray.svg';
import locationIcon from '../../images/svg/Location-gray.svg';

const ServiceDetails = () => {
  const { service_type, title } = useParams();

  const capitalize = (str) => {
    const capitalized =
      str.replace(/_/g, ' ').charAt(0).toUpperCase() +
      str.replace(/_/g, ' ').slice(1);
    return capitalized;
  };

  const titleCase = (str) => {
    const titleCased = str.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
    return titleCased;
  };

  const camelize = (str) => {
    const camelized = str.replace(/_([a-z])/g, function (g) {
      return g[1].toUpperCase();
    });
    return camelized;
  };

  return (
    <>
      <ScrollToTop>
        <TopNav />
        <CategoryNav />
        <div className="service-details">
          <p className="details-directory">
            <Link to="/">{capitalize(service_type)}</Link>/
            <Link to={`/${service_type}/${title}`}>{capitalize(title)}</Link>
          </p>
          <div className="service-details-contents">
            <div className="service-details-content">
              {sliderData[camelize(service_type)].map((service) => {
                if (capitalize(title) === service.title) {
                  return <DetailsList key={service.id} {...service} />;
                }
              })}
            </div>
            <div className="service-details-contact">
              <div className="details-contact-intro">
                <div className="details-contact-logo-ctn">
                  <img
                    src={serviceLogo}
                    alt={`${capitalize(title)} brand logo`}
                    className="details-contact-logo"
                  />
                </div>
                <p className="details-contact-title">{capitalize(title)}</p>
                <div className="details-contact-info-ctn">
                  <div className="details-contact-info">
                    <img
                      src={emailIcon}
                      alt="email icon"
                      className="details-contact-icon"
                    />
                    <p className="details-contact-address">
                      contact@company.com
                    </p>
                  </div>
                  <div className="details-contact-info">
                    <img
                      src={phoneIcon}
                      alt="phone icon"
                      className="details-contact-icon"
                    />
                    <p className="details-contact-address">(414) 687 - 5892</p>
                  </div>
                  <div className="details-contact-info">
                    <img
                      src={locationIcon}
                      alt="location icon"
                      className="details-contact-icon"
                    />
                    <p className="details-contact-address">
                      794 Mcallister St San Francisco, 94102
                    </p>
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
          <div className="service-details-more">
            <p className="details-more-title">
              More services from the provider
            </p>
            <SliderComponent
              sliderKey={camelize(service_type)}
              sliderTitle={capitalize(service_type)}
            />
          </div>
        </div>
        <Footer />
      </ScrollToTop>
    </>
  );
};

export default ServiceDetails;
