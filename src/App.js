import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPages";

import PaymentSuccess from "./pages/PaymentSuccess";
import OrderTracking from "./pages/OrderTracking"; // ✅ ONLY ONCE

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import WishlistPage from "./pages/WishlistPage";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import { CartProvider, useCart } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";


// 🔥 Wrapper to inject cart into ProductDetail
const ProductDetailWrapper = () => {
  const { addToCart } = useCart();
  return <ProductDetail addToCart={addToCart} />;
};

function App() {
  return (
    <CartProvider>
      <WishlistProvider> {/* ✅ Wrap wishlist */}
        <BrowserRouter>

          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetailWrapper />} />
            <Route path="/cart" element={<CartPage />} />

            {/* ❤️ Wishlist */}
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/success" element={<PaymentSuccess />} />

            {/* 📦 Order Tracking */}
            <Route path="/order" element={<OrderTracking />} />

            {/* 💳 Payment Success (after checkout) */}
            <Route
              path="/success"
              element={<h2 style={{ textAlign: "center" }}>Payment Successful 🎉</h2>}
            />
          </Routes>

          <Footer />

        </BrowserRouter>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;