import React from 'react';

const Home = () => {
  return (
    <div>

      {/* HERO BANNER */}
      <div style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1617038220319-276d3cfab638')",
        height: '400px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <h1 style={{
          color: 'white',
          fontSize: '40px',
          background: 'rgba(0,0,0,0.4)',
          padding: '10px 20px',
          borderRadius: '10px'
        }}>
          Elegance in Every Piece
        </h1>
      </div>

      {/* TITLE */}
      <h2 style={{
        textAlign: 'center',
        marginTop: '40px'
      }}>
        Shop by Category
      </h2>

      {/* CATEGORY SECTION */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        padding: '40px'
      }}>
        {[
          { name: 'Gold', img: 'https://images.unsplash.com/photo-1602752250015-52934bc45613' },
          { name: 'Diamond', img: 'https://images.unsplash.com/photo-1608042314453-ae338d80c427' },
          { name: 'Bridal', img: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638' }
        ].map(cat => (
          <div key={cat.name} style={{ textAlign: 'center' }}>
            <img
              src={cat.img}
              alt={cat.name}
              style={{
                width: '150px',
                height: '150px',
                objectFit: 'cover',
                borderRadius: '50%',
                boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
              }}
            />
            <h3 style={{ marginTop: '10px' }}>{cat.name}</h3>
          </div>
        ))}
      </div>

      {/* COLLECTION TITLE */}
      <h2 style={{
        textAlign: 'center',
        marginBottom: '20px'
      }}>
        Our Collection
      </h2>

    </div>
  );
};

export default Home;