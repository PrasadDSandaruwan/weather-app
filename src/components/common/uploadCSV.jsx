import React from "react";
import Admin from "../../layouts/Admin";
import { uploadCSVFile } from "../../service/forecastService";
import FadeLoader from "react-spinners/FadeLoader";
import "./CSS/analyse.css";

const UploadCSV = () => {
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [isError, setIsError] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    // console.log(event.target.files);
    formData.append("file", selectedFile);
    try {
      setIsLoading(true);
      const res = await uploadCSVFile(formData);
      if (res.status != 200) {
        setIsLoading(false);
        setIsSuccess(true);
        setIsError(false);
      }
    } catch (error) {
      setIsLoading(false);
      setIsSuccess(false);
      setIsError(true);
      // TODO
    }
  };

  return (
    <Admin>
      {/* <div className="vh-100 d-flex justify-content-center align-items-center"> */}
      {isLoading && (
        <div
          className=" vh-100 d-flex justify-content-center align-items-center"
          style={{ zIndex: 50, position: "relative" }}
        >
          <FadeLoader color={"#000"} size={150}></FadeLoader>
        </div>
      )}

      {!isLoading && (
        <div
          className="container text-center "
          style={{
            minHeight: "500px",
            paddingTop: "100px",
            paddingRight: "55px",
          }}
        >
          {isSuccess && (
            <div style={{ marginBottom: "10px", backgroundColor: "green" }}>
              SUCCESSFULLY UPDATED
            </div>
          )}
          {isError && (
            <div style={{ marginBottom: "10px", backgroundColor: "yellow" }}>
              FAILED
            </div>
          )}
          <div>Upload File Here</div>
          <form className="w-100">
            <input
              type="file"
              name="file"
              onChange={handleFileSelect}
              required
            ></input>
            <button
              type="submit"
              className="btn btn-primary bg-dark"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
          <div
            className="d-flex justify-content-center align-items-center "
            style={{ marginTop: "20px" }}
          >
            <div
              className="border rounded shadow row text-left"
              style={{
                color: "red",
                textAlign: "left",
                width: "300px",
                paddingLeft: "20px",
              }}
            >
              <pre>
                ! IMPORTANT ! <br />
                # The file must be in the csv format <br />
                # The file musct conatial <br />
                * timestamp <br />
                * temperature <br />
                * temperature <br />
                * dewpoint_temperature <br />
                * wind_speed <br />
                * mean_sea_level_pressure <br />
                * relative_humidity <br />
                * surface_solar_radiation <br />
                * surface_thermal_radiation <br />
                * total_cloud_cover <br />
                * timestamp <br />
              </pre>
            </div>
          </div>
        </div>
      )}
      {/* <div style={{ height: "500px" }}></div> */}
      {/* </div> */}
    </Admin>
  );
};

export default UploadCSV;
