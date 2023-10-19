import React, { useState } from "react";
import "./Products.css";

export default function Products() {
  const [title, setTitle] = useState(null);
  const [data, setData] = useState(null);

  const state = {appTitle: "Customers"}

  return (
    <div className="Products">
      <div className="row">
        <div className="col-12">
          <h1>Latest Products</h1>
          <hr />
        </div>
      </div>
      <h4>{state.appTitle}</h4>
    </div>
  );
}
