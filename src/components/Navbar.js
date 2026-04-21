import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
<h1 style={{ color: "#D4AF37" }}>
  Sree Dhanalakshmi Jewelry
</h1>
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