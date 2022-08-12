import { Controller } from 'react-hook-form';
import Select from 'react-select';

const UploadSelect = ({ name, control, items, isMulti }) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: true }}
      render={({ field }) => (
        <Select
          {...field}
          closeMenuOnSelect={true}
          isClearable={true}
          isMulti={isMulti}
          options={items}
          placeholder={
            <p className="upload-ser-tag-placeholder">Select category</p>
          }
        />
      )}
    />
  );
};

export default UploadSelect;
