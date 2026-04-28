import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { CartProvider, useCart } from "./context/CartContext";


// 🔥 Wrapper to inject cart into ProductDetail
const ProductDetailWrapper = () => {
  const { addToCart } = useCart();
  return <ProductDetail addToCart={addToCart} />;
};

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetailWrapper />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;