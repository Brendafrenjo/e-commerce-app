import React from "react";
import Products from "./Products"
import "./Home.css";

export default function Home() {
  return (
    <div>
      <div className="hero">
        <div className="card text-bg-dark">
          <img
            src="./Images/fashion-background.png"
            className="card-img img-fluid"
            alt="Background"
          />
          <div className="card-img-overlay">
            <h1 className="card-title">Chic. Timeless. Frenjo's</h1>
            <p className="card-text">
              <a href="/products" className="btn btn-light primary-button">
                SHOP NOW
              </a>
            </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}
