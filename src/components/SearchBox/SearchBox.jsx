import React, { useState, useRef } from 'react';
import './SearchBox.css';
import downArrow from '../../images/svg/down-arrow 1 (Traced).svg';
import keywordIcon from '../../images/svg/box-search.svg';
import locationIcon from '../../images/svg/location.svg';
import searchIcon from '../../images/svg/search-normal.svg';

const SearchBox = () => {
  const [showCategory, setShowCategory] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');

  const keywordSearch = useRef('');
  const locationSearch = useRef('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search">
      <div className="serach-ctn">
        <form className="form-control" onSubmit={handleSubmit}>
          <div className="search-category-ctn">
            <div
              className="category-btn"
              onClick={() => setShowCategory(!showCategory)}
            >
              <p>ALL</p>
              <img src={downArrow} alt="down-arrow icon" />
            </div>
            <ul
              className={
                showCategory
                  ? 'category-dropdown category-dropdown-show'
                  : 'category-dropdown'
              }
            >
              <li>Sports, Fitness, Bags, Luggage</li>
              <li>Books</li>
              <li>Mobiles, Computers</li>
              <li>Toys, Baby Products</li>
              <li>Men's Fashion</li>
              <li>Tv, Appliances, Electronics</li>
              <li>Gift Cards & Mobile Recharges</li>
            </ul>
          </div>
          <div className="search-keywords-ctn"></div>
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
            <img src={searchIcon} alt="search icon" />
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBox;
