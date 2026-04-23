import React, { useState } from "react";

const Home = ({ search = "" }) => {
  const [wishlist, setWishlist] = useState([]);

  const productsData = [
    {
      id: 1,
      name: "Gold Necklace",
      price: 200,
      image:
        "https://images.unsplash.com/photo-1601821765780-754fa98637c1?w=400",
    },
    {
      id: 2,
      name: "Diamond Ring",
      price: 500,
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400",
    },
    {
      id: 3,
      name: "Silver Earrings",
      price: 100,
      image:
        "https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=400",
    },
    {
      id: 4,
      name: "Bridal Set",
      price: 800,
      image:
        "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400",
    },
    {
      id: 5,
      name: "Gold Bracelet",
      price: 150,
      image:
        "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400",
    },
  ];

  const toggleWishlist = (product) => {
    if (wishlist.find((p) => p.id === product.id)) {
      setWishlist(wishlist.filter((p) => p.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  // ✅ SAFE SEARCH (THIS WAS YOUR BUG)
  const filteredProducts = productsData.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      {/* HERO (SAFE FALLBACK COLOR ADDED) */}
      <div
        style={{
          backgroundImage: "url('/hero-gold.png')",
          backgroundColor: "#000", // fallback if image missing
          height: "60vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <h1>Elegance in Every Piece</h1>
      </div>

      {/* TITLE */}
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>
        {search ? `Results for "${search}"` : "Our Collection"}
      </h2>

      {/* ✅ IMPORTANT FALLBACK */}
      {filteredProducts.length === 0 ? (
        <h3 style={{ textAlign: "center" }}>No products found</h3>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            padding: "20px",
          }}
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "center",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <h3>{product.name}</h3>
              <p>${product.price}</p>

              <button>Add to Cart</button>
              <button onClick={() => toggleWishlist(product)}>
                {wishlist.find((p) => p.id === product.id)
                  ? "❤️"
                  : "🤍"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;