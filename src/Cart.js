import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addCart, deleteCart } from "./redux/action";
import "./Cart.css";

export default function Cart() {
  const { handleCart } = useSelector((state) => state);

  const dispatch = useDispatch();

  function handleDel(product) {
    dispatch(deleteCart(product));
  }

  function handleAdd(product) {
    dispatch(addCart(product));
  }

  const calculateSubtotal = () => {
    return handleCart.reduce((total, product) => {
      return total + product.qty * product.price;
    }, 0);
  };

  function emptyCart() {
    return (
      <div className="emptyCart">
        <div className="col-md-5">
          <p className="mt-2">Your cart is empty!</p>
          <div className="">
            <NavLink
              to="/products"
              className="start-shopping text-decoration-none"
            >
              <i className="fa-solid fa-arrow-left me-2"></i>
              Start Shopping
            </NavLink>
          </div>
        </div>
      </div>
    );
  }

  function displayCartItems() {
    return (
      <div className="displayCartItems">
        <div className="container">
          <div className="row cart-item">
            {handleCart.map((product) => (
              <div className="col-md-12 cart-item item" key={product.id}>
                <div className="rounded-3 container">
                  <div className="row justify-content-center">
                    <div className="col-md-6 mb-3 cart-product">
                      <img
                        src={product.image}
                        alt={product.title}
                        height="200px"
                        width="180px"
                      />
                    </div>
                    <div className="col-md-4 mb-3 mt-2 main-content">
                      <h4 className="pt-2 pb-3">{product.title}</h4>
                      <div className="cart-product-quantity d-flex justify-content-center">
                        <button
                          className="btn btn-outline-black"
                          onClick={() => handleDel(product)}
                        >
                          <i className="fa fa-minus"></i>
                        </button>
                        <div className="count ps-2 pe-2">{product.qty}</div>
                        <button
                          className="btn btn-outline-black"
                          onClick={() => handleAdd(product)}
                        >
                          <i className="fa fa-plus"></i>
                        </button>
                      </div>
                      <p className="fw-bold lead mt-2">
                        ${product.qty * product.price}
                      </p>
                      <button className="btn btn-dark">Remove</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-md-12 ">
              <div className="cart-summary">
                <button className="clear-cart btn btn-outline-dark mt-3">
                  Clear Cart
                </button>
                <div className="cart-checkout">
                  <div className="subtotal">
                    <span>Subtotal:</span>
                    <span className="amount">${calculateSubtotal()}</span>
                  </div>
                  <p>Taxes and shipping calculated at checkout</p>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="check-out-info">
            <NavLink
              to="/checkout"
              className="btn btn-dark mt-3 mb-2 w-40 mx-auto check-out"
            >
              Check Out
            </NavLink>
            <br />
            <NavLink
              to="/products"
              className="continue-shopping text-decoration-none"
            >
              <i className="fa-solid fa-arrow-left me-2"></i>
              Continue Shopping
            </NavLink>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="Cart">
      <div className="container">
        <div>
          <h1>Shopping Cart</h1>
        </div>
        <div className=" row justify-content-center mb-5 pb-5">
          {handleCart.length === 0 ? emptyCart() : displayCartItems()}
        </div>
      </div>
    </div>
  );
}
