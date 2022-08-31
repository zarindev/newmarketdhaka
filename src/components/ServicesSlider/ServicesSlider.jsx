import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useMerge } from '../../hooks/useMerge';
import Loading from '../Loading/Loading';
import RoundedButton from '../RoundedButton/RoundedButton';
import './ServicesSlider.css';
import SliderComponent from './SliderComponent';
import arrowCircleDown from '../../images/svg/arrow-circle-down.svg';

const ServicesSlider = () => {
  const { mergedSerType } = useMerge();

  return (
    <div className="services-slider">
      <h1 className="services-slider-title">
        Take a glimps of all the services
      </h1>
      {mergedSerType.length === 0 ? (
        <Loading color="#ce2d4f" size={115} />
      ) : (
        mergedSerType.map((type) => {
          return <SliderComponent key={uuidv4()} serType={type} />;
        })
      )}
      {mergedSerType.length > 0 && (
        <Link to="/more_services">
          <RoundedButton
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
