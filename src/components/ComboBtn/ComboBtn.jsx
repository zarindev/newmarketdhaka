import './ComboBtn.css';

const ComboBtn = ({ btnOneText, btnTwoText }) => {
  return (
    <div className="combo-btn-ctn">
      <button className="combo-btn">{btnOneText}</button>
      <button className="combo-btn combo-btn-two">{btnTwoText}</button>
    </div>
  );
};

export default ComboBtn;
