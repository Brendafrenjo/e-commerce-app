import React from "react";
import "./Products.css";
import MainContent from "./MainContent"

export default function Products() {
  return (
    <div className="Products">
      <div className="row">
        <div className="col-12">
          <h1>Latest Products</h1>
          <hr />
        </div>
      </div>
      <MainContent />
    </div>
  );
}
