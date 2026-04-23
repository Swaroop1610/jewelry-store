import React from "react";

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: "#b8902f",
      color: "white",
      fontFamily: "Poppins, sans-serif",
    },
    top: {
      textAlign: "center",
      padding: "30px",
      borderBottom: "1px solid rgba(255,255,255,0.3)",
    },
    button: {
      padding: "12px 30px",
      border: "2px solid white",
      background: "transparent",
      color: "white",
      borderRadius: "30px",
      cursor: "pointer",
      fontWeight: "bold",
    },
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "30px",
      padding: "50px",
    },
    col: {},
    heading: {
      marginBottom: "15px",
      fontSize: "16px",
      fontWeight: "600",
    },
    list: {
      listStyle: "none",
      padding: 0,
    },
    listItem: {
      marginBottom: "10px",
      cursor: "pointer",
      opacity: 0.9,
    },
    logo: {
      fontSize: "22px",
      marginBottom: "15px",
      fontWeight: "bold",
    },
    bottom: {
      textAlign: "center",
      padding: "20px",
      borderTop: "1px solid rgba(255,255,255,0.3)",
    },
    payments: {
      marginBottom: "10px",
    },
    paymentImg: {
      margin: "0 10px",
      height: "30px",
    },
  };

  return (
    <footer style={styles.footer}>
      {/* TOP */}
      <div style={styles.top}>
        <button style={styles.button}>LOCATE STORE</button>
      </div>

      {/* MAIN */}
      <div style={styles.container}>
        {/* BRAND */}
        <div style={styles.col}>
          <h2 style={styles.logo}>Sree DhanaLakshmi Jewelry</h2>
          <p>
            Kankipadu<br />
            Vijayawada<br />
            521151
          </p>
          <p>📧 ecomsupport@sdjewelry.com</p>
          <p>📧 appsupport@sdjewelry.com</p>
          <p>📞 9948565729</p>
        </div>

        {/* POLICIES */}
        <div style={styles.col}>
          <h4 style={styles.heading}>Policies</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>Privacy Policy</li>
            <li style={styles.listItem}>Terms & Conditions</li>
            <li style={styles.listItem}>Shipping Policy</li>
            <li style={styles.listItem}>Return Policy</li>
            <li style={styles.listItem}>Cancellation Policy</li>
          </ul>
        </div>

        {/* CUSTOMER */}
        <div style={styles.col}>
          <h4 style={styles.heading}>Customer Service</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>Contact Us</li>
            <li style={styles.listItem}>FAQs</li>
            <li style={styles.listItem}>Return Request</li>
            <li style={styles.listItem}>Payment Options</li>
            <li style={styles.listItem}>Order Tracking</li>
          </ul>
        </div>

        {/* ABOUT */}
        <div style={styles.col}>
          <h4 style={styles.heading}>About</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>About Us</li>
            <li style={styles.listItem}>Careers</li>
            <li style={styles.listItem}>Store Locator</li>
            <li style={styles.listItem}>Investor Info</li>
            <li style={styles.listItem}>Testimonials</li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div style={styles.col}>
          <h4 style={styles.heading}>Quick Links</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>Blog</li>
            <li style={styles.listItem}>CSR</li>
            <li style={styles.listItem}>News & Events</li>
            <li style={styles.listItem}>Sitemap</li>
            <li style={styles.listItem}>Videos</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM */}
      <div style={styles.bottom}>
        <div style={styles.payments}>
          <img
            style={styles.paymentImg}
            src="https://img.icons8.com/color/48/visa.png"
            alt="visa"
          />
          <img
            style={styles.paymentImg}
            src="https://img.icons8.com/color/48/mastercard.png"
            alt="mc"
          />
          <img
            style={styles.paymentImg}
            src="https://img.icons8.com/color/48/rupay.png"
            alt="rupay"
          />
        </div>
        <p>© 2026 Sree DhanaLakshmi Jewelry Pvt Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;