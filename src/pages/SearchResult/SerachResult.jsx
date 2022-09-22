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
  const searchResult = locState.searchResult;
  const searchText = locState.searchText;
  console.log(locState);

  return (
    <ScrollToTop>
      <TopNav />
      <CategoryNav />
      <div className="result">
        <ResultType searchResult={searchResult} searchText={searchText} />
      </div>
      <Footer />
    </ScrollToTop>
  );
};

export default SerachResult;
