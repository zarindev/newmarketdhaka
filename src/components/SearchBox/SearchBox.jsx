import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './SearchBox.css';
import searchIcon from '../../images/svg/search-normal.svg';
import SearchDropdown from './SearchDropdown';
import { useSerQuery } from '../../hooks/useSerQuery';
import { useGlobalContext } from '../../context/AppProvider';
import { locations } from '../../pages/UploadService/uploadData';

const SearchBox = () => {
  const { serData } = useSerQuery();
  const { mergedSerTypeAll } = useGlobalContext();

  const navigate = useNavigate();

  // search via string matching
  const [keywordSer, setKeywordSer] = useState([]);
  const [isSearched, setIsSearched] = useState(false);

  const keywordRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();

    if (keywordRef.current?.value.length > 0) {
      const keywordFilter = serData.filter((service) =>
        service.title
          .toLowerCase()
          .includes(keywordRef.current?.value.toLowerCase())
      );
      setKeywordSer(keywordFilter);
    }

    if (keywordRef.current?.value.length === 0) {
      toast.info(
        `Pleasae select a 'Category' or 'Location' or input 'Keywords'`,
        {
          progress: undefined,
          toastId: 'searchOne',
        }
      );
    }
  };

  useEffect(() => {
    if (keywordSer.length > 0) {
      setIsSearched(true);
    }

    if (keywordRef.current?.value.length > 0 && keywordSer.length === 0) {
      toast.error(`No services found`, {
        progress: undefined,
        toastId: 'searchTwo',
      });
    }

    isSearched &&
      navigate('/results', {
        state: {
          id: 1,
          searchResult: keywordSer,
          searchText: keywordRef.current?.value,
        },
      });
  }, [navigate, keywordSer, isSearched]);

  return (
    <div className="search">
      <div className="serach-ctn">
        <form className="form-control" onSubmit={handleSearch}>
          <SearchDropdown
            dropType="Category"
            dropData={serData}
            dropCategoryData={mergedSerTypeAll}
          />
          <SearchDropdown
            dropType="Location"
            dropData={serData}
            dropLocationData={locations}
          />
          <input
            type="text"
            placeholder="Keywords"
            className="search-keyword"
            ref={keywordRef}
            onChange={() => keywordRef.current?.value}
          />
          <button className="search-btn">
            <img
              src={searchIcon}
              alt="search icon"
              className="search-btn-icon"
            />
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBox;
