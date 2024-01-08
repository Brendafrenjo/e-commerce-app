import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./OrderConfirmation.css";

export default function OrderConfirmation() {
  const location = useLocation();
  const { shippingInfo = {}, handleCart = [] } = location.state || {};
  const [paymentMethod, setPaymentMethod] = useState("");

  const navigate = useNavigate();
  const products = useSelector((state) => {
    if (typeof state !== "object" || state === null) {
      console.error("Redux state is not an object.");
      return [];
    }

    return handleCart
      .map((cartItem) => {
        const productId = cartItem.id;
        const product = state[productId];

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

  const calculateSubtotal = () => {
    return handleCart.reduce((total, product) => {
      return total + product.qty * product.price;
    }, 0);
  };

  const handlePayNow = () => {
    if (paymentMethod) {
      const shippingFee = 2;
      const totalAmount = calculateSubtotal() + shippingFee;
      navigate("./payment-successful");
    } else {
      alert("Please select a payment method before proceeding.");
    }
  };

  return (
    <div className="OrderConfirmation">
      <div className="client-information">
        <h3>Client Information</h3>
        <hr />
        <p>
          <strong>Name:</strong> {shippingInfo?.firstName}{" "}
          {shippingInfo?.lastName}
        </p>
        <p>
          <strong>Email:</strong> {shippingInfo?.email}
        </p>
        <p>
          <strong>Phone Number:</strong> {shippingInfo?.tel}
        </p>
        <p>
          <strong>Location:</strong> {shippingInfo?.county},{" "}
          {shippingInfo?.town}
        </p>
        <hr />
      </div>
      {handleCart && handleCart.length > 0 && (
        <div>
          <h3 className="">Payment Method</h3>
          <small>Trusted Payment, 100% Money Back Guarantee</small>
          <hr />
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
          <hr />
        </div>
      )}
      <h3 className="mt-3">Order Summary</h3>
      <div className="container order-summary">
        <div className="row">
          {Object.keys(handleCart).map((productId) => {
            const product = handleCart[productId];
            return (
              <div key={productId} className="order-summary-item row">
                <div className="col-5">
                  <img
                    src={product.image}
                    alt={product.title}
                    height="100"
                    width="100"
                    className=""
                  />
                </div>
                <div className="col-7">
                  <h4 className="">{product.title.substring(0, 35)}...</h4>
                  <div>
                    <i class="fa-solid fa-xmark icon"></i>
                    {product.qty}
                  </div>
                  <div className="product-price">
                    ${Math.round(product.price)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <hr />
      <div className="coupon">
        <h4 className="text-start">Discount</h4>
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
      <hr />
      <a href="example" target="_blank" className="text-end">
        Shipping Fee Policy
      </a>
      <hr />
      <h3 className="text-start">Total</h3>
      <div className="total-amount">
        <span>
          <p>Goods Amount:</p>
        </span>
        <span className="amount-cost">${Math.round(calculateSubtotal())}</span>
      </div>
      <div className="shipping-info">
        <span>
          <small>Shipping Fee:</small>
        </span>
        <span className="shipping-cost">
          <p>
            <i className="fa-solid fa-plus icon"></i> $2
          </p>
        </span>
      </div>
      <div className="location">
        <i className="fa-solid fa-location-dot"></i>
        <p>
          {shippingInfo?.county}, {shippingInfo?.town}
        </p>
      </div>
      <div className="place-order">
        <span className="subtotal">${Math.round(calculateSubtotal() + 2)}</span>
        <span>
          <button className="btn btn-outline-dark" onClick={handlePayNow}>
            Place Order
          </button>
        </span>
      </div>
    </div>
  );
}
