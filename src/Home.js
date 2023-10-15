import React, { useState } from "react";
import "./Home.css";

export default function Home() {
  const [state, setState] = useState({ appTitle: "Customers" });

  return (
    <div>
      <div className="hero">
        <div class="card text-bg-dark">
          <img
            src="./Images/fashion-background.png"
            className="card-img img-fluid"
            alt="Background"
          />
          <div class="card-img-overlay">
            <h1 class="card-title">Chic. Timeless. Frenjo's</h1>
            <p class="card-text">
              <a href="/" className="btn btn-light primary-button">
                SHOP NOW
              </a>
            </p>
          </div>
        </div>
      </div>
      <h4>{state.appTitle}</h4>
    </div>
  );
}
