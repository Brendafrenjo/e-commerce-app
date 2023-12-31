import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Checkout.css";

export default function Checkout() {
  const [orderPlaced, setOrderPlaced] = useState(false);

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

  // Function to handle the checkout process
  const handleCheckout = () => {
    // Perform any necessary checkout logic here

    // Mark the order as successfully placed
    setOrderPlaced(true);
  };
  return (
    <div className="Checkout">
      <div className="contained">
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
                  placeholder="e.g. 700200100"
                  className="form-control"
                />
              </div>
            </div>
          </div>
        </form>
        <form>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First name"
            className="form-control mb-2"
          />
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last name"
            className="form-control mb-2"
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="name@example.com"
            className="form-control mb-2"
          />
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            placeholder="e.g. 00100"
            className="form-control mb-2"
          />
          <select className="form-select form-control mb-2">
            <option value="" selected>
              Select a County
            </option>
            {counties.map((county, index) => (
              <option key={index} value={index + 1}>
                {county}
              </option>
            ))}
          </select>
          <input type="text" placeholder="Town" className="form-control mb-2" />
        </form>
        <button type="submit" className="btn btn-dark mt-2 place-order">
          Place Order
        </button>
      </div>
    </div>
  );
}
