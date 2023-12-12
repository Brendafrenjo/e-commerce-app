import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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

  return <div></div>;
}
