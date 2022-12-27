import React from "react";
import { ClipLoader } from "react-spinners";

const LoadingWait = (props) => {
  const { isLoading } = this.props;
  // console.log("isLoading in loading wait", isLoading)
  return (
    <React.Fragment>
      {isLoading && (
        <div className="backdrop-filter backdrop-blur-sm justify-center items-center flex  fixed inset-0 z-50">
          <div className="relative w-auto my-6 mx-auto max-w-sm">
            <ClipLoader color={"#0b2f6b"} size={50} loading={isLoading} />
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default LoadingWait;
