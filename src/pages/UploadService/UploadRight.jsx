import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import uploadPlaceholder from '../../images/upload-image-placeholder.png';
import RegisterDropzone from '../Register/elements/RegisterDropzone';

const UploadRight = (props) => {
  const { value, name, setValue, setError, clearErrors } = props;

  const [files, setFiles] = useState([]);
  const onDrop = useCallback(
    (acceptedFiles, rejectedFiles) => {
      if (rejectedFiles && rejectedFiles.length > 0) {
        setValue(name, []);
        setFiles([]);
        setError(name, {
          type: 'manual',
          message: rejectedFiles && rejectedFiles[0].errors[0].message,
        });
      } else {
        setFiles(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        );
      }
      clearErrors(name);
      acceptedFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onabort = () => console.log('file reading was aborted');
        reader.onerror = () => console.log('file reading has failed');
        reader.onloadend = () => {
          setValue(name, file, { shouldValidate: true });
        };
        reader.readAsDataURL(file);
      });
    },
    [[name, setValue, setError, clearErrors]]
  );
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.png'],
    },
    maxFiles: 1,
    multiple: false,
  });

  return (
    <RegisterDropzone
      files={files}
      getRootProps={getRootProps}
      getInputProps={getInputProps}
      value={value}
      onChange={onchange}
      uploadPlaceholder={uploadPlaceholder}
      showPreview="preview"
      changePlaceholderText={true}
    />
  );
};

export default UploadRight;
