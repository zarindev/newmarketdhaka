import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './SearchBox.css';
import downArrow from '../../images/svg/down-arrow 1 (Traced).svg';
import searchIcon from '../../images/svg/search-normal.svg';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import SearchDropdown from './SearchDropdown';
import { useGlobalContext } from '../../context/AppProvider';

const SearchBox = () => {
  const { showDropdown, setShowDropdown, mergedSerTypeAll } =
    useGlobalContext();

  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');

  const keywordSearch = useRef(null);
  const locationSearch = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const buttonCtnRef = useRef(null);
  useOnClickOutside(buttonCtnRef, () => setShowDropdown(false));

  return (
    <div className="search">
      <div className="serach-ctn">
        <form className="form-control" onSubmit={handleSubmit}>
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
            ref={keywordSearch}
            onChange={() => setKeyword(keywordSearch.current.value)}
          />
          <input
            type="text"
            placeholder="Location"
            className="search-location search-input"
            ref={locationSearch}
            onChange={() => setLocation(locationSearch.current.value)}
          />
          <Link to="/results" className="search-btn-link">
            <button className="search-btn">
              <img
                src={searchIcon}
                alt="search icon"
                className="search-btn-icon"
              />
              Search
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SearchBox;
