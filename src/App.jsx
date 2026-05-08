import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [cart, setCart] = useState([]);

  // 🌙 Dark mode state
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

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

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div style={{
      background: darkMode ? "#121212" : "#f1f3f6",
      color: darkMode ? "white" : "black",
      minHeight: "100vh"
    }}>
      <BrowserRouter>

        <Navbar
          cartCount={cart.length}
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
        />

        <Routes>
          <Route path="/" element={
            <Home addToCart={addToCart} />
          } />

          <Route path="/cart" element={
            <Cart cart={cart} removeFromCart={removeFromCart} />
          } />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;