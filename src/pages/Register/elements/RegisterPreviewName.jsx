import React from 'react';

const RegisterPreviewName = ({ files, uploadPlaceholderImg }) => {
  return (
    <>
      {files.length === 0 ? (
        <img
          src={uploadPlaceholderImg}
          alt="upload"
          className="register-form-upload-image"
        />
      ) : (
        <p className="register-preview-name">{files[0].name}</p>
      )}
    </>
  );
};

export default RegisterPreviewName;
