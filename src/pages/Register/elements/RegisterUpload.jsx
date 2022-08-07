import { useState, useEffect, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import RegisterDropzone from './RegisterDropzone';

const RegisterUpload = ({
  isTypeImg,
  uploadPlaceholderImg,
  changePlaceholderText,
  getFiles,
  value,
  name,
  setValue,
  setError,
  clearErrors,
}) => {
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

  const acceptType = [
    {
      'image/*': ['.jpeg', '.png'],
    },
    {
      'text/plain': ['.txt'],
      'text/html': ['.html', '.htm'],
      'text/csv': ['.csv'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
        ['.docx'],
      'application/pdf': ['.pdf'],
    },
  ];

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: isTypeImg ? acceptType[0] : acceptType[1],
    maxFiles: 1,
    multiple: false,
  });

  useEffect(() => {
    if (getFiles) {
      getFiles(files);
    }
  }, [files]);

  return (
    <RegisterDropzone
      files={files}
      getRootProps={getRootProps}
      getInputProps={getInputProps}
      value={value}
      onChange={onchange}
      isTypeImg={isTypeImg}
      uploadPlaceholderImg={uploadPlaceholderImg}
      changePlaceholderText={changePlaceholderText}
    />
  );
};

export default RegisterUpload;
