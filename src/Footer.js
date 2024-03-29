import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function handleClick() {
    window.scrollTo(0, 0);
  }

  function handleContact() {
    const contact = document.getElementById("contact-us");

    if (contact) {
      const offsetTop = contact.offsetTop;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  }

  return (
    <div className="Footer">
      <div className="footer-information">
        <div className="row quick-find">
          <div className="find-info">
            <span>
              <h1 className="find-us">
                Find Us <i class="fa-solid fa-exclamation"></i>
              </h1>
              <div className="find-us-information">
                <h3 className="find-us-heading">Physical Location:</h3>
                <p className="find-us-content">
                  Altman Street, 2nd Floor, Shop B2, Nairobi Kenya
                  <br />
                  House of Landing, 4th Floor, Lavington, Nairobi
                </p>
                <h3 className="find-us-heading">Opening Hours:</h3>
                <p>
                  Mon - Sat
                  <br />
                  8am - 8pm
                </p>
                <h3 className="find-us-heading">Phone Number:</h3>
                <p>(+254)700xxxxxx</p>
              </div>
            </span>
          </div>
          <div className="quick-links">
            <h1 className="find-us">quick Links</h1>
            <NavLink
              to="/return-and-exchange-request"
              className="links"
              onClick={handleClick}
            >
              RETURN & EXCHANGE REQUEST
            </NavLink>
            <br />
            <NavLink to="/contact" className="links" onClick={handleContact}>
              Contact Us!
            </NavLink>
            <br />
            <NavLink to="/faqs" className="links" onClick={handleClick}>
              Frequently Asked Questions
            </NavLink>
            <br />
            <NavLink
              to="/terms-of-service"
              className="links"
              onClick={handleClick}
            >
              Terms of Service
            </NavLink>
            <br />
            <NavLink
              to="/refund-policy"
              className="links"
              onClick={handleClick}
            >
              Refund Policy
            </NavLink>
            <br />
            <NavLink
              to="/terms-and-conditions"
              className="links"
              onClick={handleClick}
            >
              Terms and Conditions
            </NavLink>
            <br />
            <NavLink
              to="/checkout-error"
              className="links"
              onClick={handleClick}
            >
              Checkout error
            </NavLink>
          </div>
        </div>
        <span className="footer-content">
          <span className="footer">Frenjo Fashions</span>
          <button
            className="btn btn scroll-to-top-button"
            onClick={scrollToTop}
            title="Scroll Up"
          >
            <i className="fa-solid fa-chevron-up icon"></i>
          </button>
        </span>
      </div>
    </div>
  );
}
