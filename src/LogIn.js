import React, { useState } from "react";
import "./LogIn.css";
import { NavLink } from "react-router-dom";

export default function LogIn({ onSignIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    // Add any validation logic here
    onSignIn({ username, password });
  };

  return (
    <div className="Container">
      <div className="row">
        <div className="col-lg-6">
          <div className="LogIn-Container">
            <h1>Frenjo Fashions</h1>
            <p>Frenjo Fashions helps you access elegant and stylish apparel</p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="LogIn">
            <form>
              <input
                type="text"
                id="signInUsername"
                name="signInUsername"
                placeholder="Username"
                className="form-control log-in-form"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="password"
                id="signInPassword"
                name="signInPassword"
                placeholder="Password"
                className="form-control log-in-form mt-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                className="btn btn-dark mt-3 mb-2 form-control log-in"
                type="button"
                onClick={handleSignIn}
              >
                Log in
              </button>
              <br />
              <NavLink to="/find-your-account" className="">
                Forgotten Password?
              </NavLink>
              <hr />
              <NavLink
                to="/registration"
                className="btn btn-outline-dark mb-3 mt-2 create-new-account"
              >
                Create new account
              </NavLink>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
