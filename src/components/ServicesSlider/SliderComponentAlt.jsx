import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";

// components import
import SingleSlide from "./SingleSlide";
import Loading from "../Loading/Loading";

// images import
import rightArrow from "../../images/svg/right-arrow 1 (Traced).svg";
import rightArrowTwo from "../../images/svg/right-arrow 2 (Traced).svg";

// hooks import
import { useFilter } from "../../hooks/useFilter";

const SliderComponentAlt = ({ serType, creatorId }) => {
  const navigate = useNavigate();

  const { activeSer, serIsLoading } = useFilter("userUId", creatorId);

  const rightArrowRef = useRef(null);
  const leftArrowRef = useRef(null);

  const handleNavigate = () => {
    navigate(`/services/creator-services/${creatorId}}`, {
      state: {
        id: 1,
        activeSer: activeSer,
        serIsLoading: serIsLoading,
        serviceType: serType,
      },
    });
  };

  if (serIsLoading) {
    return <Loading color="#ce2d4f" size={115} />;
  }

  return (
    <section aria-label="carousel-wrapper" className="slider-component">
      <div className="slider-heading">
        <div className="slider-btn-ctn" onClick={() => handleNavigate()}>
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
          {activeSer?.map((service) => (
            <SwiperSlide key={service.id}>
              <SingleSlide serType={serType} {...service} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SliderComponentAlt;
