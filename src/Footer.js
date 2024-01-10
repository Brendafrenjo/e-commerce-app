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
      <small className="footer scroll-to-top-button" onClick={scrollToTop}>
        Frenjo Fashions
      </small>
      <button className="btn btn">
        <i className="fa-solid fa-chevron-up icon"></i>
      </button>
    </div>
  );
}
