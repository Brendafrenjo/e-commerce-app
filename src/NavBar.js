import React from "react";
import "./NavBar.css";
import Images from "./Images"

export default function NavBar() {
  return (
    <div className="NavBar">
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-style">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold fs-4" href="/">
            <Images />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Contact
                </a>
              </li>
            </ul>
            <div className="buttons">
              <a href="/" className="btn btn-outline-dark me-2">
                <i className="fa-solid fa-right-to-bracket me-2 icon"></i>Login
              </a>
              <a href="/" className="btn btn-outline-dark me-2">
                <i class="fa-solid fa-user-plus me-2 icon"></i>Register
              </a>
              <a href="/" className="btn btn-outline-dark">
                <i class="fa-solid fa-cart-shopping icon me-2"></i>Cart (0)
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
