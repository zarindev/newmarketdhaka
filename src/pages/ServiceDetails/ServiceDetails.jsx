import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import CategoryNav from '../../components/Navigation/CategoryNav/CategoryNav';
import TopNav from '../../components/Navigation/TopNav/TopNav';
import Footer from '../../components/Footer/Footer';
import SliderComponent from '../../components/ServicesSlider/SliderComponent';
import DetailsList from './DetailsList';
import './ServiceDetails.css';
import {
  capitalCase,
  checkCase,
  snakeCase,
} from '../../functions/formatString';
import { useDocTitle } from '../../hooks/useDocTitle';
import ScrollToTop from '../../utils/ScrollToTop';
import Loading from '../../components/Loading/Loading';
import { useAuth } from '../../context/AuthProvider';
import { useSerQuery } from '../../hooks/useSerQuery';

const ServiceDetails = () => {
  useDocTitle();

  const { service_type, title } = useParams();
  const { serData, serIsLoading } = useSerQuery();

  const activeSer = serData?.find(
    (service) => snakeCase(service.title) === snakeCase(title)
  );

  const { user } = useAuth();

  return (
    <ScrollToTop>
      <TopNav />
      <CategoryNav />
      <div className="service-details">
        <p className="details-directory">
          <Link to="/">{checkCase(service_type)}</Link>/
          <Link to={`/home/${service_type}/${title}`}>
            {capitalCase(title)}
          </Link>
        </p>
        {serIsLoading ? (
          <Loading color="#ce2d4f" size={125} />
        ) : (
          <DetailsList activeSer={activeSer} activeUser={user} />
        )}
        {serIsLoading || (
          <div className="service-details-more">
            <p className="details-more-title">
              More services from the provider
            </p>
            <SliderComponent serType={checkCase(service_type)} />
          </div>
        )}
      </div>
      <Footer />
    </ScrollToTop>
  );
};

export default ServiceDetails;
