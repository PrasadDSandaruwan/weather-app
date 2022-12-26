import React, { useState, useEffect } from "react";
import Admin from "../../layouts/Admin";
import { addUser } from "../../service/userService";

const SignUp = (props) => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      first_name: inputs.first_name,
      last_name: inputs.last_name,
      email: inputs.email,
      password: inputs.password,
    };

    const response = addUser();
  };

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
                  type="text"
                  name="first_name"
                  className="form-control"
                  placeholder="Enter email"
                  value={inputs.first_name || ""}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3 col">
                <label>Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  className="form-control"
                  placeholder="Enter email"
                  value={inputs.last_name || ""}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter email"
                value={inputs.email || ""}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter password"
                value={inputs.password || ""}
                onChange={handleChange}
              />
            </div>

            <div className="d-grid">
              <button
                type="submit"
                className="btn btn-primary bg-dark"
                onClick={handleSubmit}
              >
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
