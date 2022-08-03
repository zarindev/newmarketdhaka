import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import CategoryNav from '../../components/Navigation/CategoryNav/CategoryNav';
import TopNav from '../../components/Navigation/TopNav/TopNav';
import SliderComponent from '../../components/ServicesSlider/SliderComponent';
import arrowCircleDown from '../../images/svg/arrow-circle-down.svg';
import './MoreServices.css';
import { useDocTitle } from '../../hooks/useDocTitle';
import RoundedButton from '../../components/RoundedButton/RoundedButton';

const MoreServices = () => {
  useDocTitle();

  return (
    <>
      <TopNav />
      <CategoryNav />
      <div className="more-services-ctn">
        <div className="more-services">
          <SliderComponent sliderTitle="Home services" />
          <SliderComponent sliderTitle="Car services" />
          <SliderComponent sliderTitle="IT training" />
          <SliderComponent sliderTitle="Home services" />
          <SliderComponent sliderTitle="Car services" />
          <SliderComponent sliderTitle="IT training" />
        </div>
        <Link to="/more_services/all_services">
          <RoundedButton
            buttonText="See All Services"
            buttonIcon={arrowCircleDown}
            buttonAltText="arrow-circle-down"
          />
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default MoreServices;
