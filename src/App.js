import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import Home from "./Home";
import Products from "./Products";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
      </Routes>
    </div>
  );
}

export default App;
