import React, { useState, useRef, useEffect } from 'react';
import './SearchBox.css';
import downArrow from '../../images/svg/down-arrow 1 (Traced).svg';
import searchIcon from '../../images/svg/search-normal.svg';
import { motion } from 'framer-motion';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { dropdownData } from './dropdownData';

const SearchBox = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');

  const keywordSearch = useRef(null);
  const locationSearch = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const buttonCtnRef = useRef(null);
  useOnClickOutside(buttonCtnRef, () => setShowDropdown(false));

  const variants = {
    open: { x: 0 },
    closed: { x: '-200%' },
  };

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
            <motion.ul
              className={`${
                showDropdown
                  ? 'category-dropdown category-dropdown-show'
                  : 'category-dropdown'
              }`}
              animate={showDropdown ? 'open' : 'closed'}
              variants={variants}
            >
              {dropdownData.map((item) => {
                return (
                  <li className="dropdown-item" key={item.id}>
                    {item.title}
                  </li>
                );
              })}
            </motion.ul>
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
