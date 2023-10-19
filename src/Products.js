import React from "react";
import "./Products.css";
import MainContent from "./MainContent";

export default function Products() {
  return (
    <div className="Products">
      <div className="row">
        <div className="col-12">
          <h1>Latest Products</h1>
          <hr />
          <div className="buttons d-flex justify-content-center mb-5 pb-5">
            <button className="btn btn-outline-dark me-2">Cargo Pants</button>
            <button className="btn btn-outline-dark me-2">Dresses</button>
            <button className="btn btn-outline-dark me-2">Shoes</button>
            <button className="btn btn-outline-dark me-2">
              Shirts and Tops
            </button>
            <button className="btn btn-outline-dark">Accessories</button>
          </div>
        </div>
      </div>
      <MainContent />
    </div>
  );
}
