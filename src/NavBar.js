import React, { useEffect } from "react";
import "./NavBar.css";
import Images from "./Images";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavBar() {
  const state = useSelector((state) => state.handleCart);

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
                <NavLink className="nav-link active" to="/" title=" Home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products" title="Products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about" title="About">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact" title="Contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons justify-content-center">
              <NavLink
                to="/authentication-container"
                className="btn btn-navbar me-2"
                title="Login"
              >
                <i className="fa-solid fa-right-to-bracket me-2 icon"></i>Login
              </NavLink>
              <NavLink
                to="/registration"
                className="btn btn-navbar me-2"
                title="Sign Up"
              >
                <i className="fa-solid fa-user-plus me-2 icon"></i>Sign Up
              </NavLink>
              <NavLink to="/cart" className="btn btn-navbar" title="Cart">
                <i className="fa-solid fa-cart-shopping icon me-2"></i>Cart (
                {state.length})
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
