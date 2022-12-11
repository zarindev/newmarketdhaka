import React from "react";
import "./select.css";
import { Controller } from "react-hook-form";
import Select from "react-select";

const FixedSelect = ({
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
      render={({ field }) => (
        <Select
          {...field}
          id={id}
          className="reactSelect"
          closeMenuOnSelect={true}
          isClearable={true}
          isMulti={isMulti}
          options={items}
          placeholder={placeholder}
        />
      )}
    />
  );
};

export default FixedSelect;
