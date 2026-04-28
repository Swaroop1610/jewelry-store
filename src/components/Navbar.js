import React, { useState } from "react";
import {
  FaSearch,
  FaCamera,
  FaMicrophone,
  FaHeart,
  FaUser,
  FaShoppingCart,
  FaGem,
  FaHome,
} from "react-icons/fa";

const Navbar = ({ search, setSearch }) =>
   {
  const [listening, setListening] = useState(false);

  // 🎤 Voice Search
  const handleVoiceSearch = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Voice not supported");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.start();
    setListening(true);

    recognition.onresult = (event) => {
      setSearch(event.results[0][0].transcript); // ✅ FIXED
      setListening(false);
    };

    recognition.onerror = () => setListening(false);
  };

  // 📷 Image Upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      alert("Image uploaded (connect backend)");
    }
  };

  return (
    <div>
      <div style={styles.navbar}>
        <h2 style={styles.logo}>Sree DhanaLakshmi Jewelry</h2>

        {/* SEARCH */}
        <div style={styles.searchContainer}>
          <FaSearch style={styles.icon} />

          <input
            type="text"
            placeholder="Search jewelry..."
            value={search} // ✅ FIXED
            onChange={(e) => setSearch(e.target.value)} // ✅ FIXED
            style={styles.input}
          />

          <label style={styles.icon}>
            <FaCamera />
            <input type="file" hidden onChange={handleImageUpload} />
          </label>

          <FaMicrophone
            style={{
              ...styles.icon,
              color: listening ? "red" : "black",
            }}
            onClick={handleVoiceSearch}
          />
        </div>

        <div style={styles.rightIcons}>
          <FaHeart />
          <FaUser />
          <FaShoppingCart />
        </div>
      </div>

      {/* MENU */}
      <div style={styles.menu}>
        <span><FaHome /> Home</span>
        <span><FaGem /> Gold</span>
        <span>💎 Diamond</span>
        <span>💍 Rings</span>
        <span>📿 Earrings</span>
        <span>🎁 Gifting</span>
        <span>📞 Contact</span>
        <span>ℹ️ About</span>
      </div>
    </div>
  );
};

const styles = {
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px 40px",
    borderBottom: "#f0e68c",
  },
  logo: {
    color: "#8B0000",
    fontWeight: "bold",
  },
  searchContainer: {
    display: "flex",
    alignItems: "center",
    width: "50%",
    border: "1px solid #ddd",
    borderRadius: "30px",
    padding: "10px 15px",
    background: "#f9f9f9",
  },
  input: {
    flex: 1,
    border: "none",
    outline: "none",
    background: "transparent",
  },
  icon: {
    margin: "0 10px",
    cursor: "pointer",
  },
  rightIcons: {
    display: "flex",
    gap: "20px",
  },
  menu: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    padding: "10px",
    background: "#ffd700",
  },
};

export default Navbar;