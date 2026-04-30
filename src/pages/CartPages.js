import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { processPayment } from "../services/paymentService"; // ✅ NEW

const CartPage = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  // 💳 Handle Payment
  const handleCheckout = async () => {
    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }

    const result = await processPayment(cart);

    if (result.success) {
      navigate("/success", {
        state: { orderId: result.orderId }
      });
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty 🛒</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} style={{ marginBottom: "15px" }}>
              <h3>{item.name}</h3>
              <p>Qty: {item.qty}</p>
              <p>${item.price}</p>

              <button onClick={() => removeFromCart(item.id)}>
                Remove ❌
              </button>
            </div>
          ))}

          <h2>Total: ${total}</h2>

          {/* 💳 Checkout Button */}
          <button
            onClick={handleCheckout}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "black",
              color: "white",
              cursor: "pointer"
            }}
          >
            Proceed to Payment 💳
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;