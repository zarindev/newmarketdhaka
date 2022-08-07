import React from 'react';

const RegisterPreviewImage = ({ files, uploadPlaceholderImg }) => {
  return (
    <>
      {files.length === 0 ? (
        <img
          src={uploadPlaceholderImg}
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
    </>
  );
};

export default RegisterPreviewImage;
