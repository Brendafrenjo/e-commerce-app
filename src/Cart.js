import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  addCart,
  deleteCart,
  removeFromCart,
  initializeCartFromLocalStorage,
  clearCart,
} from "./redux/action";
import "./Cart.css";

export default function Cart() {
  const { handleCart } = useSelector((state) => state);

  const dispatch = useDispatch();

  // Initialize cart from local storage when the component mounts
  useEffect(() => {
    dispatch(initializeCartFromLocalStorage());
  }, [dispatch]);

  function handleDel(product) {
    dispatch(deleteCart(product));
  }

  function handleAdd(product) {
    dispatch(addCart(product));
  }

  function handleRemove(productId) {
    dispatch(removeFromCart(productId));
  }

  function handleClear() {
    dispatch(clearCart());
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
                      <h4 className="pb-1">{product.title}</h4>
                      <div className="cart-product-price fw-bold lead mb-2">
                        ${product.price}
                      </div>
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
                        ${Math.round(product.qty * product.price)}
                      </p>
                      <button
                        className="btn btn-dark"
                        onClick={() => handleRemove(product.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-md-12 ">
              <div className="cart-summary">
                <button
                  className="clear-cart btn btn-outline-dark mt-3"
                  onClick={handleClear}
                >
                  Clear Cart
                </button>
                <div className="cart-checkout">
                  <div className="subtotal">
                    <span>Subtotal:</span>
                    <span className="amount">
                      ${Math.round(calculateSubtotal())}
                    </span>
                  </div>
                  <p>Taxes and shipping calculated at checkout</p>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="check-out-info mt-3 text-end">
            <NavLink
              to="/checkout"
              className="btn btn-dark mb-2 check-out custom-width"
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
