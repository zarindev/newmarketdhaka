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
import { useFetch } from '../../hooks/useFetch';
import Loading from '../../components/Loading/Loading';

const ServiceDetails = () => {
  useDocTitle();

  const { service_type, title } = useParams();

  const serGet = `http://mdadmin-001-site2.ftempurl.com/api/Servivce/GetServiceList`;
  const fetchedSer = useFetch(serGet);
  const { items } = fetchedSer;

  const activeSer = items.find(
    (service) => snakeCase(service.serType) === snakeCase(service_type)
  );

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
        {activeSer ? (
          <DetailsList activeSer={activeSer} />
        ) : (
          <Loading color="#ce2d4f" size={125} />
        )}
        {activeSer && (
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
