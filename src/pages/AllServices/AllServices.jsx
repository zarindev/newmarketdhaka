import { v4 as uuidv4 } from 'uuid';
import './AllServices.css';
import TopNav from '../../components/Navbar/TopNav';
import Services from '../../components/Services/Services';
import AllServicesList from './AllServicesList';
import Footer from '../../components/Footer/Footer';
import { useDocTitle } from '../../hooks/useDocTitle';
import { servicesData } from '../../components/Services/servicesData';
import { allServicesData } from './allServicesData';

const AllServices = () => {
  useDocTitle();

  return (
    <>
      <TopNav />
      <div className="all-services">
        <div className="all-services-banner">
          <h1 className="all-services-title">All Services</h1>
        </div>
        <Services serData={servicesData} />
        <div className="all-services-contents">
          {allServicesData.map((service) => {
            return <AllServicesList key={uuidv4()} {...service} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllServices;
