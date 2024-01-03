import React, { useState } from "react";
import LogIn from "./LogIn";
import Register from "./Register";
import "./AuthenticationContainer.css";

export default function AuthenticationContainer() {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSignIn = (credentials) => {
    // Implement sign-in logic here
    console.log("Signing in with:", credentials);
  };

  const handleRegister = (newUser) => {
    // Implement registration logic here
    console.log("Registering user:", newUser);
  };

  return (
    <div className="AuthenticationContainer">
      {isSignIn ? (
        <LogIn onSignIn={handleSignIn} />
      ) : (
        <Register onRegister={handleRegister} />
      )}

      <p onClick={() => setIsSignIn(!isSignIn)} className="mt-3 isSignIn">
        {isSignIn
          ? "Don't have an account? Register here."
          : "Already have an account? Log in here."}
      </p>
    </div>
  );
}
