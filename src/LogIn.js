import React, { useState } from "react";

export default function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    // Add any validation logic here
    onSignIn({ username, password });
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-9">
          <h1>LogIn</h1>
          <label htmlFor="signInUsername">Username:</label>
          <input
            type="text"
            id="signInUsername"
            name="signInUsername"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label htmlFor="signInPassword">Password:</label>
          <input
            type="password"
            id="signInPassword"
            name="signInPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="button" onClick={handleSignIn}>
            LogIn
          </button>
        </div>
      </div>
    </div>
  );
}
