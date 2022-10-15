import React from "react";
import "./select.css";
import { Controller } from "react-hook-form";
import Creatable from "react-select/creatable";

const CreatableSelect = ({
  name,
  control,
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
        <Creatable
          {...field}
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

export default CreatableSelect;
