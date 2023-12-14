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
      <div>
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
      <div>
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            height="350px"
            width="350px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50 pt-3">
            {product.category}
          </h4>
          <h4 className="">{product.title}</h4>
          <p className="lead">
            Rating {product.rating && product.rating.rate}
            <i class="fa-solid fa-star"></i>
          </p>
          <h4 className="display-6 fw-bold my-4">${product.price}</h4>
          <p className="lead">{product.description}</p>
          <button className="btn btn-outline-dark me-2">Add to Cart</button>
          <NavLink to="/cart" className="btn btn-dark">
            Go to Cart
          </NavLink>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="container">
        <div className="row mb-5 mt-5">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
}
