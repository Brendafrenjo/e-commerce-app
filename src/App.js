import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import Home from "./Home";
import { Switch, Route } from "react-router-dom";
import Products from "./MainContent";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Home />
        <Router exact path="/" component={Home} />
        <Router exact path="/Products" component={Products} />
      </Switch>
    </div>
  );
}

export default App;
