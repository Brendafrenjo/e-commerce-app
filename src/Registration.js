import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Registration.css";

export default function Registration(onRegister) {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registrationError, setRegistrationError] = useState(null);

  const navigate = useNavigate();

  const handleRegister = () => {
    if (!username || !email || !password) {
      setRegistrationError("All fields are required.");
      return;
    }

    const newUser = { username, email, password, firstname, surname };
    console.log("Simulating user registration:", newUser);

    if (username === "existingUser") {
      setRegistrationError(
        "Username already exists. Please choose a different one."
      );
      return;
    }

    setRegistrationError(null);

    onRegister(newUser);

    navigate("/home");
  };

  return (
    <div className="Registration">
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
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
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
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
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
          id="registerEmail"
          name="registerEmail"
          placeholder="Email address"
          className="form-control registration-form mt-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          <a href="example">Terms, Privacy Policy </a>
          and <a href="example">Cookies Policy</a>. You may receive SMS
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
