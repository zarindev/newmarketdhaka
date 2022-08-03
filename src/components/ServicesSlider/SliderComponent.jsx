import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import { sliderData } from './sliderData';
import rightArrow from '../../images/svg/right-arrow 1 (Traced).svg';
import rightArrowTwo from '../../images/svg/right-arrow 2 (Traced).svg';
import SingleSlide from './SingleSlide';
import { snakeCase } from '../../functions/formatString';

const SliderComponent = ({ sliderTitle }) => {
  const [service, setService] = useState([]);

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
  }, [sliderTitle]);

  const rightArrowRef = useRef(null);
  const leftArrowRef = useRef(null);

  return (
    <div className="slider-component">
      <div className="slider-heading">
        <h3 className="slider-title">{sliderTitle}</h3>
        <Link to={`/${snakeCase(sliderTitle)}`}>
          <div className="slider-btn-ctn">
            <p className="slider-btn-text">See All</p>
            <img
              src={rightArrow}
              alt="read-more icon"
              className="slider-btn-icon"
            />
          </div>
        </Link>
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
          spaceBetween={12}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={{
            prevEl: leftArrowRef.current,
            nextEl: rightArrowRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = leftArrowRef?.current;
            swiper.params.navigation.nextEl = rightArrowRef?.current;
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {service.map((slide) => {
            return (
              <SwiperSlide key={slide.id}>
                <SingleSlide {...slide} sliderTitle={sliderTitle} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default SliderComponent;
