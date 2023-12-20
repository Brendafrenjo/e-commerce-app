import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import Home from "./Home";
import Products from "./Products";
import { Routes, Route, Redirect } from "react-router-dom";
import Product from "./Product";
import LogIn from "./LogIn";
import Cart from "./Cart";
import NotFound from "./NotFound";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="products/:id" element={<Product />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
