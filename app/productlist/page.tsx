"use client";
import React, { useEffect, useState } from "react";

interface ProductItem {
  id: number;
  title: string;
  price: number;
}

const Product = () => {
  const [product, setProduct] = useState<ProductItem[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      console.log("product data:", data);

      setProduct(data.products);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product list</h1>

      {product.map((items) => (
        <div key={items.id}>
          <li>Name: {items.title}</li>
          <li>Price: {items.price}</li>
        </div>
      ))}
    </div>
  );
};

export default Product;