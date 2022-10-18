import { useState } from "react";
import "./select.css";
import { Controller } from "react-hook-form";
import Creatable from "react-select/creatable";
import { v4 as uuidv4 } from "uuid";

const CreatableSelect = ({
  name,
  control,
  id,
  items,
  isMulti,
  placeholder,
  isRequired,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState(items);

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleChange = () => {
    const newOption = { label: inputValue, value: inputValue, id: uuidv4() };
    inputValue.length > 0
      ? setOptions([...options, newOption])
      : setInputValue("");
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: isRequired }}
      render={({ field }) => (
        <Creatable
          {...field}
          id={id}
          className="reactSelect"
          closeMenuOnSelect={true}
          isClearable={true}
          isMulti={isMulti}
          options={options}
          placeholder={placeholder}
          onChange={handleChange}
          onInputChange={handleInputChange}
          inputValue={inputValue}
          value={options.value}
          controlShouldRenderValue={true}
        />
      )}
    />
  );
};

export default CreatableSelect;
