import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Loading from '../Loading/Loading';
import RoundedBtn from '../Button/RoundedBtn';
import './ServicesSlider.css';
import SliderComponent from './SliderComponent';
import arrowCircleDown from '../../images/svg/arrow-circle-down.svg';
import { useGlobalContext } from '../../context/AppProvider';

const ServicesSlider = () => {
  const { mergedSerType } = useGlobalContext();

  return (
    <div className="services-slider">
      <h1 className="services-slider-title">
        Take a glimps of all the services
      </h1>
      {mergedSerType.length === 0 ? (
        <Loading color="#ce2d4f" size={115} />
      ) : (
        mergedSerType.map((service) => {
          return <SliderComponent key={uuidv4()} serType={service} />;
        })
      )}
      {mergedSerType.length > 0 && (
        <Link to="/more_services">
          <RoundedBtn
            text="Explore More"
            icon={arrowCircleDown}
            altText="arrow-circle-down"
          />
        </Link>
      )}
    </div>
  );
};

export default ServicesSlider;
