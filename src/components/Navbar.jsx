import { useState } from "react";

function Navbar() {
  const [search, setSearch] = useState("");

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "#2874f0",
      padding: "10px 20px",
      color: "white"
    }}>

      {/* Logo */}
      <h2 style={{ margin: 0 }}>Flipkart</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search for products"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "40%",
          padding: "8px",
          borderRadius: "2px",
          border: "none"
        }}
      />

      {/* Buttons */}
      <div>
        <button style={{
          padding: "8px 15px",
          marginRight: "10px",
          background: "white",
          color: "#2874f0",
          border: "none",
          cursor: "pointer"
        }}>
          Login
        </button>

        <button style={{
          padding: "8px 15px",
          background: "white",
          color: "#2874f0",
          border: "none",
          cursor: "pointer"
        }}>
          Cart
        </button>
      </div>

    </div>
  );
}

export default Navbar;