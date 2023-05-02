import React, { useState } from "react";
import axios from "axios";

const UploadImage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const fileSelectedHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const fileUploadHandler = () => {
    const formData = new FormData();
    formData.append("image", selectedFile);

    axios
      .post(
        "http://dropzonetravel-web-back2023.test/api/aws/image/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <input type="file" onChange={fileSelectedHandler} />
      <button onClick={fileUploadHandler}>Upload</button>
    </div>
  );
};

export default UploadImage;
