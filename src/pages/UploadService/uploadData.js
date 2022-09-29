import flagBD from '../../images/flag-bd.svg';
import flagIN from '../../images/flag-in.svg';
import flagUS from '../../images/flag-us.svg';
import flagGB from '../../images/flag-gb.svg';

export const categoryTags = [
  { value: 'Cleaning', label: <p className="selectLabel">Cleaning</p> },
  { value: 'Car Cleaning', label: <p className="selectLabel">Car Cleaning</p> },
  { value: 'Car Repair', label: <p className="selectLabel">Car Repair</p> },
  { value: 'Business', label: <p className="selectLabel">Business</p> },
  { value: 'Learning', label: <p className="selectLabel">Learning</p> },
];

export const closingDays = [
  { value: 'Sat', label: <p className="selectLabel">Sat</p> },
  { value: 'Sun', label: <p className="selectLabel">Sat</p> },
  { value: 'Mon', label: <p className="selectLabel">Mon</p> },
  { value: 'Tue', label: <p className="selectLabel">Tue</p> },
  { value: 'Wed', label: <p className="selectLabel">Wed</p> },
  { value: 'Thu', label: <p className="selectLabel">Thu</p> },
  { value: 'Fri', label: <p className="selectLabel">Fri</p> },
];

export const locations = [
  {
    value: 'Bangladesh',
    label: (
      <div className="countryWrapper">
        <img
          src={flagBD}
          alt="flag BD"
          className="countryFlag"
          loading="lazy"
        />
        <p className="selectLabel">Bangladesh</p>
      </div>
    ),
  },
  {
    value: 'India',
    label: (
      <div className="countryWrapper">
        <img
          src={flagIN}
          alt="flag IN"
          className="countryFlag"
          loading="lazy"
        />
        <p className="selectLabel">India</p>
      </div>
    ),
  },
  {
    value: 'United States',
    label: (
      <div className="countryWrapper">
        <img
          src={flagUS}
          alt="flag UK"
          className="countryFlag"
          loading="lazy"
        />
        <p className="selectLabel">United States</p>
      </div>
    ),
  },
  {
    value: 'Great Britain',
    label: (
      <div className="countryWrapper">
        <img
          src={flagGB}
          alt="flag US"
          className="countryFlag"
          loading="lazy"
        />
        <p className="selectLabel">Great Britain</p>
      </div>
    ),
  },
];

export const dragAndDrops = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
