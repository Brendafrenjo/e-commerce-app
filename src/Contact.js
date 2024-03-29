import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [commentSubmitted, setCommentSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    tel: "",
    comments: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSubmitComment() {
    const { firstName, lastName, email, tel, comments } = formData;

    if (firstName && lastName && email && tel && comments) {
      setCommentSubmitted(true);

      alert(
        "Thank you for submitting your comment! We will reach out to you within two business days!"
      );
    } else {
      let errorMessage = "Please provide all the relevant information: \n";

      if (!firstName) {
        errorMessage += "-First name\n";
      }

      if (!lastName) {
        errorMessage += "-Last name\n";
      }

      if (!email) {
        errorMessage += "-Valid email address\n";
      }

      if (!tel) {
        errorMessage += "-Valid phone number\n";
      }

      if (!comments) {
        errorMessage += "-Comments\n";
      }

      alert(errorMessage);
    }
  }

  return (
    <>
      {commentSubmitted && <p>Comment submitted successfully</p>}
      <div className="Contact">
        <h2 className="contact-us">Contact Us</h2>
        <div className="container">
          <div className="row contact-information">
            <div className="col-md-5 phone">
              <i className="fa-solid fa-phone contact-information-icon"></i>
              <p>Phone Number</p> (+254)700xxxxxx
            </div>
            <div className="col-md-5 email rounded">
              <i className="fa-solid fa-envelope contact-information-icon"></i>{" "}
              <p>Email Address</p>
              info@frenjofashions
            </div>
          </div>
        </div>
        <div className="submit-information container-fluid">
          <div className="contact-form">
            <h2>Talk to Us</h2>
            <form onSubmit={handleSubmitComment}>
              <div className="row">
                <div className="col-6">
                  <label htmlFor="firstName" className="label">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First name"
                    className="form-control"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="lastName" className="label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last name"
                    className="form-control"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="email" className="label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="name@example.com"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="tel" className="label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="tel"
                    name="tel"
                    placeholder="e.g. 700200100"
                    className="form-control"
                    value={formData.tel}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-12">
                <label htmlFor="subject" className="label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject:"
                  className="form-control"
                />
              </div>
              <div className="col-12">
                <label htmlFor="comments" className="label">
                  What would you like to tell us?
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  placeholder="Enter your comments here"
                  className="form-control"
                  value={formData.comments}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn mt-3 submit-message"
                title="Submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="connect-with-us" id="contact-us">
          <h2 className="connect">Connect with Us</h2>
          <span className="facebook">
            <a
              href="https://www.facebook.com/frenjofashions"
              target="_blank"
              title="Facebook"
              rel="noreferrer"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
          </span>
          <span className="instagram">
            <a
              href="https://www.instagram.com/frenjofashions"
              target="_blank"
              title="Instagram"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </span>
          <span className="twitter">
            <a
              href="https://twitter.com/frenjofashions"
              target="_blank"
              title="Twitter"
              rel="noreferrer"
            >
              <i class="fa-brands fa-x-twitter"></i>
            </a>
          </span>
          <span className="tiktok">
            <a
              href="https://www.tiktok.com/@frenjofashions"
              target="_blank"
              title="Tiktok"
              rel="noreferrer"
            >
              <i className="fa-brands fa-tiktok"></i>
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
