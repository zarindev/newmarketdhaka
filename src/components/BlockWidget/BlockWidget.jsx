import './BlockWidget.css';

const BlockWidget = ({ type, value }) => {
  return (
    <div className="block-widget">
      <p className="widget-value">{value}</p>
      <p className="widget-type">{type}</p>
    </div>
  );
};

export default BlockWidget;
