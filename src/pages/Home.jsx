function Home() {
  const products = [
    {
      id: 1,
      name: "iPhone 14",
      price: "₹70,000",
      image: "https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg"
    },
    {
      id: 2,
      name: "Samsung Galaxy S21",
      price: "₹50,000",
      image: "https://m.media-amazon.com/images/I/71z2dhY5lFL._SX679_.jpg"
    },
    {
      id: 3,
      name: "HP Laptop",
      price: "₹80,000",
      image: "https://m.media-amazon.com/images/I/71TPda7cwUL._SX679_.jpg"
    },
    {
      id: 4,
      name: "Boat Headphones",
      price: "₹2,000",
      image: "https://m.media-amazon.com/images/I/61u1VALn6JL._SX679_.jpg"
    }
  ];

  return (
    <div style={{ padding: "20px", background: "#f1f3f6" }}>
      <h2>Products</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px"
      }}>
        {products.map((item) => (
          <div key={item.id}
            style={{
              background: "white",
              padding: "15px",
              textAlign: "center",
              borderRadius: "5px",
              transition: "0.3s",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "100%", height: "150px", objectFit: "contain" }}
            />

            <h4>{item.name}</h4>
            <p style={{ color: "green", fontWeight: "bold" }}>
              {item.price}
            </p>

            <button style={{
              padding: "8px 12px",
              background: "#ff9f00",
              border: "none",
              marginRight: "5px"
            }}>
              Add to Cart
            </button>

            <button style={{
              padding: "8px 12px",
              background: "#fb641b",
              border: "none",
              color: "white"
            }}>
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;