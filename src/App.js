import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import Home from "./Home";
import Products from "./Products";
import { Routes, Route } from "react-router-dom";
import Product from "./Product";
import LogIn from "./LogIn";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="products/:id" element={<Product />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
