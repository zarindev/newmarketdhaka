import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useGlobalContext } from '../../context/AppProvider';
import RoundedButton from '../RoundedButton/RoundedButton';
import './ServicesSlider.css';
import SliderComponent from './SliderComponent';

const ServicesSlider = () => {
  const { mergedSerType } = useGlobalContext();

  return (
    <div className="services-slider">
      <h1 className="services-slider-title">
        Take a glimps of all the services
      </h1>
      {mergedSerType.map((type) => {
        return <SliderComponent key={uuidv4()} serType={type} />;
      })}
      <Link to="/more_services">
        <RoundedButton buttonText="Explore More Services" />
      </Link>
    </div>
  );
};

export default ServicesSlider;
