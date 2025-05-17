import React from "react";

const Products = ({ item, price }) => {
  return (
    <div className="product-item">
      <h3>{item}</h3>
      <p className="Price">Rs {price}</p>
    </div>
  );
};

export default Products;
