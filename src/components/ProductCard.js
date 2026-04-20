import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { addToCart, addToWishlist } = useCart();
  const navigate = useNavigate();

  return (
    <div style={styles.card}>
      <img
        src={product.image}
        alt={product.name}
        style={styles.image}
        onClick={() => navigate(`/product/${product.id}`)}
      />
      <h3>{product.name}</h3>
      <p>${product.price}</p>

      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <button onClick={() => addToWishlist(product)}>❤️</button>
    </div>
  );
};

const styles = {
  card: { border: "1px solid #ddd", padding: 10, width: 200 },
  image: { width: "100%", cursor: "pointer" }
};

export default ProductCard;