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
}) => {
  const [files, setFiles] = useState([]);
  const [photo, setPhoto] = useState({ name: '', uri: '' });

  const onDrop = useCallback(
    (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );

      acceptedFiles.forEach((file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          setPhoto({ name: file.name, uri: reader.result });
          file['photo'] = photo;
        };
        reader.onloadend = () => {
          setValue(name, file, { require: true });
        };
      });
    },
    [name, setValue, photo]
  );

  const acceptType = [
    {
      'image/*': ['.jpeg', '.png', '.webp'],
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
  }, [files, getFiles]);

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
