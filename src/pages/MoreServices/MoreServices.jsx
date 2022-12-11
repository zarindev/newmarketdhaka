import "./moreservices.css";
import { v4 as uuidv4 } from "uuid";
import Footer from "../../components/Footer/Footer";
import TopNav from "../../components/Navbar/TopNav";
import BottomNav from "../../components/Navbar/BottomNav";
import SliderComponent from "../../components/ServicesSlider/SliderComponent";
import { useDocTitle } from "../../hooks/useDocTitle";
import { useGlobalContext } from "../../context/AppProvider";
import Loading from "../../components/Loading/Loading";

const MoreServices = () => {
  useDocTitle();

  const { mergedSerType } = useGlobalContext();

  return (
    <>
      <TopNav />
      <BottomNav />
      <div className="more-services-ctn">
        <div className="more-services">
          {mergedSerType.length === 0 ? (
            <Loading color="#ce2d4f" size={115} />
          ) : (
            mergedSerType.map((serType) => (
              <SliderComponent key={uuidv4()} serType={serType} />
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MoreServices;
