import './Button.css';

const RoundedBtn = ({ text, icon, altText, btnClass, onClick }) => {
  return (
    <button className={`rounded-btn ${btnClass}`} onClick={onClick}>
      <p className="rounded-btn-text">{text}</p>
      {icon && altText && (
        <img src={icon} alt={altText} className="rounded-btn-icon" />
      )}
    </button>
  );
};

export default RoundedBtn;
