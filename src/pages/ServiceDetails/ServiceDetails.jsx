import { Link, useParams } from "react-router-dom";
import "./servicedetails.css";
import TopNav from "../../components/Navbar/TopNav";
import BottomNav from "../../components/Navbar/BottomNav";
import Footer from "../../components/Footer/Footer";
import SliderComponentAlt from "../../components/ServicesSlider/SliderComponentAlt";
import DetailsList from "./DetailsList";
import {
  capitalCase,
  checkCase,
  snakeCase,
} from "../../functions/formatString";
import { useDocTitle } from "../../hooks/useDocTitle";
import Loading from "../../components/Loading/Loading";
import { useAuth } from "../../context/AuthProvider";
import { useSerQuery } from "../../hooks/useSerQuery";

const ServiceDetails = () => {
  useDocTitle();

  const { serviceType, serviceTitle } = useParams();
  const { serData, serIsLoading } = useSerQuery();

  const activeSer = serData?.find(
    (service) => snakeCase(service.title) === snakeCase(serviceTitle)
  );

  const { user } = useAuth();

  return (
    <>
      <TopNav />
      <BottomNav />
      <div className="service-details">
        <p className="details-directory">
          <Link to="/">{checkCase(serviceType)}</Link>/
          <Link to={`/home/${serviceType}/${serviceTitle}`}>
            {capitalCase(serviceTitle)}
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
            <SliderComponentAlt
              serType={checkCase(serviceType)}
              creatorId={activeSer.userUId}
            />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ServiceDetails;
