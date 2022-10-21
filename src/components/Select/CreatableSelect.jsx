import { useState, useEffect } from "react";
import "./select.css";
import { v4 as uuidv4 } from "uuid";
import { Controller } from "react-hook-form";
import Creatable from "react-select/creatable";
import { titleCase } from "../../functions/formatString";

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
    const formatedValue = titleCase(value);
    setInputValue(formatedValue);
  };

  const handleChange = () => {
    const newOption = {
      id: 0,
      label: inputValue,
      value: inputValue,
    };

    inputValue.length > 0 && setOptions([...options, newOption]);
    setInputValue("");
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: isRequired }}
      render={({ field: { onChange, value, ref } }) => (
        <Creatable
          inputId={id}
          inputRef={ref}
          className="reactSelect"
          closeMenuOnSelect={true}
          isClearable={true}
          isMulti={isMulti}
          options={options}
          placeholder={placeholder}
          inputValue={inputValue}
          value={items.find((c) => c.value === value)}
          onInputChange={handleInputChange}
          onChange={(val) => {
            onChange(val);
            handleChange();
          }}
          getNewOptionData={(inputValue, optionLabel) => ({
            id: 0,
            label: titleCase(optionLabel),
            value: titleCase(inputValue),
          })}
        />
      )}
    />
  );
};

export default CreatableSelect;
