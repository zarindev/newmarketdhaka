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

  const locState = useLocation()?.state;
  const keywordResult = locState.keywordSer;
  const locationResult = locState.locationSer;
  const keywordVal = locState.keywordVal;
  const locationVal = locState.locationVal;

  return (
    <ScrollToTop>
      <TopNav />
      <CategoryNav />
      <div className="result">
        <ResultType result={keywordResult} searchVal={keywordVal} />
        <ResultType result={locationResult} searchVal={locationVal} />
      </div>
      <Footer />
    </ScrollToTop>
  );
};

export default SerachResult;
