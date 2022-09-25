import React from "react";
import Admin from "../../layouts/Admin";

const SignUp = (props) => {
  return (
    <Admin>
      <div className="min-vh-100 d-flex justify-content-center align-items-center">
        <div style={{ height: "auto", width: "650px" }}>
          <form>
            <div className="text-center">
              <h3>Register New User</h3>
            </div>

            <div className="row">
              <div className="mb-3 col">
                <label>First Name</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>

              <div className="mb-3 col">
                <label>Last Name</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>
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
    </Admin>
  );
};

export default SignUp;
