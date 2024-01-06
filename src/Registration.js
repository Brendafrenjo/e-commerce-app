import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Registration.css";

export default function Registration(onRegister) {
  const [registrationInfo, setRegistrationInfo] = useState({
    registerFirstname: "",
    registerSurname: "",
    registerUsername: "",
    registerEmail: "",
    registerPassword: "",
  });
  const [registrationSuccessful, setRegistrationSuccessful] = useState(false);

  const navigate = useNavigate();

  function handleInfoChange(e) {
    const { name, value } = e.target;
    setRegistrationInfo((prevRegistrationInfo) => ({
      ...prevRegistrationInfo,
      [name]: value,
    }));
  }

  const isEmailValid = (email) => {
    // Simple email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const {
      registerFirstname,
      registerSurname,
      registerUsername,
      registerEmail,
      registerPassword,
    } = registrationInfo;

    if (
      registrationInfo.registerFirstname &&
      registrationInfo.registerSurname &&
      registrationInfo.registerUsername &&
      isEmailValid(registrationInfo.registerEmail) &&
      registrationInfo.registerPassword
    ) {
      setRegistrationSuccessful(true);
      navigate("/");
    } else {
      let errorMessage = "Please provide all the required information:\n";

      if (!registerFirstname) {
        errorMessage += "- First name\n";
      }

      if (!registerSurname) {
        errorMessage += "- Surname\n";
      }

      if (!registerUsername) {
        errorMessage += "- Username\n";
      }

      if (!registerEmail) {
        errorMessage += "- Valid email address\n";
      }

      if (!registerPassword) {
        errorMessage += "- Password\n";
      }

      alert(errorMessage);
    }
  };

  return (
    <div className="Registration">
      {registrationSuccessful && (
        <div className="success-message">Registration successful!</div>
      )}
      <h2>Sign Up</h2>
      <p className="text-start">It's quick and easy</p>
      <hr />
      <form>
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              id="registerFirstname"
              name="registerFirstname"
              placeholder="First name"
              className="form-control registration-form"
              value={registrationInfo.registerFirstname}
              onChange={handleInfoChange}
              required
            />
          </div>
          <div className="col-6">
            <input
              type="text"
              id="registerSurname"
              name="registerSurname"
              placeholder="Surname"
              className="form-control registration-form"
              value={registrationInfo.registerSurname}
              onChange={handleInfoChange}
              required
            />
          </div>
        </div>
        <input
          type="text"
          id="registerUsername"
          name="registerUsername"
          placeholder="Username"
          className="form-control registration-form mt-3"
          value={registrationInfo.registerUsername}
          onChange={handleInfoChange}
          required
        />
        <input
          type="email"
          id="registerEmail"
          name="registerEmail"
          placeholder="Email address"
          className="form-control registration-form mt-3"
          value={registrationInfo.registerEmail}
          onChange={handleInfoChange}
          required
        />
        <input
          type="password"
          id="registerPassword"
          name="registerPassword"
          placeholder="Password"
          className="form-control registration-form mt-3"
          value={registrationInfo.registerPassword}
          onChange={handleInfoChange}
          required
        />
      </form>
      <div className="description text-muted text">
        <small>
          By clicking Sign Up, you agree to our{" "}
          <a href="example">Terms, Privacy Policy </a>
          and <a href="example">Cookies Policy</a>. You may receive Email
          notifications from us and can opt out at any time.
        </small>
      </div>
      <br />
      <button
        type="button"
        className="btn btn-dark mb-3 sign-up"
        onClick={handleRegister}
      >
        Sign Up
      </button>
    </div>
  );
}
