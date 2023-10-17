import React, { useState, useEffect } from "react";

export default function Product() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone.json());
        setFilter(await response.json());
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Latest Product</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
