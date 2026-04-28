import React, { useState } from "react";
import { generateContent } from "../gemini";
import { Link } from "react-router-dom";


const Home = ({ search = "" }) => {
  const [wishlist, setWishlist] = useState([]);

  // AI STATE
  const [aiResponse, setAiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  // PRODUCTS DATA
  const productsData = [
  {
    id: 1,
    name: "Gold Necklace",
    price: 200,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400"
  },
  {
    id: 2,
    name: "Diamond Ring",
    price: 500,
    image: "https://images.unsplash.com/photo-1589987607627-ec7a5f5d88c7?w=400"
  },
  {
    id: 3,
    name: "Silver Earrings",
    price: 100,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400"
  },
  {
    id: 4,
    name: "Bridal Set",
    price: 800,
    image: "https://images.unsplash.com/photo-1620656798579-1984d6b9b6a3?w=400"
  },
  {
    id: 5,
    name: "Gold Bracelet",
    price: 150,
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400"
  }
];

  // AI HANDLER
  const handleAiConsultation = async () => {
    setLoading(true);
    const prompt =
      "Give me a professional recommendation on which jewelry metal is best for daily wear and why.";
    try {
      const result = await generateContent(prompt);
      setAiResponse(result);
    } catch (err) {
      setAiResponse("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  // WISHLIST TOGGLE
  const toggleWishlist = (product) => {
    if (wishlist.find((p) => p.id === product.id)) {
      setWishlist(wishlist.filter((p) => p.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  // FILTER PRODUCTS
  const filteredProducts = productsData.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* HERO SECTION */}
      <div
        style={{
          backgroundImage: "url('/hero-gold.png')",
          backgroundColor: "#000",
          height: "60vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
      <div style={{ textAlign: "center" }}>
  <h1 style={{ fontSize: "42px", letterSpacing: "2px" }}>
    Timeless Beauty, Crafted for You
  </h1>

  <p style={{ marginTop: "10px", fontSize: "18px", opacity: "0.9" }}>
    Discover handcrafted jewelry designed for every occasion
  </p>
   <p style={{ marginTop: "12px", fontSize: "20px", color: "#f5d27a" }}>
    Gold • Diamond • Timeless Designs
  </p>
</div>
      </div>

      {/* AI CONSULTANT */}
      <div
        style={{
          backgroundColor: "#f9f9f9",
          padding: "30px",
          margin: "30px auto",
          maxWidth: "800px",
          borderRadius: "10px",
          textAlign: "center",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ color: "#d4af37" }}>AI Jewelry Consultant</h2>
        <p>Not sure what to pick? Ask our AI expert.</p>

        <button
          onClick={handleAiConsultation}
          disabled={loading}
          style={{
            padding: "10px 20px",
            backgroundColor: "#d4af37",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {loading ? "Consulting..." : "Get Advice"}
        </button>

        {aiResponse && (
          <div
            style={{
              marginTop: "20px",
              padding: "15px",
              backgroundColor: "white",
              borderRadius: "5px",
              textAlign: "left",
              lineHeight: "1.6",
            }}
          >
            <strong>Expert Advice:</strong>
            <p>{aiResponse}</p>
          </div>
        )}
      </div>

      {/* PRODUCTS */}
      <h2 style={{ textAlign: "center" }}>
        {search ? `Results for "${search}"` : "Our Collection"}
      </h2>

      {filteredProducts.length === 0 ? (
        <h3 style={{ textAlign: "center" }}>No products found</h3>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            padding: "20px",
          }}
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #eee",
                padding: "15px",
                textAlign: "center",
                borderRadius: "10px",
                background: "#fff",
                transition: "0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.03)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              {/* CLICKABLE AREA */}
              <Link
                to={`/product/${product.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "220px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />

                <h3 style={{ marginTop: "10px" }}>{product.name}</h3>
                <p style={{ color: "#d4af37", fontWeight: "bold" }}>
                  ${product.price}
                </p>
              </Link>

              {/* ACTION BUTTONS */}
              <div style={{ marginTop: "10px" }}>
                <button
                  style={{
                    padding: "8px 15px",
                    background: "black",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Add to Cart
                </button>

                <button
                  onClick={() => toggleWishlist(product)}
                  style={{
                    marginLeft: "10px",
                    fontSize: "18px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  {wishlist.find((p) => p.id === product.id)
                    ? "❤️"
                    : "🤍"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;