const SingleService = ({
  serSubType,
  serItem1,
  serItem2,
  serItem3,
  serItem4,
  serItem5,
  serItem6,
  serItem7,
  serItem8,
  serItem9,
}) => {
  return (
    <div className="all-services-content">
      <h4 className="all-services-list-type">{serSubType}</h4>
      <ul className="all-services-lists">
        {serItem1 && <li className="all-services-list">{serItem1}</li>}
        {serItem2 && <li className="all-services-list">{serItem2}</li>}
        {serItem3 && <li className="all-services-list">{serItem3}</li>}
        {serItem4 && <li className="all-services-list">{serItem4}</li>}
        {serItem5 && <li className="all-services-list">{serItem5}</li>}
        {serItem6 && <li className="all-services-list">{serItem6}</li>}
        {serItem7 && <li className="all-services-list">{serItem7}</li>}
        {serItem8 && <li className="all-services-list">{serItem8}</li>}
        {serItem9 && <li className="all-services-list">{serItem9}</li>}
      </ul>
    </div>
  );
};

export default SingleService;
