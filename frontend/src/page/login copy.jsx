import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/karciskita logo.png";
import ilustrasi from "../img/login.png";
import "./login.css";

const Login = () => {
  return (
    <div className="content">
      <div className="container min-vh-100 d-flex align-items-center justify-content-center">
        <div className="row w-100">
          <section
            id="header"
            className="col-md-6 d-flex align-items-center justify-content-center"
          >
            <div className="text-center">
              <h1 className="text-center">
                <b>Welcome Back!</b>
              </h1>
              <img src={ilustrasi} style={{ width: "90%" }} alt="Ilustrasi" />
            </div>
          </section>

          <section
            id="form"
            className="col-md-6 d-flex align-items-center justify-content-center"
          >
            <div className="form text-center">
              <form className="box">
                <img src={logo} style={{ width: "40%" }} alt="Logo" />
                <h3 className="text-center">
                  <b>Log In</b>
                </h3>
                <p>
                  Please enter your email and password to enter the admin page
                </p>
                <div className="mb-3">
                  <label htmlFor="InputEmail" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="InputEmail"
                    aria-describedby="emailHelp"
                    placeholder="Insert Email "
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="InputPassword" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="InputPassword"
                    placeholder="Insert Password"
                  />
                </div>
                <div className="form-group pt-3 pb-3">
                  <NavLink
                    to="/dashboard"
                    className="btn btn-light button-form"
                  >
                    <b>Login</b>
                  </NavLink>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Login;
