import React, { useState, useEffect } from "react";

export default function Product() {
  const [data, setData] = useSatte([]);
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
    };
    getProducts();
  }, [input]);

  return <div></div>;
}
