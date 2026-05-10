import { Link } from "react-router-dom";

function Navbar({ cartCount, toggleDarkMode, darkMode }) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      background: darkMode ? "#222" : "#2874f0",
      padding: "10px",
      color: "white",
      gap: "10px"
    }}>

      {/* Logo */}
      <Link
        to="/"
        style={{
          color: "white",
          textDecoration: "none"
        }}
      >
        <h2 style={{ margin: 0 }}>Flipkart</h2>
      </Link>

      {/* Search */}
      <input
        type="text"
        placeholder="Search..."
        style={{
          flex: "1",
          minWidth: "200px",
          padding: "8px",
          border: "none",
          borderRadius: "4px"
        }}
      />
      <input
  type="text"
  placeholder="Search products..."
  onChange={(e) => setSearch(e.target.value)}
  style={{
    flex: "1",
    minWidth: "200px",
    padding: "8px",
    border: "none",
    borderRadius: "4px"
  }}
/>

      {/* Buttons */}
      <div style={{
        display: "flex",
        gap: "10px"
      }}>

        <button
          onClick={toggleDarkMode}
          style={{
            padding: "8px",
            border: "none",
            cursor: "pointer"
          }}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <Link to="/cart">
          <button style={{
            padding: "8px",
            border: "none",
            cursor: "pointer"
          }}>
            Cart ({cartCount})
          </button>
        </Link>

      </div>

    </div>
  );
}

export default Navbar;