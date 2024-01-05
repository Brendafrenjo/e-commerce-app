import React, { useState } from "react";
import "./LogIn.css";
import { NavLink, useNavigate } from "react-router-dom";
import { Bars } from "react-loader-spinner";

export default function LogIn() {
  const [logInSuccessful, setLogInSuccessful] = useState(false);
  const [signInInfo, setSignInInfo] = useState({
    signInUsername: "",
    signInPassword: "",
  });

  const navigate = useNavigate();

  function handleSignInInfoChange(event) {
    const { name, value } = event.target;
    setSignInInfo((prevSignInInfo) => ({
      ...prevSignInInfo,
      [name]: value,
    }));
  }

  const handleSignIn = () => {
    if (signInInfo.signInUsername && signInInfo.signInPassword) {
      setLogInSuccessful(true);

      navigate("/home");
    } else {
      alert("Please provide complete log in information.");
    }
  };

  function Loading() {
    return (
      <div className="loader-container">
        <Bars
          height="80"
          width="80"
          color="#black"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  function signInForm() {
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
              value={signInInfo.signInUsername}
              onChange={handleSignInInfoChange}
              required
            />
            <input
              type="password"
              id="signInPassword"
              name="signInPassword"
              placeholder="Password"
              className="form-control log-in-form mt-2"
              value={signInInfo.signInPassword}
              onChange={handleSignInInfoChange}
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
    </div>;
  }

  return (
    <div className="Container">
      {logInSuccessful ? < Loading/> : <signInForm />}
    </div>
  );
}
