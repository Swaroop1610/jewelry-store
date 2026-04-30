import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import {
  FaSearch,
  FaCamera,
  FaMicrophone,
  FaHeart,
  FaUser,
  FaShoppingCart,
  FaGem,
} from "react-icons/fa";

import { WishlistContext } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

const Navbar = ({ search, setSearch }) => {
  const [listening, setListening] = useState(false);

  const { wishlist } = useContext(WishlistContext);
  const { cart } = useCart();

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
      setSearch(event.results[0][0].transcript);
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
      {/* TOP NAVBAR */}
      <div style={styles.navbar}>
        <h2 style={styles.logo}>Sree DhanaLakshmi Jewelry</h2>

        {/* SEARCH */}
        <div style={styles.searchContainer}>
          <FaSearch style={styles.icon} />

          <input
            type="text"
            placeholder="Search jewelry..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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

        {/* RIGHT ICONS WITH BADGES */}
        <div style={styles.rightIcons}>
          
          {/* ❤️ Wishlist */}
          <Link to="/wishlist" style={styles.iconWrapper}>
            <FaHeart size={18} />
            {wishlist.length > 0 && (
              <span style={styles.badge}>{wishlist.length}</span>
            )}
          </Link>

          {/* 👤 User */}
          <FaUser size={18} />

          {/* 🛒 Cart */}
          <Link to="/cart" style={styles.iconWrapper}>
            <FaShoppingCart size={18} />
            {cart.length > 0 && (
              <span style={styles.badge}>{cart.length}</span>
            )}
          </Link>
        </div>
      </div>
      {/* MENU */}
      <div style={styles.menu}>
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
    borderBottom: "1px solid #ddd",
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
    alignItems: "center",
  },

  /* 🔥 NEW STYLES */
  iconWrapper: {
    position: "relative",
    display: "inline-block",
  },
  badge: {
    position: "absolute",
    top: "-8px",
    right: "-10px",
    background: "red",
    color: "white",
    borderRadius: "50%",
    padding: "3px 6px",
    fontSize: "12px",
    fontWeight: "bold",
  },

  quickLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    padding: "10px",
    fontWeight: "bold",
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