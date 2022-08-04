import { v4 as uuidv4 } from 'uuid';
import { allServicesData } from './allServicesData';
import SingleService from './SingleService';

const AllServicesList = ({ serType, serIcon }) => {
  const specificService = allServicesData.find(
    (service) => service.serType === serType
  );
  const { serAvailabe } = specificService;

  return (
    <div className="all-services-list-ctn">
      <div className="all-services-list-title-ctn">
        <div className="all-services-list-styled-divider"></div>
        <img src={serIcon} alt="" className="all-services-list-image" />
        <h3 className="all-services-list-title">{serType}</h3>
      </div>
      {serAvailabe.map((item) => {
        return <SingleService key={uuidv4()} {...item} />;
      })}
    </div>
  );
};

export default AllServicesList;
