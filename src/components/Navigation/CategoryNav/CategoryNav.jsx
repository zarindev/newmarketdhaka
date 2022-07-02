import React from "react";
import "./CategoryNav.css";
import dropdown from "../../../images/dropdown.png";

function CategoryNav() {
  return (
    <div className="category-nav-ctn">
      <ul className="category-nav">
        <li className="drop">
          <div className="dropdown">
            <button className="dropbtn">
              Rentals
              <img src={dropdown} alt="" className="dropdown-icon" />
            </button>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </li>
        <li className="drop">
          <div className="dropdown">
            <button className="dropbtn">
              Jobs
              <img src={dropdown} alt="" className="dropdown-icon" />
            </button>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </li>
        <li className="drop">
          <div className="dropdown">
            <button className="dropbtn">
              Car Services
              <img src={dropdown} alt="" className="dropdown-icon" />
            </button>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </li>
        <li className="drop">
          <div className="dropdown">
            <button className="dropbtn">
              Room Mates
              <img src={dropdown} alt="" className="dropdown-icon" />
            </button>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </li>
        <li className="drop">
          <div className="dropdown">
            <button className="dropbtn">
              Entertainment
              <img src={dropdown} alt="" className="dropdown-icon" />
            </button>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </li>
        <li className="drop">
          <div className="dropdown">
            <button className="dropbtn">
              Education
              <img src={dropdown} alt="" className="dropdown-icon" />
            </button>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </li>
        <li className="drop">
          <div className="dropdown">
            <button className="dropbtn">
              Travell
              <img src={dropdown} alt="" className="dropdown-icon" />
            </button>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </li>
        <li className="drop">
          <div className="dropdown">
            <button className="dropbtn">
              More
              <img src={dropdown} alt="" className="dropdown-icon" />
            </button>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default CategoryNav;
