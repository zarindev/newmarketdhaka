import { useLocation } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import TopNav from '../../components/Navbar/TopNav';
import BottomNav from '../../components/Navbar/BottomNav';
import { useDocTitle } from '../../hooks/useDocTitle';
import ResultType from './ResultType';
import './SerachResult.css';

const SerachResult = () => {
  useDocTitle();

  const locState = useLocation()?.state;
  const searchResult = locState.searchResult;
  const searchText = locState.searchText;
  console.log(locState);

  return (
    <>
      <TopNav />
      <BottomNav />
      <div className="result">
        <ResultType searchResult={searchResult} searchText={searchText} />
      </div>
      <Footer />
    </>
  );
};

export default SerachResult;
