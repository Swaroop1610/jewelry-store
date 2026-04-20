import { useCart } from "../context/CartContext";


const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div>
      <h1>Cart</h1>

      {cart.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Qty: {item.qty}</p>
          <p>${item.price}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}

      <h2>Total: ${total}</h2>
    </div>
  );
};

export default CartPage;