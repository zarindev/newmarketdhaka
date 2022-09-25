import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { snakeCase, titleCase } from '../../functions/formatString';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import downArrow from '../../images/svg/arrow-down.svg';
import Loading from '../Loading/Loading';

const SearchDropdown = ({
  dropClass,
  dropType,
  dropData,
  dropCategoryData,
  dropLocationData,
}) => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const btnWrapperRef = useRef(null);
  useOnClickOutside(btnWrapperRef, () => setShowDropdown(false));

  const showSearchLocation = (e) => {
    setShowDropdown(!showDropdown);

    const locationText = e.target.textContent;
    console.log(locationText);
    const mergedSer = dropData?.filter(
      (service) => snakeCase(service.location) === snakeCase(locationText)
    );

    navigate('/results', {
      state: {
        id: 1,
        searchResult: mergedSer,
        searchText: locationText,
      },
    });
  };

  return (
    <div className={`${dropClass} search-category-ctn`} ref={btnWrapperRef}>
      <div
        className={
          showDropdown ? 'category-btn category-btn-active' : 'category-btn'
        }
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <p className="category-btn-text">{dropType}</p>
        <img src={downArrow} alt="down-arrow" />
      </div>
      <ul
        className={
          showDropdown
            ? 'category-dropdown category-dropdown-show'
            : 'category-dropdown'
        }
      >
        {dropType === 'Category' ? (
          dropCategoryData.map((item) => (
            <li
              className="dropdown-item"
              key={uuidv4()}
              onClick={() => setShowDropdown(!showDropdown)}
            >
              {dropData?.length > 0 ? (
                <Link to={`/home/${snakeCase(item)}`}>{titleCase(item)}</Link>
              ) : (
                <Loading color="#ce2d4f" size={40} />
              )}
            </li>
          ))
        ) : dropData?.length > 0 ? (
          dropLocationData.map((item) => (
            <li
              className="dropdown-item"
              key={uuidv4()}
              onClick={showSearchLocation}
            >
              {item.label}
            </li>
          ))
        ) : (
          <Loading color="#ce2d4f" size={40} />
        )}
      </ul>
    </div>
  );
};

export default SearchDropdown;
