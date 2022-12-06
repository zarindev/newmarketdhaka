import "./servicedetails.css";
import { useNavigate, useParams } from "react-router-dom";

// components import
import TopNav from "../../components/Navbar/TopNav";
import BottomNav from "../../components/Navbar/BottomNav";
import Footer from "../../components/Footer/Footer";
import SliderComponentAlt from "../../components/ServicesSlider/SliderComponentAlt";
import DetailsList from "./DetailsList";
import Loading from "../../components/Loading/Loading";

// hooks import
import { useDocTitle } from "../../hooks/useDocTitle";
import { useAuth } from "../../context/AuthProvider";
import { useSerQuery } from "../../hooks/useSerQuery";

// helper functions import
import { checkCase, snakeCase } from "../../functions/formatString";

const ServiceDetails = () => {
  useDocTitle();

  const navigate = useNavigate();

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
        <p className="detailsBackButton" onClick={() => navigate(-1)}>
          Go Back
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
