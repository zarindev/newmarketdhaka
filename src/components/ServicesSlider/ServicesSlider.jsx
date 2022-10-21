import { useMemo } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Loading from "../Loading/Loading";
import RoundedBtn from "../Button/RoundedBtn";
import "./ServicesSlider.css";
import SliderComponent from "./SliderComponent";
import arrowCircleDown from "../../images/svg/arrow-circle-down.svg";
import { useGlobalContext } from "../../context/AppProvider";

const ServicesSlider = () => {
  const { mergedSerType } = useGlobalContext();

  const slicedSerType = useMemo(
    () => mergedSerType.slice(0, 3),
    [mergedSerType]
  );
  console.log(slicedSerType);

  return (
    <>
      {mergedSerType.length > 0 && (
        <section aria-label="available-services" className="services-slider">
          <h1 className="services-slider-title">
            Take a glimps of all the services
          </h1>
          {slicedSerType.map((serType) => {
            return <SliderComponent key={uuidv4()} serType={serType} />;
          })}
          {mergedSerType.length > 0 && (
            <Link to="/more_services">
              <RoundedBtn
                text="Explore More"
                icon={arrowCircleDown}
                altText="arrow-circle-down"
              />
            </Link>
          )}
        </section>
      )}
    </>
  );
};

export default ServicesSlider;
