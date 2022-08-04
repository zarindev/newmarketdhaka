import { Link } from 'react-router-dom';
import RoundedButton from '../RoundedButton/RoundedButton';
import './ServicesSlider.css';
import SliderComponent from './SliderComponent';
import { sliderData } from './sliderData';

const ServicesSlider = () => {
  return (
    <div className="services-slider">
      <h1 className="services-slider-title">
        Take a glimps of all the services
      </h1>
      {sliderData.map((service) => {
        return <SliderComponent key={service.id} {...service} />;
      })}
      <Link to="/more_services">
        <RoundedButton buttonText="Explore More Services" />
      </Link>
    </div>
  );
};

export default ServicesSlider;
