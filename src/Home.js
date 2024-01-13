import React from "react";
import Products from "./Products";
import "./Home.css";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="hero">
        <div className="card text-bg-dark">
          <img
            src="./Images/background-picture.png"
            className="card-img img-fluid"
            alt="Background"
          />
          <div className="card-img-overlay">
            <h1 className="card-title">Chic. Timeless. Frenjo's</h1>
            <p className="card-text">
              <NavLink
                href="/products"
                className="btn btn-light primary-button"
                title="Shop Now"
              >
                SHOP NOW
              </NavLink>
            </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}
