import { useState, useEffect, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";
import RegisterDropzone from "./RegisterDropzone";

const RegisterUpload = ({
  id,
  isTypeImg,
  uploadPlaceholderImg,
  changePlaceholderText,
  getFiles,
  name,
  setValue,
}) => {
  const [files, setFiles] = useState([]);

  // const cldUrl = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLD_CLOUD_NAME}/image/upload`;

  const onDrop = useCallback(
    (acceptedFiles, fileRejections) => {
      fileRejections.forEach((file) => {
        file.errors.forEach((err) => {
          let error = "";
          if (err.code === "file-too-large") {
            error = "File is larger than 1MB";
          }
          if (err.code === "file-invalid-type") {
            error = "File type must be .jpeg, .png, .webp";
          }

          toast.error(error, {
            progress: undefined,
            toastId: err.code,
          });
        });
      });

      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );

      acceptedFiles.forEach(async (file) => {
        // const fileData = new FormData();
        // fileData.append("file", file);
        // fileData.append(
        //   "upload_preset",
        //   process.env.REACT_APP_CLD_UPLOAD_PRESET
        // );

        // const res = await fetch(cldUrl, {
        //   method: "POST",
        //   body: fileData,
        // });
        // const data = await res.json();

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          // file["publicId"] = data.public_id;
        };
        reader.onloadend = () => {
          setValue(name, file, { require: true });
        };
      });
    },
    [
      name,
      setValue,
      // cldUrl
    ]
  );

  const acceptImg = {
    "image/*": [".jpeg", ".png", ".webp"],
  };

  const acceptDoc = {
    "text/plain": [".txt"],
    "text/html": [".html", ".htm"],
    "text/csv": [".csv"],
    "application/msword": [".doc"],
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [
      ".docx",
    ],
    "application/pdf": [".pdf"],
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: isTypeImg ? acceptImg : acceptDoc,
    maxFiles: 1,
    multiple: false,
    maxSize: 1000000,
  });

  useEffect(() => {
    if (getFiles) {
      getFiles(files);
    }
  }, [files, getFiles]);

  return (
    <RegisterDropzone
      id={id}
      files={files}
      getRootProps={getRootProps}
      getInputProps={getInputProps}
      isTypeImg={isTypeImg}
      uploadPlaceholderImg={uploadPlaceholderImg}
      changePlaceholderText={changePlaceholderText}
    />
  );
};

export default RegisterUpload;
