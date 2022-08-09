import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import useMergeKey from '../../hooks/useMergeKey';
import RoundedButton from '../RoundedButton/RoundedButton';
import './ServicesSlider.css';
import SliderComponent from './SliderComponent';
import { sliderData } from './sliderData';

const ServicesSlider = () => {
  const serGet = `http://mdadmin-001-site2.ftempurl.com/api/Servivce/GetServiceList`;
  const mergedSerType = useMergeKey(serGet);

  return (
    <div className="services-slider">
      <h1 className="services-slider-title">
        Take a glimps of all the services
      </h1>

      {mergedSerType.map((service) => {
        return <SliderComponent key={uuidv4()} serType={service} />;
      })}

      {/* {sliderData.map((service) => {
        return <SliderComponent key={service.id} {...service} />;
      })} */}
      <Link to="/more_services">
        <RoundedButton buttonText="Explore More Services" />
      </Link>
    </div>
  );
};

export default ServicesSlider;
