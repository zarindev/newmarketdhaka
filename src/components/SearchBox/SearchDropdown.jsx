import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { snakeCase, titleCase } from '../../functions/formatString';

const SearchDropdown = ({
  showDropdown,
  setShowDropdown,
  mergedSerTypeAll,
}) => {
  return (
    <ul
      className={
        showDropdown
          ? 'category-dropdown category-dropdown-show'
          : 'category-dropdown'
      }
    >
      {mergedSerTypeAll.map((item) => {
        return (
          <Link
            to={`/home/${snakeCase(item)}`}
            key={uuidv4()}
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <li className="dropdown-item">{titleCase(item)}</li>
          </Link>
        );
      })}
    </ul>
  );
};

export default SearchDropdown;
