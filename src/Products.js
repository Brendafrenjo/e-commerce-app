import React, { useState, useEffect } from "react";
import "./Products.css";
import { FallingLines } from "react-loader-spinner";
import MainContent from "./MainContent";

const Products = () => {

  export default function Products() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(initialState);
    let componentMounted = true;

    if (loading) {
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
    } else {
      setLoading(
        <div>
          <FallingLines
            color="#4fa94d"
            width="100"
            visible={true}
            ariaLabel="falling-lines-loading"
          />
        </div>
      );
    }
  }
}