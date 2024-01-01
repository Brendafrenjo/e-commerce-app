import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "./OrderConfirmation.css";

export default function OrderConfirmation() {
  const location = useLocation();
  const { shippingInfo, handleCart } = location.state || {};
  console.log("handleCart:", handleCart);
  const [paymentMethod, setPaymentMethod] = useState("");

  const products = useSelector((state) => {
    console.log("Current Redux state:", state);
    console.log("handleCart:", handleCart);

    if (typeof state !== "object" || state === null) {
      console.error("Redux state is not an object.");
      return [];
    }

    return handleCart
      .map((cartItem) => {
        const productId = cartItem.id;
        const product = state[productId];

          console.log(`Product for ID ${productId}:`, product);

        if (product) {
          return product; 
        }

        return null;
      })
      .filter((product) => product !== null);
  });

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handlePayNow = () => {
    if (paymentMethod) {
      alert(`Payment successful! Thank you for your purchase!`);
      // You can also redirect the user to a confirmation page or perform other actions.
    } else {
      alert("Please select a payment method before proceeding.");
    }
  };

  return (
    <div className="OrderConfirmation">
      <h1>Order Confirmation</h1>
      <h3>Client Information</h3>
      <p>
        <strong>First Name:</strong> {shippingInfo?.firstName}
      </p>
      <p>
        <strong>Last Name:</strong> {shippingInfo?.lastName}
      </p>
      <p>
        <strong>Email:</strong> {shippingInfo?.email}
      </p>
      <p>
        <strong>Phone Number:</strong> {shippingInfo?.tel}
      </p>
      <p>
        <strong>County:</strong> {shippingInfo?.county}
      </p>
      <p>
        <strong>Town:</strong> {shippingInfo?.town}
      </p>
      {handleCart && handleCart.length > 0 && (
        <div>
          <h3 className="mb-3">Payment Method</h3>
          <form>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="Mpesa"
                onChange={handlePaymentChange}
              />
              Mpesa
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="creditCard"
                onChange={handlePaymentChange}
              />
              Visa/Master Card
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="paypal"
                onChange={handlePaymentChange}
              />
              PayPal
            </label>
          </form>
        </div>
      )}
      <h3 className="mt-3">Order Summary</h3>
      {products.length > 0 &&
        products.map((product) => (
          <div key={product.id} className="order-summary-item">
            <img
              src={product.image}
              alt={product.title}
              height="50"
              width="50"
            />
            <h4 className="">{product.title}</h4>
            <small>as shown in picture</small>
            <div className="">${product.price}</div>
          </div>
        ))}
      <div className="coupon">
        <h4>Discount</h4>
        <div className="row">
          <div className="col-10">
            <input
              type="text"
              id="coupon"
              name="coupon"
              placeholder="Enter coupon code"
              className="form-control mb-2"
            />
          </div>
          <div className="col-2">
            <button type="submit" class="btn btn-dark">
              Apply
            </button>
          </div>
        </div>
      </div>
      <a href="/" target="_blank">
        Shipping Fee Policy
      </a>
      <h3>Total</h3>
      <div>
        <span>
          <p>Goods Amount:</p>
        </span>
        <span>
          <p>$</p>
        </span>
      </div>
      <div>
        <span>
          <small>Shipping Fee:</small>
        </span>
        <span>
          <p>+$</p>
        </span>
      </div>
      <div>
        <span>
          <p>$Total Amoun</p>
        </span>
        <span>
          <button className="btn btn-outline-dark" onClick={handlePayNow}>
            Place Order
          </button>
        </span>
      </div>
    </div>
  );
}