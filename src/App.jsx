import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]);

  // ✅ Correct addToCart (with quantity)
  const addToCart = (product) => {
    const exist = cart.find(item => item.id === product.id);

    if (exist) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, qty: item.qty + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  // ✅ Remove by id (better)
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <BrowserRouter>
      <Navbar cartCount={cart.length} />

      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/cart" element={
          <Cart cart={cart} removeFromCart={removeFromCart} />
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;