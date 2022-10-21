import "./MoreServices.css";
import { v4 as uuidv4 } from "uuid";
import Footer from "../../components/Footer/Footer";
import TopNav from "../../components/Navbar/TopNav";
import BottomNav from "../../components/Navbar/BottomNav";
import SliderComponent from "../../components/ServicesSlider/SliderComponent";
import { useDocTitle } from "../../hooks/useDocTitle";
import { useGlobalContext } from "../../context/AppProvider";

const MoreServices = () => {
  useDocTitle();

  const { mergedSerType } = useGlobalContext();

  return (
    <>
      <TopNav />
      <BottomNav />
      <div className="more-services-ctn">
        <div className="more-services">
          {mergedSerType.map((serType) => {
            return <SliderComponent key={uuidv4()} serType={serType} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MoreServices;
