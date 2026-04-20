import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div>
        <h3>Contact Us</h3>
        <p>Phone: +919948565729</p>
        <p>Location: Kankipadu,Vijayawada.</p>
      </div>
      <div>
        <h3>Follow Us</h3>
        <p>Instagram:-sree_dhanalakshmi_jewelry</p>
        <p>Facebook:-sree_dhanalakshmi_jewelry</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: "#0B0B0B",
    color: "#FFFFFF",
    padding: "50px",
    display: "flex",
    justifyContent: "space-around",
    marginTop: "60px"
  },
  heading: {
    color: "#D4AF37"
  }
};

export default Footer;