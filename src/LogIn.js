import React, { useState } from "react";
import "./LogIn.css";
import { NavLink, useNavigate } from "react-router-dom";

export default function LogIn() {
  const [logInSuccessful, setLogInSuccessful] = useState(false);
  const [signInInfo, setSignInInfo] = useState({
    signInUsername: "",
    signInPassword: "",
    showPassword: false,
  });

  const navigate = useNavigate();

  function handleSignInInfoChange(e) {
    const { name, value } = e.target;
    setSignInInfo({ ...signInInfo, [name]: value });
  }

  const handleTogglePasswordVisibility = () => {
    setSignInInfo({ ...signInInfo, showPassword: !signInInfo.showPassword });
  };

  const handleSignIn = () => {
    const { signInUsername, signInPassword } = signInInfo;

    if (signInUsername.trim() && signInPassword.trim()) {
      setLogInSuccessful(true);

      navigate("/");
    } else {
      let errorMessage = "Please provide complete log in information:\n";

      if (!signInUsername) {
        errorMessage += "-Valid username\n";
      }

      if (!signInPassword) {
        errorMessage += "-Valid password\n";
      }

      alert(errorMessage);
    }
  };

  return (
    <div className="Container">
      {logInSuccessful && (
        <div className="success-message">LogIn successful!</div>
      )}
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
                onChange={handleSignInInfoChange}
                value={signInInfo.signInUsername}
                required
              />
              <input
                type={signInInfo.showPassword ? "text" : "password"}
                id="signInPassword"
                name="signInPassword"
                placeholder="Password"
                minLength="6"
                maxLength="12"
                className="form-control log-in-form mt-2"
                onChange={handleSignInInfoChange}
                value={signInInfo.signInPassword}
                required
              />
              <span
                className={`password-toggle-icon ${
                  signInInfo.showPassword ? "visible" : "hidden"
                }`}
                onClick={handleTogglePasswordVisibility}
              >
                {signInInfo.showPassword ? (
                  <>
                    <i className="fa-regular fa-eye"></i>
                    <span>Hide password</span>
                  </>
                ) : (
                  <>
                    <i className="fa-regular fa-eye-slash"></i>{" "}
                    <span>Show password</span>
                  </>
                )}
              </span>
              <button
                className="btn btn-log-in mt-3 mb-2 form-control log-in"
                type="button"
                onClick={handleSignIn}
                title="Log In"
              >
                Log in
              </button>
              <br />
              <NavLink
                to="/find-your-account"
                className=""
                title="Fogotten Password"
              >
                Forgotten Password?
              </NavLink>
              <hr />
              <NavLink
                to="/registration"
                className="btn btn-new-account mb-3 mt-2 create-new-account"
                title="Create a New Account"
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
