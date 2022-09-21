import './NotFound.css';
import { Link } from 'react-router-dom';
import error from '../../images/svg/404.svg';
import TopNav from '../../components/Navigation/TopNav/TopNav';
import Footer from '../../components/Footer/Footer';
import RoundedBtn from '../../components/Button/RoundedBtn';
import { useDocTitle } from '../../hooks/useDocTitle';

const NotFound = () => {
  useDocTitle(404);

  return (
    <>
      <TopNav />
      <div className="error">
        <img src={error} alt="404" className="error-img" loading="lazy" />
        <Link to="/">
          <RoundedBtn buttonText="Go Back" />
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
