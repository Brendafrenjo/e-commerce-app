import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./OrderConfirmation.css";
import { initializeOrderDetails } from "./redux/action";

export default function OrderConfirmation({ selectedPaymentMethod }) {
  const { handleCart, handleOrderDetails } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    // Simulate initializing order details using the existing cart details
    const simulatedOrderDetails = {
      orderNumber: generateOrderNumber(),
      items: handleCart,
      totalAmount: calculateSubtotal(handleCart),
      shippingInfo: {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        tel: "123-456-7890",
        address: "123 Main St, Cityville",
      },
      orderDate: new Date(),
      paymentMethod: selectedPaymentMethod,
    };

    dispatch(initializeOrderDetails(simulatedOrderDetails));
  }, [dispatch, handleCart, selectedPaymentMethod]);

  const calculateSubtotal = (cart) => {
    return cart.reduce((total, product) => {
      return total + product.qty * product.price;
    }, 0);
  };

  const generateOrderNumber = () => {
    return Math.floor(Math.random() * 1000000) + 1;
  };

  const handlePayNow = () => {
    window.location.href = "https://mpesa-payment-url.com";
  };

  if (!handleOrderDetails) {
    // Handle the case where order details are not available yet
    return <p>Loading order details...</p>;
  }

  return (
    <div className="OrderConfirmation">
      <div className="OrderConfirmation">
        <h2>Order Confirmation</h2>
        <p>Your order has been successfully placed!</p>
        <div className="order-details">
          <h3>Order Details</h3>
          <div>
            <strong>Order Number:</strong>
          </div>
          <div>
            <strong>Items:</strong>
            <div>
              {handleOrderDetails.items.map((item, index) => (
                <div key={index}>
                  {item.name} - Quantity: {item.quantity}
                </div>
              ))}
            </div>
          </div>
          <div>
            <strong>Total Amount:</strong> $
            {handleOrderDetails.totalAmount.toFixed(2)}
          </div>
          <div>
            <strong>Shipping Information:</strong>
            <div>
              <div>
                Name: {handleOrderDetails.shippingInfo.firstName}{" "}
                {handleOrderDetails.shippingInfo.lastName}
              </div>
              <div>Email: {handleOrderDetails.shippingInfo.email}</div>
              <div>Phone: {handleOrderDetails.shippingInfo.tel}</div>
              <div>
                Address: {handleOrderDetails.shippingInfo.town},{" "}
                {handleOrderDetails.shippingInfo.county},{" "}
                {handleOrderDetails.shippingInfo.zipCode}
              </div>
            </div>
          </div>
          <div>
            <button onClick={handlePayNow}>Pay Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
