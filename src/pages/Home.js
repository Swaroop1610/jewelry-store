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
  {
    name: "Gold",
    img: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=500&q=80"
  },
  {
    name: "Silver",
    img: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=500&q=80"
  },
  {
    name: "Bridal",
    img: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=500&q=80"
  },
  {
    name: "Rings",
    img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&q=80"
  },
  {
    name: "Necklaces",
    img: "https://images.unsplash.com/photo-1601821765780-754fa98637c1?w=500&q=80"
  },
  {
    name: "Bracelets",
    img: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=500&q=80"
  }
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