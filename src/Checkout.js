import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

export default function Checkout() {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [shippingInfo, setShippingInfo] = useState({
    tel: "",
    firstName: "",
    lastName: "",
    email: "",
    zipCode: "",
    county: "",
    town: "",
  });

  const navigate = useNavigate();

  const counties = [
    "Mombasa",
    "Kwale",
    "Kilifi",
    "Tana River",
    "Lamu",
    "Taita-Taveta",
    "Garissa",
    "Wajir",
    "Mandera",
    "Marsabit",
    "Isiolo",
    "Meru",
    "Tharaka-Nithi",
    "Embu",
    "Kitui",
    "Machakos",
    "Makueni",
    "Nyandarua",
    "Nyeri",
    "Kirinyaga",
    "Murang'a",
    "Kiambu",
    "Turkana",
    "West Pokot",
    "Samburu",
    "Trans Nzoia",
    "Uasin Gishu",
    "Elgeyo-Marakwet",
    "Nandi",
    "Baringo",
    "Laikipia",
    "Nakuru",
    "Narok",
    "Kajiado",
    "Kericho",
    "Bomet",
    "Kakamega",
    "Vihiga",
    "Bungoma",
    "Busia",
    "Siaya",
    "Kisumu",
    "Homa Bay",
    "Migori",
    "Kisii",
    "Nyamira",
    "Nairobi",
  ];

  const handleShippingInfoChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prevShippingInfo) => ({
      ...prevShippingInfo,
      [name]: value,
    }));
  };

  const isEmailValid = (email) => {
    // Simple email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPhoneNumberValid = (tel) => {
    // Simple phone number validation using a regular expression
    const telRegex = /^\d{10}$/;
    return telRegex.test(tel);
  };

  // Function to handle the checkout process
  const handleCheckout = () => {
    if (
      shippingInfo.tel &&
      shippingInfo.firstName &&
      shippingInfo.lastName &&
      shippingInfo.town &&
      shippingInfo.county &&
      shippingInfo.zipCode &&
      isEmailValid(shippingInfo.email) &&
      isPhoneNumberValid(shippingInfo.tel)
    ) {
      // Perform any necessary checkout logic here
      // Mark the order as successfully placed
      setOrderPlaced(true);

      // Use history.push to navigate to the order confirmation page
      navigate("/order-confirmation", { state: { shippingInfo } });
    } else {
      // Handle incomplete checkout (e.g., show an error message)
      alert("Please provide complete shipping information.");
    }
  };

  return (
    <div className="Checkout">
      <div className="container">
        {orderPlaced && <p>Redirecting...</p>}
        <h1>Checkout</h1>
        <p>Please fill your delivery information</p>
        <form>
          <div className="row">
            <div className="col-4">
              <div className="form-group mb-2">
                <select className="form-select form-control">
                  <option value="254">
                    <span className="flag-icon flag-icon-ke">🇰🇪</span>+254
                  </option>
                  <option value="234">
                    <span className="flag-icon flag-icon-ng">🇹🇿</span>+255
                  </option>
                  <option value="256">
                    <span className="flag-icon flag-icon-ug">🇺🇬</span>+256
                  </option>
                </select>
              </div>
            </div>
            <div className="col-8">
              <div className="form-group">
                <input
                  type="tel"
                  id="tel"
                  name="tel"
                  placeholder="e.g. 700200100"
                  className="form-control"
                  onChange={handleShippingInfoChange}
                  value={shippingInfo.tel}
                />
              </div>
            </div>
          </div>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First name"
            className="form-control mb-2"
            onChange={handleShippingInfoChange}
            value={shippingInfo.firstName}
          />
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last name"
            className="form-control mb-2"
            onChange={handleShippingInfoChange}
            value={shippingInfo.lastName}
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="name@example.com"
            className="form-control mb-2"
            onChange={handleShippingInfoChange}
            value={shippingInfo.email}
          />
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            placeholder="e.g. 00100"
            className="form-control mb-2"
            onChange={handleShippingInfoChange}
            value={shippingInfo.zipCode}
          />
          <select
            className="form-select form-control mb-2"
            id="county"
            name="county"
            onChange={handleShippingInfoChange}
            value={shippingInfo.county}
          >
            <option value="" selected>
              Select a County
            </option>
            {counties.map((county, index) => (
              <option key={index} value={index + 1}>
                {county}
              </option>
            ))}
          </select>
          <input
            type="text"
            id="town"
            name="town"
            placeholder="Town"
            className="form-control mb-2"
            onChange={handleShippingInfoChange}
            value={shippingInfo.town}
          />
        </form>
        <button
          type="button"
          className="btn btn-dark mt-2 place-order"
          onClick={handleCheckout}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
