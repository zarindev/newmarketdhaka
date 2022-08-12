import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import rightArrow from '../../images/svg/right-arrow 1 (Traced).svg';
import rightArrowTwo from '../../images/svg/right-arrow 2 (Traced).svg';
import SingleSlide from './SingleSlide';
import { snakeCase } from '../../functions/formatString';
import Loading from '../Loading/Loading';
import { useGlobalContext } from '../../context/AppProvider';

const SliderComponent = ({ serType }) => {
  const { items } = useGlobalContext();

  const [mergedSerState, setMergedSerState] = useState([]);
  useEffect(() => {
    const mergedSer = items.filter((service) => service.serType === serType);
    setMergedSerState(mergedSer);
  }, [items, serType]);
  // console.log(mergedSerState);

  const rightArrowRef = useRef(null);
  const leftArrowRef = useRef(null);

  return (
    <>
      {mergedSerState.length <= 0 ? (
        <Loading color="#ce2d4f" size={125} />
      ) : (
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
              // loop={true}
              // loopFillGroupWithBlank={true}
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
              {mergedSerState.map((service) => {
                return (
                  <SwiperSlide key={service.id}>
                    <SingleSlide {...service} serType={serType} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default SliderComponent;
