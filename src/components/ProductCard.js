import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="image-wrapper">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="info">
        <h3>{product.name}</h3>
        <p className="price">${product.price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;