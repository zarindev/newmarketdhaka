import "./BlockWidget.css";

const BlockWidget = ({ type, value }) => {
  return (
    <section aria-label="widget" className="block-widget">
      <p className="widget-value">{value}</p>
      <p className="widget-type">{type}</p>
    </section>
  );
};

export default BlockWidget;
