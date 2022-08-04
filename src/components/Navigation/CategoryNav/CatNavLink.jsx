import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import dropdown from '../../../images/dropdown.png';
import { catNavData } from '../catNavData';

const CatNavLink = () => {
  return (
    <>
      {catNavData.map((item) => {
        const { category, links } = item;
        return (
          <li key={uuidv4()} className="dorp">
            <div className="dropdown">
              <button className="dropbtn">
                {category}
                <img src={dropdown} alt="" className="dropdown-icon" />
              </button>
              <div className="dropdown-content">
                {links.map((item) => {
                  const { label, link } = item;
                  return (
                    <span key={uuidv4()} className="cat-nav-link-ctn">
                      {label}
                    </span>
                  );
                })}
              </div>
            </div>
          </li>
        );
      })}
    </>
  );
};

export default CatNavLink;
