import React, { useState } from "react";

const Home = () => {
  const [search, setSearch] = useState("");
  const [wishlist, setWishlist] = useState([]);

  // PRODUCTS DATA
  const productsData = [
    {
      id: 1,
      name: "Gold Necklace",
      price: 200,
      image: "https://images.unsplash.com/photo-1601821765780-754fa98637c1?w=500&q=80"
    },
    {
      id: 2,
      name: "Diamond Ring",
      price: 500,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&q=80"
    },
    {
      id: 3,
      name: "Silver Earrings",
      price: 100,
      image: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=500&q=80"
    },
    {
      id: 4,
      name: "Bridal Set",
      price: 800,
      image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=500&q=80"
    },
    {
      id: 5,
      name: "Gold Bracelet",
      price: 150,
      image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=500&q=80"
    },
    {
      id: 6,
      name: "Luxury Necklace",
      price: 650,
      image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=500&q=80"
    }
  ];

  const toggleWishlist = (product) => {
    if (wishlist.find((p) => p.id === product.id)) {
      setWishlist(wishlist.filter((p) => p.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  const filteredProducts = productsData.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      {/* HERO */}
     <div
  style={{
backgroundImage: "url('/hero-gold.png')",
    height: "90vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    display: "flex",
    alignItems: "center",
    paddingLeft: "50px"
  }}
>
  {/* 🔥 ADD THIS OVERLAY */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background:
        "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.2))"
    }}
  />

  {/* CONTENT */}
  <div style={{ position: "relative", zIndex: 1 }}>
    <h1
      style={{
        color: "white",
        fontSize: "60px",
        textShadow: "0 0 10px rgba(212,175,55,0.5)"
      }}
    >
      Elegance in Every Piece
    </h1>

    <button
      style={{
        background: "#D4AF37",
        color: "#000",
        padding: "12px 24px",
        borderRadius: "8px",
        marginTop: "20px"
      }}
    >
      Shop Now
    </button>
  </div>
</div>

      {/* CATEGORY TITLE */}
      <h2 style={{
  textAlign: "center",
  color: "#E6C56A"
}}>
  Shop by Category
</h2>
      {/* CATEGORY GRID (RESPONSIVE FIXED) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
           padding: "40px 20px",
          gap: "20px",
        }}
      >
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
        ].map((cat) => (
          <div key={cat.name} style={{ textAlign: "center" }}>
            <img
              src={cat.img}
              alt={cat.name}
              style={{
                width: "120px",
                height: "120px",
                objectFit: "cover",
                borderRadius: "50%"
              }}
            />
            <h3>{cat.name}</h3>
          </div>
        ))}
      </div>

      {/* COLLECTION */}
      <h2 style={{ textAlign: "center", marginTop: "30px" }}>
        Our Collection
      </h2>

      {/* SEARCH */}
      <input
        placeholder="Search jewelry..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          display: "block",
          margin: "20px auto",
          padding: "10px",
          width: "80%",
          maxWidth: "400px"
        }}
      />

      {/* PRODUCT GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          padding: "20px"
        }}
      >
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              textAlign: "center"
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <h3>{product.name}</h3>
            <p>${product.price}</p>

            <button>Add to Cart</button>
            <button onClick={() => toggleWishlist(product)}>
              {wishlist.find((p) => p.id === product.id) ? "❤️" : "🤍"}
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Home;