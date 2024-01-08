import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "./redux/action";
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

  const handleCart = useSelector((state) => state.handleCart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  let counties = [
    "Baringo",
    "Bomet",
    "Bungoma",
    "Busia",
    "Elgeyo-Marakwet",
    "Embu",
    "Garissa",
    "Homa Bay",
    "Isiolo",
    "Kajiado",
    "Kakamega",
    "Kericho",
    "Kerynaga",
    "Kilifi",
    "Kirinyaga",
    "Kisii",
    "Kisumu",
    "Kitui",
    "Kwale",
    "Laikipia",
    "Lamu",
    "Machakos",
    "Makueni",
    "Mandera",
    "Marsabit",
    "Meru",
    "Migori",
    "Mombasa",
    "Murang'a",
    "Nairobi",
    "Nakuru",
    "Nandi",
    "Narok",
    "Nyamira",
    "Nyandarua",
    "Nyeri",
    "Samburu",
    "Siaya",
    "Taita-Taveta",
    "Tana River",
    "Tharaka-Nithi",
    "Trans Nzoia",
    "Turkana",
    "Uasin Gishu",
    "Vihiga",
    "Wajir",
    "West Pokot",
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
    const telRegex = /^(\+\d{1,3})?(\d{10})$/;
    return telRegex.test(tel);
  };

  // Function to handle the checkout process
  const handleCheckout = () => {
    const { tel, firstName, lastName, email, zipCode, county, town } =
      shippingInfo;

    if (
      isPhoneNumberValid(tel) &&
      firstName &&
      lastName &&
      town &&
      county &&
      zipCode &&
      isEmailValid(email) &&
      handleCart.length >= 0
    ) {
      // Dispatch an action to add the product to the Redux store
      if (location.pathname !== "/order-confirmation") {
        handleCart.forEach((product) => {
          dispatch(
            addCart({
              id: product.id,
              title: product.title,
              image: product.image,
              price: product.price,
              Quantity: product.qty,
            })
          );
        });
      }

      // Mark the order as successfully placed
      setOrderPlaced(true);

      // Use navigate to navigate to the order confirmation page
      navigate("/order-confirmation", {
        state: {
          shippingInfo,
          handleCart,
        },
      });
    } else {
      let errorMessage = "Please provide complete shipping information:\n";

      if (!tel) {
        errorMessage += "- Valid phone number\n";
      }

      if (!firstName) {
        errorMessage += "-First name\n";
      }

      if (!lastName) {
        errorMessage += "-Last name\n";
      }

      if (!town) {
        errorMessage += "-Town\n";
      }

      if (!county) {
        errorMessage += "-County\n";
      }

      if (!zipCode) {
        errorMessage += "-ZipCode\n";
      }

      if (!email) {
        errorMessage += "-Valid email address\n";
      }

      alert(errorMessage);
    }
  };

  return (
    <div className="Checkout">
      <div className="container">
        <h1>Checkout</h1>
        {orderPlaced && (
          <div className="success-message">Checkout successful!</div>
        )}
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
              <option key={index} value={county}>
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
