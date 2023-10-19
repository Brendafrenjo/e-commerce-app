import React, { useState } from "react";
import "./Products.css";

export default function Products() {
  const [data, setData] = useState(5);

  const state = { appTitle: "Customers", customersCount: data };

  function handleRefresh(event) {
    console.log("Refresh clicked");
    event.preventDefault();
    setData(10);
  }

  return (
    <div className="Products">
      <div className="row">
        <div className="col-12">
          <h1>Latest Products</h1>
          <hr />
        </div>
      </div>
      <h4>
        {state.appTitle}{" "}
        <span className="badge bg-success">{state.customersCount}</span>
        <button className="btn btn-success ms-2" onClick={handleRefresh}>
          Refresh
        </button>
      </h4>
    </div>
  );
}
