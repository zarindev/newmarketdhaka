import { Link } from "react-router-dom";
import SeekerSidebar from "../../components/SeekerSidebar/SeekerSidebar";
import "./ServiceDashboard.css";
import bannerGuy from "../../images/dash-banner-guy.png";
import CreatedServices from "./CreatedServices";
import { useDocTitle } from "../../hooks/useDocTitle";
import { useFind } from "../../hooks/useFind";

const ServiceDashboard = () => {
  useDocTitle();

  const { activeUser } = useFind();
  const activeUserId = activeUser?.userUId;

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
        {activeUserId && <CreatedServices activeUserId={activeUserId} />}
      </div>
    </div>
  );
};

export default ServiceDashboard;
