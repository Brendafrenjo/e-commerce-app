import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import NavBar from "./NavBar";
import Home from "./Home";
import Products from "./Products";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Product from "./Product";
import LogIn from "./LogIn";
import Cart from "./Cart";
import NotFound from "./NotFound";
import Checkout from "./Checkout";
import OrderConfirmation from "./OrderConfirmation";
import AuthenticationContainer from "./AuthenticationContainer";
import Registration from "./Registration";
import FindYourAccount from "./FindYourAccount";

function App() {
  const location = useLocation();
  const hideNavBar =
    location.pathname === "/authentication-container" ||
    location.pathname === "/registration" ||
    location.pathname === "/login" ||
    location.pathname === "/find-your-account";

  return (
    <div className="App">
      <ToastContainer />
      {!hideNavBar && <NavBar />}
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="products/:id" element={<Product />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route
          path="/authentication-container"
          element={<AuthenticationContainer />}
        />
        <Route path="/registration" element={<Registration />} />
        <Route path="/find-your-account" element={<FindYourAccount />} />
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </div>
  );
}

export default App;
