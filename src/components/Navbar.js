import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Sree Dhanalakshmi Jewelry</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/cart" style={{ marginLeft: "20px" }}>Cart</Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    background: "#fff"
  },
  logo: {
    margin: 0
  }
};

export default Navbar;