import "./servicedashboard.css";
import { Link } from "react-router-dom";

// components import
import SeekerSidebar from "../../components/SeekerSidebar/SeekerSidebar";
import CreatedServices from "./CreatedServices";
import Loading from "../../components/Loading/Loading";

//  hooks import
import { useDocTitle } from "../../hooks/useDocTitle";
import { useFind } from "../../hooks/useFind";
import { useFilter } from "../../hooks/useFilter";

// images import
import bannerGuy from "../../images/dash-banner-guy.png";

const ServiceDashboard = () => {
  useDocTitle();

  const { activeUser } = useFind();
  const activeUserId = activeUser?.userUId;
  const { activeSer, serIsLoading } = useFilter("userUId", activeUserId);

  return (
    <div className="service-dash-ctn">
      <SeekerSidebar />
      <div className="service-dash">
        <div className="service-dash-banner">
          <img
            src={bannerGuy}
            alt="banner guy"
            className="service-dash-banner-guy"
          />
          <h4 className="service-dash-banner-title">
            Want to have best servises?
          </h4>
          <p className="service-dash-banner-desc">
            Hello this is a line of text will go here
          </p>
          <Link to="/service_dashboard/upload_service">
            <button className="service-dash-banner-button">
              Create New Service
            </button>
          </Link>
        </div>
        {serIsLoading ? (
          <Loading color="#ce2d4f" size={115} />
        ) : (
          <CreatedServices activeSer={activeSer} />
        )}
      </div>
    </div>
  );
};

export default ServiceDashboard;
