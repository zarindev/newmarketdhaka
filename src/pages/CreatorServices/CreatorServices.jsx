import "./creatorservices.css";
import { useLocation } from "react-router-dom";

// components import
import SingleSlide from "../../components/ServicesSlider/SingleSlide";
import TopNav from "../../components/Navbar/TopNav";
import BottomNav from "../../components/Navbar/BottomNav";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Loading/Loading";

// hooks import
import { useDocTitle } from "../../hooks/useDocTitle";

const CreatorServices = () => {
  useDocTitle("Creator Services");

  const { state } = useLocation();
  const activeSer = state?.activeSer;
  const serIsLoading = state?.serIsLoading;
  const serviceType = state?.serviceType;

  return (
    <>
      <TopNav />
      <BottomNav />
      {serIsLoading ? (
        <Loading color="#ce2d4f" size={115} />
      ) : (
        <div className="same-services-ctn">
          <div className="slider-heading">
            <h3 className="slider-title">All Services</h3>
            <p className="same-services-avilable">
              {`${activeSer?.length} Services Avilable`}
            </p>
            <div className="same-styled-divider"></div>
          </div>
          <div className="single-slide-ctn">
            {activeSer?.length <= 0 ? (
              <Loading color="#ce2d4f" size={125} />
            ) : (
              activeSer?.map((service) => {
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

export default CreatorServices;
