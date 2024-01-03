import React from "react";

export default function FindYourAccount() {
  return (
    <div className="FindYourAccount">
      <h3>Find Your Account</h3>
      <hr />
      <p>Please enter your email address to search for your account.</p>
      <hr />
      <form>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email adress"
          className="form-control log-in-form"
        />
      </form>
      <hr />
      <button className="btn btn-outline-dark ms-2">Cancel</button>
      <button className="btn btn-dark">Search</button>
    </div>
  );
}
