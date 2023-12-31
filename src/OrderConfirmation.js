import React, { useState} from "react";

export default function OrderConfirmation() {
  const [paymentMethod, setPaymentMethod] = useState("");



  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handlePayNow = () => {
    if (paymentMethod) {
      alert(
        `Payment successful! Thank you for your purchase!`
      );
      // You can also redirect the user to a confirmation page or perform other actions.
    } else {
      alert("Please select a payment method before proceeding.");
    }
  };

  return (
    <div className="OrderConfirmation">
      <h2>Order Confirmation</h2>
      <p>Your order has been successfully placed!</p>
      <h2>Order Summary</h2>
      <p>
        <strong>Product:</strong> Laptop
      </p>
      <p>
        <strong>Quantity:</strong> 1
      </p>
      <p>
        <strong>Total Amount:</strong> $1000.00
      </p>

      <h3>Client Information</h3>
      <p>
        <strong>First Name:</strong> 
      </p>
      <p>
        <strong>Last Name:</strong>
      </p>
      <p>
        <strong>Email:</strong> 
      </p>
      <p>
        <strong>Phone Number:</strong> 
      </p>
      <p>
        <strong>Location:</strong> 
      </p>
      <div>
        <h3>Payment Methods</h3>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="creditCard"
            onChange={handlePaymentChange}
          />
          Credit Card
        </label>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="paypal"
            onChange={handlePaymentChange}
          />
          PayPal
        </label>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="bankTransfer"
            onChange={handlePaymentChange}
          />
          Bank Transfer
        </label>
      </div>
      <button onClick={handlePayNow}>Pay Now</button>
    </div>
  );
}
