import React, { useState } from "react";
import LogIn from "./LogIn";
import Register from "./Register";

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
    <div>
      {isSignIn ? (
        <LogIn onSignIn={handleSignIn} />
      ) : (
        <Register onRegister={handleRegister} />
      )}

      <p onClick={() => setIsSignIn(!isSignIn)}>
        {isSignIn
          ? "Don't have an account? Register here."
          : "Already have an account? LonIn in here."}
      </p>
    </div>
  );
}
