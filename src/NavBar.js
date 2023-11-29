import React, { useEffect } from "react";
import "./NavBar.css";
import Images from "./Images";
import { NavLink } from "react-router-dom"

export default function NavBar() {
  function handleResize() {
    const navbar = document.querySelector(".navbar");
    if (window.innerWidth >= 992) {
      navbar.classList.add("fixed-top");
    } else {
      navbar.classList.remove("fixed-top");
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="NavBar">
      <nav className="navbar navbar-expand-lg bg-white navbar-style">
        <div className="container-fluid">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            <Images />
          </NavLink>
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
                <NavLink className="nav-link active" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="/">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              <NavLink to="/" className="btn btn-outline-dark me-2">
                <i className="fa-solid fa-right-to-bracket me-2 icon"></i>Login
              </NavLink>
              <NavLink to="/" className="btn btn-outline-dark me-2">
                <i className="fa-solid fa-user-plus me-2 icon"></i>Register
              </NavLink>
              <NavLink to="/" className="btn btn-outline-dark">
                <i className="fa-solid fa-cart-shopping icon me-2"></i>Cart (0)
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
