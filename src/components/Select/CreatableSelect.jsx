import { useState, useEffect } from "react";
import "./select.css";
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
          options={items}
          placeholder={placeholder}
          value={items.find((item) => item.value === value)}
          onChange={(val) => {
            onChange(val);
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
