import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import { sliderData } from './sliderData';
import rightArrow from '../../images/svg/right-arrow 1 (Traced).svg';
import rightArrowTwo from '../../images/svg/right-arrow 2 (Traced).svg';
import SingleSlide from './SingleSlide';
import { snakeCase } from '../../functions/formatString';
import { useFetch } from '../../hooks/useFetch';

const SliderComponent = ({ serType }) => {
  const serviceGet = `http://mdadmin-001-site2.ftempurl.com/api/Servivce/GetServiceList`;
  const fetchedSer = useFetch(serviceGet);

  // const specificService = sliderData.find(
  //   (service) => snakeCase(service.serType) === snakeCase(serType)
  // );
  // const { serAvailable } = specificService;

  const rightArrowRef = useRef(null);
  const leftArrowRef = useRef(null);

  return (
    <div className="slider-component">
      <div className="slider-heading">
        <h3 className="slider-title">{serType}</h3>
        <Link to={`/home/${snakeCase(serType)}`}>
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
          {/* {serAvailable.map((slide) => {
            return (
              <SwiperSlide key={slide.id}>
                <SingleSlide {...slide} serType={serType} />
              </SwiperSlide>
            );
          })} */}
        </Swiper>
      </div>
    </div>
  );
};

export default SliderComponent;
