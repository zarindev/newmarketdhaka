import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './SearchBox.css';
import downArrow from '../../images/svg/down-arrow 1 (Traced).svg';
import searchIcon from '../../images/svg/search-normal.svg';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import SearchDropdown from './SearchDropdown';
import { useGlobalContext } from '../../context/AppProvider';

const SearchBox = () => {
  const { serData, showDropdown, setShowDropdown, mergedSerTypeAll } =
    useGlobalContext();

  const navigate = useNavigate();

  // search via string matching
  const [keywordSer, setKeywordSer] = useState([]);
  const [locationSer, setLocationSer] = useState([]);
  const [isSearched, setIsSearched] = useState(false);

  const keywordRef = useRef(null);
  const locationRef = useRef(null);

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

    if (locationRef.current?.value.length > 0) {
      const locationFilter = serData.filter((service) =>
        service.location
          .toLowerCase()
          .includes(locationRef.current?.value.toLowerCase())
      );
      setLocationSer(locationFilter);
    }

    if (
      keywordRef.current?.value.length === 0 &&
      locationRef.current?.value.length === 0
    ) {
      toast.info(`Pleasae input 'Keywords' or 'Location'`, {
        progress: undefined,
        toastId: 'searchOne',
      });
    }
  };

  useEffect(() => {
    if (keywordSer.length > 0 || locationSer.length > 0) {
      setIsSearched(true);
    }

    if (
      (keywordRef.current?.value.length > 0 && keywordSer.length === 0) ||
      (locationRef.current?.value.length > 0 && locationSer.length === 0)
    ) {
      toast.error(`No services found`, {
        progress: undefined,
        toastId: 'searchTwo',
      });
    }

    isSearched &&
      navigate('/results', {
        state: {
          id: 1,
          keywordSer: keywordSer,
          locationSer: locationSer,
          keywordVal: keywordRef.current?.value,
          locationVal: locationRef.current?.value,
        },
      });
  }, [navigate, keywordSer, locationSer, isSearched]);

  const buttonCtnRef = useRef(null);
  useOnClickOutside(buttonCtnRef, () => setShowDropdown(false));

  return (
    <div className="search">
      <div className="serach-ctn">
        <form className="form-control" onSubmit={handleSearch}>
          <div className="search-category-ctn" ref={buttonCtnRef}>
            <div
              className={`${
                showDropdown
                  ? 'category-btn category-btn-active'
                  : 'category-btn'
              }`}
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <p className="category-btn-text">ALL</p>
              <img src={downArrow} alt="down-arrow icon" />
            </div>
            <SearchDropdown
              showDropdown={showDropdown}
              setShowDropdown={setShowDropdown}
              mergedSerTypeAll={mergedSerTypeAll}
            />
          </div>
          <input
            type="text"
            placeholder="Keywords"
            className="search-keywords search-input"
            ref={keywordRef}
            onChange={() => keywordRef.current?.value}
          />
          <input
            type="text"
            placeholder="Location"
            className="search-location search-input"
            ref={locationRef}
            onChange={() => locationRef.current?.value}
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
