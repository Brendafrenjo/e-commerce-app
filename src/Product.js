import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "./redux/action";
import { NavLink, useParams } from "react-router-dom";
import { Bars } from "react-loader-spinner";
import "./Product.css";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  function addProduct(product) {
    dispatch(addCart(product));
  }

  useEffect(() => {
    async function getProduct() {
      setLoading(true);

      const res = await fetch(`https://fakestoreapi.com/products/${id}`);

      setProduct(await res.json());
      setLoading(false);
    }
    getProduct();
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function Loading() {
    return (
      <div className="loader-container">
        <Bars
          height="80"
          width="80"
          color="#5f1854"
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
            <h4 className="text-uppercase text-black-50 pt-3 product-category text-muted">
              {product.category}
            </h4>
            <h4 className="product-name">{product.title}</h4>
            <p className="lead">
              Rating {product.rating && product.rating.rate}
              <i className="fa-solid fa-star rating"></i>
            </p>
            <h4 className="display-6 fw-bold mb-3 product-price">
              ${product.price}
            </h4>
            <p className="product-description">{product.description}</p>
            <button
              className="btn btn-add-to-cart me-2 "
              onClick={() => addProduct(product)}
              title="Add to Cart"
            >
              Add to Cart
            </button>
            <NavLink
              to="/cart"
              className="btn btn-go-to-cart"
              title="Go to Cart"
              onClick={() => window.scrollTo(0, 0)}
            >
              Go to Cart
            </NavLink>
            <div className="col-md-12">
              <NavLink
                to="/products"
                className="btn product-shopping mt-3"
                title="Continue Shopping"
              >
                Continue Shopping
              </NavLink>
            </div>
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
