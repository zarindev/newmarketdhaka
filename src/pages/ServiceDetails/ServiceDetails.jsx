import React from 'react';
import { Link, useParams } from 'react-router-dom';
import CategoryNav from '../../components/Navigation/CategoryNav/CategoryNav';
import TopNav from '../../components/Navigation/TopNav/TopNav';
import Footer from '../../components/Footer/Footer';
import SliderComponent from '../../components/ServicesSlider/SliderComponent';
import { sliderData } from '../../components/ServicesSlider/sliderData';
import DetailsList from './DetailsList';
import './ServiceDetails.css';

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

        <DetailsList {...activeService} />

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
