import React from 'react';

const RegisterDropzone = ({
  files,
  getRootProps,
  getInputProps,
  value,
  onChange,
  uploadPlaceholder,
}) => {
  return (
    <label
      htmlFor="logo"
      className="register-form-upload-label"
      {...getRootProps({ onClick: (e) => e.preventDefault() })}
    >
      {files.length === 0 ? (
        <img
          src={uploadPlaceholder}
          alt="upload"
          className="register-form-upload-image"
        />
      ) : (
        <img
          src={files[0].preview}
          alt="preview"
          className="register-form-upload-image"
        />
      )}

      <p className="rgister-form-upload-label-text">
        Drag and drop, or
        <span className="upload-label-text-custom"> browse</span> your files
      </p>
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
