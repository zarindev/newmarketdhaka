import './RoundedButton.css';

const RoundedButton = ({ text, icon, altText }) => {
  return (
    <button className="rounded-btn">
      <p className="rounded-btn-text">{text}</p>
      {icon && altText && (
        <img src={icon} alt={altText} className="rounded-btn-icon" />
      )}
    </button>
  );
};

export default RoundedButton;
