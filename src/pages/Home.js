import React, { useEffect, useState } from "react";
import { generateContent } from "../gemini";
import { Link } from "react-router-dom";


const Home = ({ search = "" }) => {
  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // LOGIN STATE
  const [showLogin, setShowLogin] = useState(false);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("phone");

  // AI STATE
  const [aiResponse, setAiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔥 FALLBACK PRODUCTS (used if backend empty)
  const fallbackProducts = [
    {
      id: 1,
      name: "Gold Necklace",
      price: 299,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400",
    },
    {
      id: 2,
      name: "Diamond Ring",
      price: 499,
      image: "https://images.unsplash.com/photo-1589987607627-ec7a5f5d88c7?w=400",
    },
    {
      id: 3,
      name: "Silver Earrings",
      price: 129,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400",
    },
    {
      id: 4,
      name: "Bridal Set",
      price: 899,
      image: "https://images.unsplash.com/photo-1620656798579-1984d6b9b6a3?w=400",
    },
    {
      id: 5,
      name: "Gold Bracelet",
      price: 199,
      image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400",
    }
  ];

  // FETCH PRODUCTS FROM BACKEND
  useEffect(() => {
    fetch("http://127.0.0.1:5000/products")
      .then((res) => res.json())
      .then((data) => {
        if (data.length === 0) {
          setProducts(fallbackProducts); // fallback
        } else {
          setProducts(data);
        }
      })
      .catch(() => setProducts(fallbackProducts));
  }, []);

  // AI
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

  // WISHLIST
  const toggleWishlist = (product) => {
    if (wishlist.find((p) => p.id === product.id)) {
      setWishlist(wishlist.filter((p) => p.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  // FILTER
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
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <div style={{ textAlign: "center" }}>
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
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "20px",
        padding: "20px"
      }}>
        {filteredProducts.map((product) => (
          <div key={product.id} style={{
            border: "1px solid #eee",
            padding: "10px",
            textAlign: "center",
            borderRadius: "10px"
          }}>
            <Link to={`/product/${product.id}`}>
              <img src={product.image} width="150" />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </Link>

            <button>Add to Cart</button>

            <button onClick={() => toggleWishlist(product)}>
              {wishlist.find((p) => p.id === product.id) ? "❤️" : "🤍"}
            </button>
          </div>
        ))}
      </div>

      {/* LOGIN MODAL */}
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
                      setStep("phone");
                      setPhone("");
                      setOtp("");
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