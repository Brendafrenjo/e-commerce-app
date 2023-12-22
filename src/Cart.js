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
          <p>Your cart is empty!</p>
          <div className="start-shopping">
            <NavLink to="/products" className="btn btn-outline-dark">
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
      <div className="row">
        <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="Quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-item">
            {handleCart.map((product) => (
              <div className="col-md-12 cart-item" key={product.id}>
                <div className="rounded-3">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-md-4 mb-3 mt-3 cart-product">
                        <img
                          src={product.image}
                          alt={product.title}
                          height="250px"
                          width="230px"
                        />
                      </div>
                      <div className="col-md-4 mb-3 mt-2">
                        <h5 className="pt-2 pb-3">{product.title}</h5>
                        <button
                          className="btn btn-outline-dark"
                          onClick={() => handleDel(product)}
                        >
                          <i className="fa fa-minus"></i>
                        </button>
                        <span className="count">{product.qty}</span>
                        <button
                          className="btn btn-outline-dark"
                          onClick={() => handleAdd(product)}
                        >
                          <i className="fa fa-plus"></i>
                        </button>
                        <p className="fw-bold mt-2">
                          ${product.qty * product.price}
                        </p>
                        <button className="btn btn-dark">Remove</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-12 cart-summary">
            <button className="clear-cart btn btn-dark">Clear Cart</button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">${calculateSubtotal()}</span>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
            </div>
            <NavLink
              to="/checkout"
              className="btn btn-outline-dark mt-3 w-30 mx-auto"
            >
              Check Out
            </NavLink>
            <br />
            <NavLink to="/products" className="btn btn-outline-dark mt-3">
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
          <h1 className="mb-4">Shopping Cart</h1>
        </div>
        <div className=" row justify-content-center mb-5 pb-5">
          {handleCart.length === 0 ? emptyCart() : displayCartItems()}
        </div>
      </div>
    </div>
  );
}
