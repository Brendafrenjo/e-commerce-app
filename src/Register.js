import React, { useState } from "react";

const RegistrationForm = ({ onRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Add any validation logic here

    // Call the parent component's onRegister function with the new user credentials
    onRegister({ username, password });
  };

  return (
    <div>
      <h2>Registration</h2>
      <label htmlFor="registerUsername">Username:</label>
      <input
        type="text"
        id="registerUsername"
        name="registerUsername"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <label htmlFor="registerPassword">Password:</label>
      <input
        type="password"
        id="registerPassword"
        name="registerPassword"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="button" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
};

export default RegistrationForm;
