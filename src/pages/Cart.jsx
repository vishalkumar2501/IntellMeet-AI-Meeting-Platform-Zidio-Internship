function Cart({ cart, removeFromCart }) {

  const total = cart.reduce((sum, item) => {
    return sum + Number(item.price.replace("₹", "").replace(",", ""));
  }, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} style={{ border: "1px solid #ddd", margin: "10px", padding: "10px" }}>
              <h4>{item.name}</h4>
              <p>{item.price}</p>

              <button onClick={() => removeFromCart(index)}>
                Remove
              </button>
            </div>
          ))}

          <h3>Total: ₹{total}</h3>
        </>
      )}
    </div>
  );
}

export default Cart;