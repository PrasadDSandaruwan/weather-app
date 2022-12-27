import React from "react";
import Admin from "../../layouts/Admin";
import { uploadCSVFile } from "../../service/forecastService";

import "./CSS/analyse.css";

const UploadCSV = () => {
  const [selectedFile, setSelectedFile] = React.useState(null);
  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    // console.log(event.target.files);
    formData.append("file", selectedFile);
    uploadCSVFile(formData);
  };

  return (
    <Admin>
      {/* <div className="vh-100 d-flex justify-content-center align-items-center"> */}
      <div
        className="container text-center "
        style={{
          minHeight: "500px",
          paddingTop: "100px",
          paddingRight: "55px",
        }}
      >
        <div>Upload File Here</div>
        <form className="w-100">
          <input type="file" name="file" onChange={handleFileSelect}></input>
          <button
            type="submit"
            className="btn btn-primary bg-dark"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
      {/* <div style={{ height: "500px" }}></div> */}
      {/* </div> */}
    </Admin>
  );
};

export default UploadCSV;
