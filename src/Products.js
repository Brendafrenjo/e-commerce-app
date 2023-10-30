import React, { useState, useEffect } from "react";
import "./Products.css";
import { FallingLines } from "react-loader-spinner";
import MainContent from "./MainContent";

export default function Products() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <div>
        <FallingLines
          color="#4fa94d"
          width="100"
          visible={true}
          ariaLabel="falling-lines-loading"
        />
      </div>
    );
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons flex-container">
          <div className="box">
            <div className="buttons-wrapper">
              <button className="btn btn-outline-dark me-2 mb-3">All</button>
              <button className="btn btn-outline-dark me-2 mb-3">
                Men's Clothing
              </button>
              <button className="btn btn-outline-dark me-2 mb-3">
                Women's Clothing
              </button>
              <button className="btn btn-outline-dark me-2 mb-3">
                Jewelary
              </button>
              <button className="btn btn-outline-dark me-2 mb-3">
                Electronics
              </button>
              <button className="btn btn-outline-dark mb-3">
                Tops and Shirts
              </button>
            </div>
          </div>
        </div>
        {filter.map((product, index) => (
          <div className="col-md-3 mb-4 product-card" key={index}>
            <div className="card">
              <img
                src={product.image}
                className="card-img-top product-image"
                alt={product.title}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
                <a href="#" className="btn btn-outline-dark">
                  Quick Buy
                </a>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="Products">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className=" row justify-content-center mb-5 pb-5">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
        <MainContent />
      </div>
    </div>
  );
}
