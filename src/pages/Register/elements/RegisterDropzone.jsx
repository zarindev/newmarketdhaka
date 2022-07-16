import React from 'react';
import RegisterPreviewImage from './RegisterPreviewImage';
import RegisterPreviewName from './RegisterPreviewName';
import uploadEditIcon from '../../../images/svg/upload-edit.svg';

const RegisterDropzone = ({
  files,
  getRootProps,
  getInputProps,
  value,
  onChange,
  uploadPlaceholder,
  showPreview,
}) => {
  return (
    <label
      htmlFor="logo"
      className="register-form-upload-label"
      {...getRootProps({ onClick: (e) => e.preventDefault() })}
    >
      {showPreview === 'preview' && (
        <RegisterPreviewImage
          files={files}
          uploadPlaceholder={uploadPlaceholder}
        />
      )}

      {showPreview === 'name' && (
        <RegisterPreviewName
          files={files}
          uploadPlaceholder={uploadPlaceholder}
        />
      )}

      {files.length === 0 && (
        <p className="rgister-form-upload-label-text">
          Drag and drop, or
          <span className="upload-label-text-custom"> browse</span> your files
        </p>
      )}

      {files.length > 0 && (
        <img
          src={uploadEditIcon}
          alt="edit icon"
          className="upload-edit-icon"
        />
      )}

      <input
        type="file"
        name="companyLogo"
        className="register-form-upload-input"
        {...getInputProps({ value, onChange })}
        defaultValue=""
      />
    </label>
  );
};

export default RegisterDropzone;
