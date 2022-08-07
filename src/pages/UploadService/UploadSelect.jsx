import { Controller } from 'react-hook-form';
import CreatableSelect from 'react-select/creatable';

const UploadSelect = ({ name, control, items, isMulti }) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: true }}
      render={({ field }) => (
        <CreatableSelect
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
