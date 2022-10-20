import { allServicesData } from "./allServicesData";
import SingleService from "./SingleService";

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
      {serAvailabe.map((item, i) => (
        <SingleService
          key={i}
          serSubType={item.serSubType}
          serItems={item.serItems}
        />
      ))}
    </div>
  );
};

export default AllServicesList;
