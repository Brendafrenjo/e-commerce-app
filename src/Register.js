import React, { useState } from "react";
import "./Register.css";

export default function RegistrationForm(onRegister) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Add any validation logic here

    // Call the parent component's onRegister function with the new user credentials
    onRegister({ username, password });
  };

  return (
    <div className="RegistrationForm">
      <h2>Sign Up</h2>
      <p className="text-start">It's quick and easy</p>
      <hr />
      <form>
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              id="registerUsername"
              name="registerUsername"
              placeholder="First name"
              className="form-control registration-form"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="col-6">
            <input
              type="text"
              id="registerUsername"
              name="registerUsername"
              placeholder="Surname"
              className="form-control registration-form"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email address"
          className="form-control registration-form mt-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          id="registerPassword"
          name="registerPassword"
          placeholder="Password"
          className="form-control registration-form mt-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </form>
      <div className="description text-muted text">
        <small>
          By clicking Sign Up, you agree to our{" "}
          <a href="/">Terms, Privacy Policy </a>
          and <a href="/">Cookies Policy</a>. You may receive SMS notifications
          from us and can opt out at any time.
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
