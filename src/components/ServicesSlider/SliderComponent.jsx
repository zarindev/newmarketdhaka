import { useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import rightArrow from "../../images/svg/right-arrow 1 (Traced).svg";
import rightArrowTwo from "../../images/svg/right-arrow 2 (Traced).svg";
import SingleSlide from "./SingleSlide";
import { snakeCase } from "../../functions/formatString";
import Loading from "../Loading/Loading";
import { useFilter } from "../../hooks/useFilter";

const SliderComponent = ({ serType }) => {
  const { activeSer, serIsLoading } = useFilter("serType", serType);

  const rightArrowRef = useRef(null);
  const leftArrowRef = useRef(null);

  if (serIsLoading) {
    return <Loading color="#ce2d4f" size={115} />;
  }

  return (
    <section aria-label="carousel-wrapper" className="slider-component">
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
          aria-label="services-carousel"
          spaceBetween={12}
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
          className="carousel"
        >
          {activeSer &&
            activeSer?.map((service) => {
              return (
                <SwiperSlide key={service.id}>
                  <SingleSlide serType={serType} {...service} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </section>
  );
};

export default SliderComponent;
