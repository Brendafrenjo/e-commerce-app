import React from "react";
import "./Home.css"

export default function Home() {
  return (
    <div className="hero">
      <div class="card text-bg-dark">
        <img src="./Images/fashion-background.png" className="card-img img-fluid" alt="Background" />
        <div class="card-img-overlay">
          <h1 class="card-title">Chic. Timeless. Frenjo's</h1>
          <p class="card-text">
            < a href="/" className="btn btn-light primary-button">SHOP NOW</a>
          </p>
        </div>
      </div>
    </div>
  );
}
