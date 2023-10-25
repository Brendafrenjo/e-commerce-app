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
        <div className="buttons d-flex justify-content-center">
          <button className="btn btn-outline-dark me-2">Cargo Pants</button>
          <button className="btn btn-outline-dark me-2">Dresses</button>
          <button className="btn btn-outline-dark me-2">Shoes</button>
          <button className="btn btn-outline-dark me-2">Shirts and Tops</button>
          <button className="btn btn-outline-dark">Accessories</button>
        </div>
        {filter.map((product, index) => (
          <div className="col-md-3" key={index}>
            <div class="card">
              <img
                src={product.image}
                class="card-img-top"
                alt={product.title}
              />
              <div class="card-body">
                <h5 class="card-title">{product.title}</h5>
                <p class="card-text">${product.price}</p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
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
