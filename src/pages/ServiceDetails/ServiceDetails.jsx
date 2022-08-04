import React from 'react';
import { Link, useParams } from 'react-router-dom';
import CategoryNav from '../../components/Navigation/CategoryNav/CategoryNav';
import TopNav from '../../components/Navigation/TopNav/TopNav';
import Footer from '../../components/Footer/Footer';
import SliderComponent from '../../components/ServicesSlider/SliderComponent';
import { sliderData } from '../../components/ServicesSlider/sliderData';
import DetailsList from './DetailsList';
import './ServiceDetails.css';
import serviceLogo from '../../images/service-logo.png';
import serviceMap from '../../images/service-map.png';
import emailIcon from '../../images/svg/Email-gray.svg';
import phoneIcon from '../../images/svg/Phone-gray.svg';
import locationIcon from '../../images/svg/Location-gray.svg';
import {
  capitalCase,
  checkCase,
  snakeCase,
} from '../../functions/formatString';
import { useDocTitle } from '../../hooks/useDocTitle';
import ScrollToTop from '../../utils/ScrollToTop';

const ServiceDetails = () => {
  useDocTitle();

  const { service_type, title } = useParams();

  const specificService = sliderData.find(
    (service) => snakeCase(service.serType) === service_type
  );

  const { serAvailable } = specificService;

  const activeService = serAvailable.find(
    (slide) => snakeCase(slide.title) === title
  );

  return (
    <ScrollToTop>
      <TopNav />
      <CategoryNav />
      <div className="service-details">
        <p className="details-directory">
          <Link to="/">{checkCase(service_type)}</Link>/
          <Link to={`/${service_type}/${title}`}>{capitalCase(title)}</Link>
        </p>
        <div className="service-details-contents">
          <div className="service-details-content">
            <DetailsList {...activeService} />
          </div>
          <div className="service-details-contact">
            <div className="details-contact-intro">
              <div className="details-contact-logo-ctn">
                <img
                  src={serviceLogo}
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
                  <p className="details-contact-address">contact@company.com</p>
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
          <p className="details-more-title">More services from the provider</p>
          <SliderComponent serType={service_type} />
        </div>
      </div>
      <Footer />
    </ScrollToTop>
  );
};

export default ServiceDetails;
