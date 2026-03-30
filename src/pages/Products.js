import React from 'react';
import { products } from '../data';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '25px',
      padding: '30px'
    }}>
      {products.map(p => (
        <div
          key={p.id}
          style={{
            background: '#ffffff',
            border: '1px solid #eee',
            borderRadius: '12px',
            padding: '15px',
            textAlign: 'center',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <img
            src={p.image}
            alt={p.name}
            style={{
              width: '100%',
              height: '220px',
              objectFit: 'cover',
              borderRadius: '10px'
            }}
          />

          <h3 style={{ marginTop: '10px' }}>{p.name}</h3>

          <p style={{
            color: '#bfa14a',
            fontWeight: 'bold',
            fontSize: '18px'
          }}>
            ${p.price}
          </p>

          {/* Add to Cart Button */}
          <button
            style={{
              marginTop: '10px',
              padding: '8px 15px',
              background: '#bfa14a',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '5px'
            }}
          >
            Add to Cart
          </button>

          <br /><br />

          <Link to={`/product/${p.id}`} style={{ color: '#333' }}>
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;