import React from "react";

export default function Contact() {
  return (
    <div className="Contact container-fluid">
      <h1>Contact Us</h1>
      <div className="row contact-information">
        <div className="col-md-6 phone">
          <i className="fa-solid fa-phone contact-information-icon"></i>
          <p>Phone Number</p> (+254)001002003
        </div>
        <div className="col-md-6 email">
          <i className="fa-solid fa-envelope contact-information-icon"></i>{" "}
          <p>Email Address</p>
          info@frenjofashions
        </div>
      </div>
      <div className="contact-form">
        <h1>Talk to Us</h1>
        <form>
          <div className="row">
            <div className="col-6">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First name"
                className="form-control"
              />
            </div>
            <div className="col-6">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last name"
                className="form-control"
              />
            </div>
            <div className="col-6">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="name@example.com"
                className="form-control"
              />
            </div>
            <div className="col-6">
              <label htmlFor="tel">Phone Number</label>
              <input
                type="tel"
                id="tel"
                name="tel"
                placeholder="e.g. 700200100"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-12">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject:"
              className="form-control"
            />
          </div>
          <div className="col-12">
            <label htmlFor="comments">What would you like to tell us?</label>
            <textarea
              id="comments"
              name="comments"
              placeholder="Enter your comments here"
              className="form-control"
            ></textarea>
          </div>
        </form>
      </div>
      <div className="link-with-us">
        <h1>Link with Us</h1>
        <span className="facebook">
          <a href="https://www.facebook.com/frenjofashions" target="_blank">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </span>
        <span className="instagram">
          <a href="https://www.instagram.com/frenjofashions" target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </span>
        <span className="twitter">
          <a href="https://twitter.com/frenjofashions" target="_blank">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </span>
      </div>
    </div>
  );
}
