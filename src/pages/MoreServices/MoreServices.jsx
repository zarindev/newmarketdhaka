import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Footer from '../../components/Footer/Footer';
import CategoryNav from '../../components/Navigation/CategoryNav/CategoryNav';
import TopNav from '../../components/Navigation/TopNav/TopNav';
import SliderComponent from '../../components/ServicesSlider/SliderComponent';
import arrowCircleDown from '../../images/svg/arrow-circle-down.svg';
import './MoreServices.css';
import { useDocTitle } from '../../hooks/useDocTitle';
import RoundedBtn from '../../components/Button/RoundedBtn';
import { useGlobalContext } from '../../context/AppProvider';

const MoreServices = () => {
  useDocTitle();

  const { mergedSerType } = useGlobalContext();

  return (
    <>
      <TopNav />
      <CategoryNav />
      <div className="more-services-ctn">
        <div className="more-services">
          {mergedSerType.map((service) => {
            return <SliderComponent key={uuidv4()} serType={service} />;
          })}
        </div>
        {mergedSerType.length !== 0 && (
          <Link to="/more_services/all_services">
            <RoundedBtn
              text="See All Services"
              icon={arrowCircleDown}
              altText="arrow-circle-down"
            />
          </Link>
        )}
      </div>
      <Footer />
    </>
  );
};

export default MoreServices;
