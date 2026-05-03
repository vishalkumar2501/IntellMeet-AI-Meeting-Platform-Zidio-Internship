function Navbar({ cartCount, setSearch }) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      background: "#2874f0",
      padding: "10px",
      color: "white"
    }}>

      <h2>Flipkart</h2>

      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "5px", width: "40%" }}
      />

      <button>
        Cart ({cartCount})
      </button>
    </div>
  );
}

export default Navbar;