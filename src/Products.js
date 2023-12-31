import React, { useState, useEffect, useRef } from "react";
import "./Products.css";
import { ThreeDots } from "react-loader-spinner";
import { NavLink } from "react-router-dom";

export default function Products() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const componentMounted = useRef(true);

  useEffect(() => {
    async function getProducts() {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted.current) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
    }
    getProducts();

    return () => {
      componentMounted.current = false;
    };
  }, []);

  function ErrorOccured() {
    return (
      <div className="ErrorOccuerd">
        <p>Error! Something went wrong!</p>
      </div>
    );
  }

  const Loading = () => {
    return (
      <div className="loader-container">
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="black"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons flex-container">
          <div className="box">
            <div className="buttons-wrapper">
              <button
                className="btn btn-outline-dark me-2 mb-3"
                onClick={() => setFilter(data)}
              >
                All
              </button>
              <button
                className="btn btn-outline-dark me-2 mb-3"
                onClick={() => filterProduct("men's clothing")}
              >
                Men's Clothing
              </button>
              <button
                className="btn btn-outline-dark me-2 mb-3"
                onClick={() => filterProduct("women's clothing")}
              >
                Women's Clothing
              </button>
              <button
                className="btn btn-outline-dark me-2 mb-3"
                onClick={() => filterProduct("jewelery")}
              >
                Jewelery
              </button>
              <button
                className="btn btn-outline-dark me-2 mb-3"
                onClick={() => filterProduct("electronics")}
              >
                Electronics
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
                <h5 className="card-title lead fw-bold">
                  {product.title.substring(0, 12)}...
                </h5>
                <p className="card-text lead fw-bold product-price">
                  ${product.price}
                </p>
                <NavLink
                  to={`/products/${product.id}`}
                  className="btn btn-outline-dark product-id"
                >
                  Buy Now
                </NavLink>
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
          {loading ? (
            <Loading />
          ) : filter.length === 0 ? (
            <ErrorOccured />
          ) : (
            <ShowProducts />
          )}
        </div>
      </div>
    </div>
  );
}
