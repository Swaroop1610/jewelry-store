import React, { useEffect, useState } from "react";
import { generateContent } from "../gemini";
import { Link } from "react-router-dom";

const Home = ({ search = "" }) => {
  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const [showLogin, setShowLogin] = useState(false);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("phone");

  const [aiResponse, setAiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const fallbackProducts = [
    {
      id: 1,
      name: "Gold Necklace",
      price: 299,
      image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=800",
    },
    {
      id: 2,
      name: "Diamond Ring",
      price: 499,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800",
    },
    {
      id: 3,
      name: "Silver Earrings",
      price: 129,
      image: "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?q=80&w=800",
    },
    {
      id: 4,
      name: "Bridal Set",
      price: 899,
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=800",
    },
    {
      id: 5,
      name: "Gold Bracelet",
      price: 199,
      image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=800",
    }
  ];

  useEffect(() => {
    fetch("http://127.0.0.1:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.length ? data : fallbackProducts);
      })
      .catch(() => setProducts(fallbackProducts));
  }, []);

  const handleAiConsultation = async () => {
    setLoading(true);
    try {
      const result = await generateContent(
        "Best jewelry metal for daily wear?"
      );
      setAiResponse(result);
    } catch {
      setAiResponse("Error getting advice");
    }
    setLoading(false);
  };

  const toggleWishlist = (product) => {
    if (wishlist.find((p) => p.id === product.id)) {
      setWishlist(wishlist.filter((p) => p.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      {/* HERO */}
      <div
        style={{
          backgroundImage: "url('/hero-gold.png')",
          height: "60vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          position: "relative"
        }}
      >
        <div style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.5)"
        }} />

        <div style={{ textAlign: "center", zIndex: 2 }}>
          <h1 style={{ fontSize: "42px" }}>
            Timeless Beauty, Crafted for You
          </h1>
          <p>Discover handcrafted jewelry designed for every occasion</p>

          <button
            onClick={() => setShowLogin(true)}
            style={{
              marginTop: "20px",
              padding: "12px 25px",
              background: "#d4af37",
              border: "none",
              color: "white",
              borderRadius: "6px",
              cursor: "pointer"
            }}
          >
            Login
          </button>
        </div>
      </div>

      {/* AI */}
      <div style={{ textAlign: "center", margin: "30px" }}>
        <h2 style={{ color: "#d4af37" }}>AI Jewelry Consultant</h2>
        <button onClick={handleAiConsultation}>
          {loading ? "Loading..." : "Get Advice"}
        </button>
        {aiResponse && <p>{aiResponse}</p>}
      </div>

      {/* PRODUCTS */}
      <h2 style={{ textAlign: "center" }}>Our Collection</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "25px",
        padding: "20px"
      }}>
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">

            <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "black" }}>
              
              {/* 🔥 UPDATED IMAGE WRAPPER */}
              <div className="image-container">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
              </div>

              <div style={{ padding: "15px" }}>
                <h3>{product.name}</h3>
                <p>${product.price}</p>
              </div>
            </Link>

            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}>
              <button style={{
                background: "#d4af37",
                border: "none",
                color: "white",
                padding: "8px 12px",
                borderRadius: "6px"
              }}>
                Add to Cart
              </button>

              <button onClick={() => toggleWishlist(product)}>
                {wishlist.find((p) => p.id === product.id) ? "❤️" : "🤍"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* LOGIN MODAL (unchanged) */}
      {showLogin && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.6)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <div style={{
            background: "#fff",
            padding: "30px",
            borderRadius: "12px",
            width: "350px",
            position: "relative",
            textAlign: "center"
          }}>
            <button
              onClick={() => setShowLogin(false)}
              style={{
                position: "absolute",
                right: "10px",
                top: "10px",
                border: "none",
                background: "black",
                color: "white",
                borderRadius: "50%",
                width: "25px",
                height: "25px"
              }}
            >
              X
            </button>

            <h2>Login</h2>

            {step === "phone" ? (
              <>
                <input
                  placeholder="Enter phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={{ width: "100%", padding: "10px", margin: "10px 0" }}
                />

                <button
                  onClick={async () => {
                    await fetch("http://127.0.0.1:5000/send-otp", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ phone })
                    });
                    setStep("otp");
                  }}
                  style={{
                    width: "100%",
                    padding: "10px",
                    background: "#d4af37",
                    color: "white",
                    border: "none"
                  }}
                >
                  Send OTP
                </button>
              </>
            ) : (
              <>
                <input
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  style={{ width: "100%", padding: "10px", margin: "10px 0" }}
                />

                <button
                  onClick={async () => {
                    const res = await fetch("http://127.0.0.1:5000/verify-otp", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ phone, otp })
                    });

                    if (res.ok) {
                      alert("Login success 🎉");
                      setShowLogin(false);
                    } else {
                      alert("Invalid OTP");
                    }
                  }}
                  style={{
                    width: "100%",
                    padding: "10px",
                    background: "black",
                    color: "white",
                    border: "none"
                  }}
                >
                  Verify OTP
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;