import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addCart, deleteCart } from "./redux/action";
import "./Cart.css"

export default function Cart() {
  const { handleCart } = useSelector((state) => state);

  const dispatch = useDispatch();

  function handleDel(product) {
    dispatch(deleteCart(product));
  }

  function handleAdd(product) {
    dispatch(addCart(product));
  }

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
      <div>
        <div className="row">
          {handleCart.map((product) => (
            <div className="col-md-12" key={product.id}>
              <div className="rounded-3">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-md-4 mb-3 mt-3">
                      <img
                        src={product.image}
                        alt={product.title}
                        height="220px"
                        width="200px"
                      />
                    </div>
                    <div className="col-md-4 mb-3 mt-2">
                      <h5 className="pt-3">{product.title}</h5>
                      <p className="fw-bold">
                        {product.qty} x ${product.price} = $
                        {product.qty * product.price}
                      </p>
                      <button
                        className="btn btn-outline-dark me-4"
                        onClick={() => handleDel(product)}
                      >
                        <i className="fa fa-minus"></i>
                      </button>
                      <button
                        className="btn btn-outline-dark"
                        onClick={() => handleAdd(product)}
                      >
                        <i className="fa fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="col-md-12">
            <NavLink
              to="/checkout"
              className="btn btn-outline-dark mt-3 w-30 mx-auto"
            >
              Proceed to Checkout
            </NavLink>
            <br />
            <NavLink to="/products" className="btn btn-outline-dark mt-3">
              More Shopping
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
          <h2 className="mb-4">Shopping Cart</h2>
        </div>
        <div className=" row justify-content-center mb-5 pb-5">
          {handleCart.length === 0 ? emptyCart() : displayCartItems()}
        </div>
      </div>
    </div>
  );
}
