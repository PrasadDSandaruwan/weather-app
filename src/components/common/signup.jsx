import React, { useState, useEffect } from "react";
import Admin from "../../layouts/Admin";
import { addUser } from "../../service/userService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    try {
      const response = await addUser(data);
      console.log(response)
      toast.success(response.data.success)
    } catch (error) {
      // toast.error(error.data.error)
      console.log(error)
      toast.error(error.response.data.error)
      // TODO
    }

    // console.log(response);
  };

  return (
    <Admin>
      <ToastContainer autoClose={5000} hideProgressBar={true} />
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
                  required
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
                  required
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
                required
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
                required
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
