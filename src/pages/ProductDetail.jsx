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
<div
  key={item.id}
  style={{
    background: "white",
    padding: "15px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    transition: "0.3s"
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

  {/* ⭐ Rating */}
  <p>
    ⭐ {item.rating.rate}
    {" "} ({item.rating.count} reviews)
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