import { useNavigate, useLocation } from 'react-router-dom';
import SeekerSidebar from '../../components/SeekerSidebar/SeekerSidebar';
import './ServiceDashboard.css';
import bannerGuy from '../../images/dash-banner-guy.png';
import CreatedServices from './CreatedServices';
import { useDocTitle } from '../../hooks/useDocTitle';
import { useAuth } from '../../context/AuthProvider';
import { useFind } from '../../hooks/useFind';

const ServiceDashboard = () => {
  useDocTitle();

  const locState = useLocation()?.state;
  const locComId = locState?.comInfoId;

  const comGet = `http://mdadmin-001-site2.ftempurl.com/api/Servivce/GetServiceCompList`;
  const { user } = useAuth();
  const uid = user?.uid;
  const comFetched = useFind(comGet, uid);
  const activeCom = comFetched?.activeItem;
  const activeComId = activeCom?.id;
  console.log(locComId, activeComId);

  const navigate = useNavigate();
  const navigateToUploadSer = () => {
    navigate('/service_dashboard/upload_service', {
      state: { id: 1, activeComId: locComId },
    });
  };

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
          <button
            className="service-dash-banner-button"
            onClick={navigateToUploadSer}
          >
            Create New Service
          </button>
        </div>
        <CreatedServices activeComId={locComId || activeComId} />
      </div>
    </div>
  );
};

export default ServiceDashboard;
