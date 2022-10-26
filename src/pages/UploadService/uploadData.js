import flagBD from "../../images/flag-bd.svg";
import flagIN from "../../images/flag-in.svg";
import flagUS from "../../images/flag-us.svg";
import flagGB from "../../images/flag-gb.svg";

export const closingDays = [
  { value: "Sat", label: "Sat" },
  { value: "Sun", label: "Sat" },
  { value: "Mon", label: "Mon" },
  { value: "Tue", label: "Tue" },
  { value: "Wed", label: "Wed" },
  { value: "Thu", label: "Thu" },
  { value: "Fri", label: "Fri" },
];

export const locations = [
  {
    value: "Bangladesh",
    label: (
      <div className="countryWrapper">
        <img
          src={flagBD}
          alt="flag BD"
          className="countryFlag"
          loading="lazy"
        />
        Bangladesh
      </div>
    ),
  },
  {
    value: "India",
    label: (
      <div className="countryWrapper">
        <img
          src={flagIN}
          alt="flag IN"
          className="countryFlag"
          loading="lazy"
        />
        India
      </div>
    ),
  },
  {
    value: "United States",
    label: (
      <div className="countryWrapper">
        <img
          src={flagUS}
          alt="flag UK"
          className="countryFlag"
          loading="lazy"
        />
        United States
      </div>
    ),
  },
  {
    value: "Great Britain",
    label: (
      <div className="countryWrapper">
        <img
          src={flagGB}
          alt="flag US"
          className="countryFlag"
          loading="lazy"
        />
        Great Britain
      </div>
    ),
  },
];

export const dragAndDrops = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
