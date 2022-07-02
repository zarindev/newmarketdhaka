import React, { useState } from "react";
import "./SearchBox.css";
import downArrow from "../../images/svg/down-arrow 1 (Traced).svg";
import keywordIcon from "../../images/svg/box-search.svg";
import locationIcon from "../../images/svg/location.svg";
import searchIcon from "../../images/svg/search-normal.svg";

const SearchBox = () => {
  const [showCategory, setShowCategory] = useState(false);

  return (
    <div className="search">
      <div className="serach-items">
        <form className="form-control">
          <div className="search-category-ctn">
            <div
              className="category-btn"
              onClick={() => setShowCategory(!showCategory)}
            >
              ALL
              <img src={downArrow} alt="down-arrow icon" />
            </div>
            <ul
              className={
                showCategory
                  ? "category-dropdown category-dropdown-show"
                  : "category-dropdown"
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
          <div className="search-keywords-ctn">
            
          </div>
          <input
            type="text"
            placeholder="Keywords"
            className="search-keywords"
          />
          <input
            type="text"
            placeholder="Location"
            className="search-location"
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
