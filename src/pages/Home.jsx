import { useEffect, useState } from "react";
function Home({ addToCart, search })
const [selectedCategory, setSelectedCategory] = useState("all");

function Home({ addToCart }) {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔥 Fetch API
  useEffect(() => {

    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      });

  }, []);

  const filteredProducts = products.filter(item =>
  item.title.toLowerCase().includes(search.toLowerCase())
);

  // ⏳ Loading
  if (loading) {
    return <h2 style={{ padding: "20px" }}>Loading Products...</h2>;
  }

  return (
    <div style={{
      padding: "20px",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px"
    }}>

      {products.map(item => (

        <div
          key={item.id}
          style={{
            background: "white",
            padding: "15px",
            borderRadius: "10px",
            textAlign: "center",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)"
          }}
        >

          {/* Image */}
          <img
            src={item.image}
            alt={item.title}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "contain"
            }}
          />

          {/* Title */}
          <h4>
            {item.title.slice(0, 40)}...
          </h4>

          {/* Price */}
          <p style={{
            color: "green",
            fontWeight: "bold"
          }}>
            ₹ {Math.round(item.price * 80)}
          </p>

          {/* Button */}
          <button
            onClick={() => addToCart(item)}
            style={{
              padding: "10px",
              background: "#ff9f00",
              border: "none",
              cursor: "pointer"
            }}
          >
            Add to Cart
          </button>

        </div>
      ))}

    </div>
  );
}

export default Home;