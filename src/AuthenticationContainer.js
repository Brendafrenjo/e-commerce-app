import React, { useState } from "react";
import LogIn from "./LogIn";
import Registration from "./Registration";
import "./AuthenticationContainer.css";

export default function AuthenticationContainer() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="AuthenticationContainer">
      {isSignIn ? <LogIn /> : <Registration />}

      <p onClick={() => setIsSignIn(!isSignIn)} className="mt-3 isSignIn">
        {isSignIn
          ? "Don't have an account? Register here."
          : "Already have an account? Log in here."}
      </p>
    </div>
  );
}
