import React, { useState, useEffect, useRef } from 'react';

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';

import { sliderData } from './sliderData';
import rightArrow from '../../images/svg/right-arrow 1 (Traced).svg';
import rightArrowTwo from '../../images/svg/right-arrow 2 (Traced).svg';
import SingleSlide from './SingleSlide';
import { useGlobalContext } from '../../context/FunctionProvider';

const SliderComponent = ({ sliderTitle }) => {
  const { snakeCase } = useGlobalContext();
  const [service, setService] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = sliderData.map(
    (services) => services[Object.keys(services)[2]][0]
  ).length;

  useEffect(() => {
    const getServices = () => {
      const data = sliderData.find(
        (services) => snakeCase(services.serviceType) === snakeCase(sliderTitle)
      );
      if (data.serviceType) {
        setService(data.servicesAvilable);
      } else {
        setService([]);
      }
    };
    getServices();
  }, []);

  const rightArrowRef = useRef();
  const leftArrowRef = useRef();

  return (
    <div className="slider-component">
      <div className="slider-heading">
        <h3 className="slider-title">{sliderTitle}</h3>
        <div className="slider-btn-ctn">
          <p className="slider-btn-text">See All</p>
          <img
            src={rightArrow}
            alt="read-more icon"
            className="slider-btn-icon"
          />
        </div>
      </div>
      <div className="slider-content">
        <img
          src={rightArrowTwo}
          alt="left-arrow icon"
          className="slide-arrow slide-arrow-left"
          ref={leftArrowRef}
        />
        <img
          src={rightArrowTwo}
          alt="right-arrow icon"
          className="slide-arrow slide-arrow-right"
          ref={rightArrowRef}
        />
        <Swiper
          modules={[Navigation]}
          slidesPerView={3}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={{
            prevEl: leftArrowRef.current,
            nextEl: rightArrowRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = leftArrowRef.current;
            swiper.params.navigation.nextEl = rightArrowRef.current;
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            {service.map((slide) => {
              return (
                <SingleSlide
                  key={slide.id}
                  {...slide}
                  sliderTitle={sliderTitle}
                />
              );
            })}
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SliderComponent;
