import React, { useState } from "react";
import "./LogIn.css";

export default function LogIn({ onSignIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    // Add any validation logic here
    onSignIn({ username, password });
  };

  return (
    <div className="LogIn">
      <h1>LogIn</h1>
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
        <a href="example" className="">
          Forgotten Password?
        </a>
        <hr />
        <button className="btn btn-outline-dark mb-3 mt-2 create-new-account">
          Create new account
        </button>
      </form>
    </div>
  );
}
