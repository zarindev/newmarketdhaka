import './Error.css';
import { Link } from 'react-router-dom';
import error from '../../images/svg/404.svg';
import TopNav from '../../components/Navigation/TopNav/TopNav';
import Footer from '../../components/Footer/Footer';
import RoundedButton from '../../components/RoundedButton/RoundedButton';

const Error = () => {
  return (
    <>
      <TopNav />
      <div className="error">
        <img src={error} alt="404" className="error-img" />
        <Link to="/">
          <RoundedButton buttonText="Go Back" />
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Error;
