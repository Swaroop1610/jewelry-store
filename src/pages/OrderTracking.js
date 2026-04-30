import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const OrderTracking = () => {
  const location = useLocation();
  const orderId = location.state?.orderId || "N/A";

  const [status, setStatus] = useState("Processing");

  useEffect(() => {
    const timer1 = setTimeout(() => setStatus("Shipped 🚚"), 3000);
    const timer2 = setTimeout(() => setStatus("Delivered ✅"), 6000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h2>Order Tracking</h2>
      <p>Order ID: {orderId}</p>

      <h3>Status: {status}</h3>

      <div style={{ marginTop: "20px" }}>
        <p>📦 Processing</p>
        <p>🚚 Shipped</p>
        <p>✅ Delivered</p>
      </div>
    </div>
  );
};

export default OrderTracking;