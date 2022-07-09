import React, { useState, useRef, useEffect } from 'react';
import './SearchBox.css';
import downArrow from '../../images/svg/down-arrow 1 (Traced).svg';
import keywordIcon from '../../images/svg/box-search.svg';
import locationIcon from '../../images/svg/location.svg';
import searchIcon from '../../images/svg/search-normal.svg';
import { useOnClickOutside } from '../../context';

const SearchBox = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');

  const keywordSearch = useRef('');
  const locationSearch = useRef('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const buttonCtnRef = useRef();
  useOnClickOutside(buttonCtnRef, () => setShowDropdown(false));

  return (
    <div className="search">
      <div className="serach-ctn">
        <form className="form-control" onSubmit={handleSubmit}>
          <div className="search-category-ctn" ref={buttonCtnRef}>
            <div
              className="category-btn"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <p>ALL</p>
              <img src={downArrow} alt="down-arrow icon" />
            </div>
            <ul
              className={
                showDropdown
                  ? 'category-dropdown category-dropdown-show'
                  : 'category-dropdown'
              }
            >
              <li className="dropdown-item">Sports, Fitness, Bags, Luggage</li>
              <li className="dropdown-item">Books</li>
              <li className="dropdown-item">Mobiles, Computers</li>
              <li className="dropdown-item">Toys, Baby Products</li>
              <li className="dropdown-item">Men's Fashion</li>
              <li className="dropdown-item">Tv, Appliances, Electronics</li>
              <li className="dropdown-item">Gift Cards & Mobile Recharges</li>
            </ul>
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
