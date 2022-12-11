import { useState, useEffect } from "react";
import "./sameservices.css";
import { useParams } from "react-router-dom";

// components import
import SingleSlide from "../../components/ServicesSlider/SingleSlide";
import TopNav from "../../components/Navbar/TopNav";
import BottomNav from "../../components/Navbar/BottomNav";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Loading/Loading";

// hooks import
import { useDocTitle } from "../../hooks/useDocTitle";
import { useSerQuery } from "../../hooks/useSerQuery";

// helper functions import
import {
  snakeCase,
  snakeToTitle,
  titleCase,
} from "../../functions/formatString";

const SameServices = () => {
  useDocTitle();

  const { serData, serIsLoading } = useSerQuery();
  const { serviceType } = useParams();
  const [activeSer, setActiveSer] = useState([]);

  useEffect(() => {
    if (!serData) return;
    if (titleCase(serviceType) === "All") {
      return setActiveSer(serData);
    } else {
      const mergedSer = serData?.filter(
        (service) =>
          snakeCase(service.serCategory.value) === snakeCase(serviceType)
      );
      setActiveSer(mergedSer);
    }
  }, [serData, serviceType]);

  return (
    <>
      <TopNav />
      <BottomNav />
      {serIsLoading ? (
        <Loading color="#ce2d4f" size={115} />
      ) : (
        <div className="same-services-ctn">
          <div className="slider-heading">
            <h3 className="slider-title">{snakeToTitle(serviceType)}</h3>
            <p className="same-services-avilable">
              {`${activeSer.length} Services Avilable`}
            </p>
            <div className="same-styled-divider"></div>
          </div>
          <div className="single-slide-ctn">
            {activeSer.length <= 0 ? (
              <Loading color="#ce2d4f" size={125} />
            ) : (
              activeSer.map((service) => {
                return (
                  <SingleSlide
                    key={service.id}
                    serType={serviceType}
                    {...service}
                  />
                );
              })
            )}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default SameServices;
