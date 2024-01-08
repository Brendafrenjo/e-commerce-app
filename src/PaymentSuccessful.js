import React from "react";
import "./PaymentSuccessful.css";

export default function PaymentSuccessful() {
  return (
    <div className="PaymentSuccessful">
      <div className="container">
        <h1>Thank You!</h1>
        <p>
          Thank you for your purchase! Your payment was successful, and we're
          now processing your order.
        </p>
      </div>
    </div>
  );
}
