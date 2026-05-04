import { useState } from "react";

function Home({ addToCart, search }) {

  const [category, setCategory] = useState("All");

  const products = [
    { id: 1, name: "iPhone 14", price: "₹70000", category: "Mobile" },
    { id: 2, name: "Samsung Galaxy", price: "₹50000", category: "Mobile" },
    { id: 3, name: "HP Laptop", price: "₹80000", category: "Laptop" },
    { id: 4, name: "Headphones", price: "₹2000", category: "Accessories" }
  ];

  // 🔍 Search filter
  const searchFiltered = products.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // 🔥 Category filter
  const finalProducts = searchFiltered.filter(item =>
    category === "All" ? true : item.category === category
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products</h2>

      {/* 🔥 Category Buttons */}
      <div style={{ marginBottom: "15px" }}>
        <button onClick={() => setCategory("All")}>All</button>
        <button onClick={() => setCategory("Mobile")}>Mobile</button>
        <button onClick={() => setCategory("Laptop")}>Laptop</button>
        <button onClick={() => setCategory("Accessories")}>Accessories</button>
      </div>

      {/* Products */}
      {finalProducts.map(item => (
        <div key={item.id}>
          <h4>{item.name}</h4>
          <p>{item.price}</p>

          <button onClick={() => addToCart(item)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;