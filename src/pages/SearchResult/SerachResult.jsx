import { useLocation } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import CategoryNav from '../../components/Navigation/CategoryNav/CategoryNav';
import TopNav from '../../components/Navigation/TopNav/TopNav';
import { useDocTitle } from '../../hooks/useDocTitle';
import ScrollToTop from '../../utils/ScrollToTop';
import ResultType from './ResultType';
import './SerachResult.css';

const SerachResult = () => {
  useDocTitle();

  const location = useLocation();
  const { state } = location;
  const keywordResult = state.keywordSer;
  const locationResult = state.locationSer;

  return (
    <ScrollToTop>
      <TopNav />
      <CategoryNav />
      <div className="result">
        <ResultType result={keywordResult} />
        <ResultType result={locationResult} />
      </div>
      <Footer />
    </ScrollToTop>
  );
};

export default SerachResult;
