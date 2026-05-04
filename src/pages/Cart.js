import PageLayout from "../components/PageLayout";

const Cart = ({ cart }) => {
  return (
    <PageLayout>
      <h2>Cart 🛒</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
          </div>
        ))
      )}
    </PageLayout>
  );
};

export default Cart;