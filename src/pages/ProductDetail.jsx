import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();

  const products = [
    { id: 1, name: "iPhone 14", price: "₹70000", desc: "Apple mobile" },
    { id: 2, name: "Samsung Galaxy", price: "₹50000", desc: "Samsung mobile" },
    { id: 3, name: "HP Laptop", price: "₹80000", desc: "Powerful laptop" },
    { id: 4, name: "Headphones", price: "₹2000", desc: "Good sound" }
  ];

  const product = products.find(p => p.id === Number(id));

  return (
    <div style={{ padding: "20px" }}>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <p>{product.desc}</p>

      <button>Add to Cart</button>
    </div>
  );
}
import { useParams } from "react-router-dom";

function ProductDetail({ addToCart }) {
  const { id } = useParams();

  const products = [
    {
      id: 1,
      name: "iPhone 14",
      price: "₹70000",
      desc: "Apple mobile",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 2,
      name: "Samsung Galaxy",
      price: "₹50000",
      desc: "Samsung mobile",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 3,
      name: "HP Laptop",
      price: "₹80000",
      desc: "Powerful laptop",
      image: "https://via.placeholder.com/200"
    }
  ];

  const product = products.find(p => p.id === Number(id));

  return (
    <div style={{
      display: "flex",
      padding: "20px",
      gap: "40px"
    }}>

      {/* Image */}
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "250px" }}
      />

      {/* Details */}
      <div>
        <h2>{product.name}</h2>
        <p style={{ fontSize: "20px", color: "green" }}>
          {product.price}
        </p>
        <p>{product.desc}</p>

        <button
          onClick={() => addToCart(product)}
          style={{
            padding: "10px 20px",
            background: "#ff9f00",
            border: "none",
            marginRight: "10px"
          }}
        >
          Add to Cart
        </button>

        <button
          style={{
            padding: "10px 20px",
            background: "#fb641b",
            border: "none",
            color: "white"
          }}
        >
          Buy Now
        </button>
      </div>

    </div>
  );
}

export default ProductDetail;

export default ProductDetail;