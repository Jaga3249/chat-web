import { useState } from "react";
// import { toast } from "react-toastify";

const UsePreviewImg = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState(null);
  const maxFileSizeInByte = 2 * 1024 * 1024; //2mb
  const handleChangeImg = (e) => {
    const file = e.target.files[0];

    if (file && file.type.startsWith("image/")) {
      // check file size
      if (file.size > maxFileSizeInByte) {
        setError("File size must be less than 2Mb");
        setSelectedFile(null);
        return;
      }
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedFile(reader.result);
        setError(null);
      };

      reader.readAsDataURL(file);
    } else {
      setSelectedFile(null);
      setError(null);
    }
  };

  return { selectedFile, error, handleChangeImg };
};
export default UsePreviewImg;
