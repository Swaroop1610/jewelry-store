import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>

      {/* ✅ BRAND HEADER (NEW) */}
      <div style={{
        textAlign: 'center',
        padding: '15px',
        fontSize: '28px',
        fontWeight: 'bold',
        color: '#bfa14a',
        background: '#fff',
        borderBottom: '1px solid #eee'
      }}>
      Sree Dhanalakshmi Jewelry
      </div>
       <h1 style={{ letterSpacing: '2px' }}>
        
       </h1>

      {/* ✅ NAVBAR */}
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 30px',
        background: '#fff'
      }}>

        {/* Left */}
        <div style={{ fontWeight: 'bold' }}> SDJ Jewelry</div>

        {/* Center */}
        <input
          type="text"
          placeholder="Search jewelry..."
          style={{
            padding: '8px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            width: '250px'
          }}
        />

        {/* Right */}
        <div>
          <Link style={{ margin: '0 15px' }} to="/">Home</Link>
          <Link style={{ margin: '0 15px' }} to="/products">Products</Link>
          <Link style={{ margin: '0 15px' }} to="/cart">Cart</Link>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;