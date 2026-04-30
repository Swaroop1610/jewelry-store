import { useLocation, useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const orderId = location.state?.orderId || "N/A";

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h2>Payment Successful 🎉</h2>
      <p>Your Order ID: {orderId}</p>

      <button onClick={() => navigate("/order", { state: { orderId } })}>
        Track Order 📦
      </button>
    </div>
  );
};

export default PaymentSuccess;