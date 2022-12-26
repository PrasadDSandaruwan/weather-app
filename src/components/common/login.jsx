import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

import { login, loginWithJwt } from "../../service/authService";

const Login = (props) => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await login(inputs.email, inputs.password);
      if (response.status == 200) {
        const token = response.data.access_token;
        console.log(response);
        loginWithJwt(token, "");
        window.location = "/";
      } else {
        throw Error("Login Failed!");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

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
  );
};

export default Login;
