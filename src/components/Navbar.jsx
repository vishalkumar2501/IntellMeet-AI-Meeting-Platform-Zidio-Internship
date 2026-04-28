function Navbar({ cartCount }) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      background: "#2874f0",
      padding: "10px 20px",
      color: "white"
    }}>
      <h2>Flipkart</h2>

      <div>
        <button style={{
          marginRight: "10px",
          padding: "5px 10px"
        }}>
          Login
        </button>

        <button style={{
          padding: "5px 10px"
        }}>
          Cart ({cartCount})
        </button>
      </div>
    </div>
  );
}

export default Navbar;