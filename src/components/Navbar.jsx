import { Link } from "react-router-dom";

function Navbar({ cartCount, toggleDarkMode, darkMode }) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      background: darkMode ? "#222" : "#2874f0",
      padding: "10px",
      color: "white"
    }}>

      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        <h2>Flipkart</h2>
      </Link>

      <div>
        <button onClick={toggleDarkMode} style={{
          marginRight: "10px",
          padding: "5px"
        }}>
          {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
        </button>

        <Link to="/cart">
          <button>
            Cart ({cartCount})
          </button>
        </Link>
      </div>

    </div>
  );
}

export default Navbar;