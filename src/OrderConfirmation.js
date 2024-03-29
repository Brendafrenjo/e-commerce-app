import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./OrderConfirmation.css";

export default function OrderConfirmation() {
  const location = useLocation();
  const { shippingInfo = {}, handleCart = [] } = location.state || {};
  const [paymentMethod, setPaymentMethod] = useState("");

  const navigate = useNavigate();

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
      navigate("/payment-successful", "_blank");
    } else {
      alert("Please select a payment method before proceeding.");
    }
  };

  return (
    <div className="OrderConfirmation">
      <div className="client-information">
        <h3>Client Information</h3>
        <hr />
        <div className="pb-2">
          <span>
            <i class="fa-solid fa-user info-icon"></i>
          </span>{" "}
          {shippingInfo?.firstName} {shippingInfo?.lastName}
        </div>
        <div className="pb-2">
          <span>
            <i className="fa-solid fa-phone info-icon"></i>
          </span>{" "}
          {shippingInfo?.tel}
        </div>
        <div className="pb-2">
          {" "}
          <spna>
            <i className="fa-solid fa-envelope info-icon"></i>
          </spna>{" "}
          {shippingInfo?.email}
        </div>
        <div>
          <span>
            <i className="fa-solid fa-location-dot info-icon"></i>
          </span>{" "}
          {shippingInfo?.county}, {shippingInfo?.town}
        </div>
      </div>
      <div className="spacing-between"></div>
      {handleCart && handleCart.length > 0 && (
        <div>
          <h3 className="">Payment Method</h3>
          <small className="text-muted trusted-payment">
            Trusted Payment, 100% Money Back Guarantee
          </small>
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
          <div className="spacing-between"></div>
        </div>
      )}
      <h3 className="mt-3 mb-3">Order Summary</h3>
      <hr />
      <div className="container">
        {Object.keys(handleCart).map((productId) => {
          const product = handleCart[productId];
          return (
            <div key={productId} className="order-summary-item">
              <span>
                <img
                  src={product.image}
                  alt={product.title}
                  height="100"
                  width="100"
                  className=""
                />
              </span>
              <span className="order-description">
                <h5 className="">{product.title.substring(0, 20)}...</h5>
                <div>
                  <i class="fa-solid fa-xmark icon"></i>
                  {product.qty}
                </div>
                <div className="product-price">
                  ${Math.round(product.price)}
                </div>
              </span>
            </div>
          );
        })}
      </div>
      <div className="spacing-between"></div>
      <div className="coupon">
        <h4 className="text-start">Discount</h4>
        <div className="row container input-group mb-2">
          <div className="col-10">
            <input
              type="text"
              id="coupon"
              name="coupon"
              placeholder="Enter coupon code"
              className="form-control enter-coupon"
            />
          </div>
          <div className="col-2">
            <button
              type="submit"
              className="btn btn-dark apply-button"
              title="Apply"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
      <div className="shipping-fee-info">
        <NavLink
          to="example"
          target="_blank"
          className="text-end"
          title="Shipping Fee Policy"
          rel="noreferrer"
        >
          Shipping Fee Policy
        </NavLink>
      </div>
      <h3 className="text-start">Total</h3>
      <div className="total-amount pb-2">
        <span>Goods Amount:</span>
        <span className="amount-cost">${Math.round(calculateSubtotal())}</span>
      </div>
      <div className="shipping-info">
        <span>Shipping Fee:</span>
        <span className="shipping-cost pb-3">
          <span>
            <i className="fa-solid fa-plus icon"></i> $2
          </span>
        </span>
      </div>
      <div className="place-order">
        <span className="subtotal">${Math.round(calculateSubtotal() + 2)}</span>
        <span>
          <button
            className="btn btn-order"
            onClick={handlePayNow}
            title="Place Order"
          >
            Place Order
          </button>
        </span>
      </div>
    </div>
  );
}
