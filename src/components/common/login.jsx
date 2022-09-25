import React from "react";
// import Admin from "../../layouts/Admin";

const Login = (props) => {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div style={{ height: "300px", width: "250px" }}>
        <form>
          <div className="text-center">
            <h3>Sign In</h3>
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary bg-dark">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
