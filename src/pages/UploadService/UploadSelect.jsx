import { Controller } from 'react-hook-form';
import Select from 'react-select';

const UploadSelect = ({
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
        <Select
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

export default UploadSelect;
