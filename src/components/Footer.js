import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div style={{ background: "#800000", color: "white", padding: "40px 30px" }}>
      
      {/* MAIN ROW */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "40px"
      }}>

        {/* 🔥 LEFT SIDE - LEGACY */}
        <div style={{ minWidth: "200px" }}>
          <h1 style={{
  fontSize: "60px",
  fontFamily: "'Playfair Display', serif",
  color: "#000",
  marginBottom: "5px"
}}>
  26
</h1>

          <p style={{
            fontSize: "18px",
            letterSpacing: "2px"
          }}>
            YEARS OF LEGACY
          </p>

          <div style={{
            marginTop: "15px",
            display: "flex",
            gap: "12px",
            fontSize: "16px"
          }}>
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaTwitter />
            <FaYoutube />
            <FaPinterest />
          </div>
        </div>

        {/* 🔥 RIGHT SIDE - LINKS */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(150px, 1fr))",
          gap: "30px",
          flex: 1
        }}>

          <div>
            <h4>Sree DhanaLakshmi Jewelry</h4>
            <p>Kankipadu</p>
            <p>Vijayawada</p>
            <p>Krishna District</p>
            <p>📧 ecomsupport@sdjewelry.com</p>
            <p>📞 9948565729</p>
          </div>

          <div>
            <h4>Policies</h4>
            <p>Privacy Policy</p>
            <p>Terms</p>
            <p>Shipping</p>
            <p>Returns</p>
          </div>

          <div>
            <h4>Customer</h4>
            <p>Contact</p>
            <p>FAQs</p>
            <p>Tracking</p>
          </div>

          <div>
            <h4>About</h4>
            <p>About Us</p>
            <p>Careers</p>
            <p>Store Locator</p>
          </div>

        </div>
      </div>

      {/* BOTTOM */}
      <div style={{
        textAlign: "center",
        marginTop: "25px",
        fontSize: "13px"
      }}>
        © {new Date().getFullYear()} Sree DhanaLakshmi Jewelry
      </div>

    </div>
  );
};

export default Footer;