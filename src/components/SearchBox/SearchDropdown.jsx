import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';
import { snakeCase, titleCase } from '../../functions/formatString';

const SearchDropdown = ({
  showDropdown,
  setShowDropdown,
  mergedSerTypeAll,
}) => {
  const variants = {
    open: { x: 0 },
    closed: { x: '-100%' },
  };

  return (
    <motion.ul
      className={`${
        showDropdown
          ? 'category-dropdown category-dropdown-show'
          : 'category-dropdown'
      }`}
      animate={showDropdown ? 'open' : 'closed'}
      variants={variants}
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
    </motion.ul>
  );
};

export default SearchDropdown;
