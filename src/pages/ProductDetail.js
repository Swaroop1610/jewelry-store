import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data';

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <h2 style={{ textAlign: 'center' }}>Product not found</h2>;
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '50px',
      padding: '50px',
      flexWrap: 'wrap'
    }}>
      
      {/* IMAGE */}
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: '350px',
          borderRadius: '10px'
        }}
      />

      {/* DETAILS */}
      <div style={{ maxWidth: '400px' }}>
        <h1>{product.name}</h1>

        <p style={{ color: 'gold', fontSize: '24px', fontWeight: 'bold' }}>
          ${product.price}
        </p>

        <p style={{ marginTop: '10px', lineHeight: '1.6' }}>
          Premium quality jewelry crafted for elegance and daily wear.
        </p>

        <p><b>Material:</b> Gold / Diamond</p>

        {/* ✅ FIXED BUTTON */}
        <button
          onClick={() => addToCart(product)}
          style={{
            padding: '12px 25px',
            background: 'black',
            color: 'white',
            border: 'none',
            marginTop: '20px',
            cursor: 'pointer',
            borderRadius: '5px'
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;