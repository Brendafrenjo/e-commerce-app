import React from "react";
import "./FindYourAccount.css";
import { NavLink } from "react-router-dom";

export default function FindYourAccount() {
  return (
    <div className="FindYourAccount">
      <h3 className="text-start">Find Your Account</h3>
      <hr />
      <p className="text-start">
        Please enter your email address to search for your account.
      </p>
      <hr />
      <form>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email address"
          className="form-control log-in-form"
        />
      </form>
      <hr />
      <div className="buttons">
        <NavLink
          to="/authentication-container"
          className="btn btn-outline-dark me-2 cancel-button"
        >
          Cancel
        </NavLink>
        <button className="btn btn-dark search-button">Search</button>
      </div>
    </div>
  );
}
