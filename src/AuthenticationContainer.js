import React, { useState } from "react";
import LogIn from "./LogIn";
import Registration from "./Registration";
import "./AuthenticationContainer.css";

export default function AuthenticationContainer() {
  const [isSignIn, setIsSignIn] = useState(true);

  function toggleSignIn() {
    setIsSignIn(!isSignIn);
  }

  return (
    <div className="AuthenticationContainer">
      {isSignIn ? <LogIn /> : <Registration />}

      <p className="mt-3">
        {isSignIn ? (
          <>
            Don't have an account?{" "}
            <span onClick={toggleSignIn} className="isSignIn">
              {" "}
              Register here.
            </span>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <span onClick={toggleSignIn} className="isSignIn">
              {" "}
              Log in here.
            </span>
          </>
        )}
      </p>
    </div>
  );
}
