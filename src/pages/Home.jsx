function Home() {
  const products = [
    {
      id: 1,
      name: "iPhone 14",
      price: "₹70,000",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      name: "Samsung Galaxy",
      price: "₹50,000",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 3,
      name: "Laptop",
      price: "₹80,000",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 4,
      name: "Headphones",
      price: "₹2,000",
      image: "https://via.placeholder.com/150"
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products</h2>

      {/* Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px"
      }}>
        {products.map((item) => (
          <div key={item.id} style={{
            border: "1px solid #ddd",
            padding: "10px",
            textAlign: "center"
          }}>
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p>{item.price}</p>

            <button style={{
              padding: "5px 10px",
              background: "#2874f0",
              color: "white",
              border: "none"
            }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;