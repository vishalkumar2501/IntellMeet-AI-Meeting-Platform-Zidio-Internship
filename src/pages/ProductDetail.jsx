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

export default ProductDetail;