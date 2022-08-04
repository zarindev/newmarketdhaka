import { useState } from 'react';
import './CategoryNav.css';
import CatNavLink from './CatNavLink';

const CategoryNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.addEventListener('scroll', function () {
    if (this.window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <div
      className={`${
        isScrolled
          ? 'category-nav-ctn category-nav-ctn-hide'
          : 'category-nav-ctn'
      }`}
    >
      <ul className="category-nav">
        <CatNavLink />
      </ul>
    </div>
  );
};

export default CategoryNav;
