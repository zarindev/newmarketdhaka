import { useMemo } from "react";
import "./servicesslider.css";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import RoundedBtn from "../Button/RoundedBtn";
import SliderComponent from "./SliderComponent";
import arrowCircleDown from "../../images/svg/arrow-circle-down.svg";
import { useGlobalContext } from "../../context/AppProvider";
import Loading from "../Loading/Loading";

const ServicesSlider = () => {
  const { mergedSerType } = useGlobalContext();

  const slicedSerType = useMemo(
    () => mergedSerType.slice(0, 3),
    [mergedSerType]
  );

  return (
    <>
      {mergedSerType.length > 0 && (
        <section aria-label="available-services" className="services-slider">
          <h1 className="services-slider-title">
            Take a glimps of all the services
          </h1>
          {mergedSerType.length === 0 ? (
            <Loading color="#ce2d4f" size={115} />
          ) : (
            <div>
              {slicedSerType.map((serType) => (
                <SliderComponent key={uuidv4()} serType={serType} />
              ))}
              <Link to="/more_services">
                <RoundedBtn
                  text="Explore More"
                  icon={arrowCircleDown}
                  altText="arrow-circle-down"
                />
              </Link>
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default ServicesSlider;
