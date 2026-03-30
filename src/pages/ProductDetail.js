import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data';

const ProductDetail = ({addToCart }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <h2 style={{ textAlign: 'center' }}>Product not found</h2>;

  return (
    <div style={{
      textAlign: 'center',
      marginTop: '50px'
    }}>
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: '300px',
          borderRadius: '10px'
        }}
      />

      <h2>{product.name}</h2>

      <p style={{ color: 'gold', fontSize: '20px', fontWeight: 'bold' }}>
        ${product.price}
      </p>

      {/* Add to Cart Button */}
      <button
        style={{
          padding: '10px 20px',
          background: 'gold',
          border: 'none',
          marginTop: '10px',
          cursor: 'pointer',
          borderRadius: '5px'
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;