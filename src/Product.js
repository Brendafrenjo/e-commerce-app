import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Bars } from "react-loader-spinner";
import "./Product.css";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getProduct() {
      setLoading(true);

      const res = await fetch(`https://fakestoreapi.com/products/${id}`);

      setProduct(await res.json());
      setLoading(false);
    }
    getProduct();
  }, []);

  function Loading() {
    return (
      <div className="loader-container">
        <Bars
          height="80"
          width="80"
          color="#black"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  function ShowProduct() {
    return (
      <div className="show-product-container">
        <div className="row">
          <div className="col-lg-6">
            <img
              src={product.image}
              alt={product.title}
              height="400px"
              width="400px"
            />
          </div>
          <div className="col-lg-6 description">
            <h4 className="text-uppercase text-black-50 pt-3">
              {product.category}
            </h4>
            <h4 className="">{product.title}</h4>
            <p className="lead">
              Rating {product.rating && product.rating.rate}
              <i class="fa-solid fa-star"></i>
            </p>
            <h4 className="display-6 fw-bold mb-3">${product.price}</h4>
            <p>{product.description}</p>
            <button className="btn btn-outline-dark me-2">Add to Cart</button>
            <NavLink to="/cart" className="btn btn-dark">
              Go to Cart
            </NavLink>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="Product">
      <div className="container">
        <div className="centered-container">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
}
