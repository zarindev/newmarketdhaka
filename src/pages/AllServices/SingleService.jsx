import React from "react";

const SingleService = ({ serSubType, serItems }) => {
  return (
    <div className="all-services-content">
      <h4 className="all-services-list-type">{serSubType}</h4>
      <ul className="all-services-lists">
        {serItems.map((item, i) => (
          <li className="all-services-list" key={i}>
            {item.serItem}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SingleService;
