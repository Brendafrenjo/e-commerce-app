import React from "react";
import "./Footer.css";

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="Footer">
      <div className="footer-information">
        <span>
          <h1 className="find-us">Find Us</h1>
          <div className="find-us-information">
            <h3 className="find-us-heading">Physical Location:</h3>
            <p className="find-us-content">
              Altman Street, 2nd Floor, Shop B2, Nairobi Kenya
              <br />
              House of Landing, 4th Floor, Lavington, Nairobi
            </p>
            <h3 className="find-us-heading">Opening Hours:</h3>
            <p>
              Mon - start
              <br />
              8am - 8pm
            </p>
            <h3 className="find-us-heading">Phone Number:</h3>
            <p>(+254)001002003</p>
          </div>
        </span>
        <span className="footer-content">
          <span className="footer">Frenjo Fashions</span>
          <button
            className="btn btn scroll-to-top-button"
            onClick={scrollToTop}
          >
            <i className="fa-solid fa-chevron-up icon"></i>
          </button>
        </span>
      </div>
    </div>
  );
}
