import { useState } from "react";

function Product({ title, onAddToCart }) {
  const [quantity, setQuantity] = useState(0);

  const increase = () => {
    onAddToCart(1);
    setQuantity((prev) => prev + 1);
  };

  const decrease = () => {
    if (quantity > 0) {
      onAddToCart(-1);
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "1rem",
        marginBottom: "1rem",
      }}
    >
      <h2>{title}</h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "10px",
        }}
      >
        <button onClick={decrease}>–</button>
        <span>{quantity}</span>
        <button onClick={increase}>+</button>
      </div>
    </div>
  );
}

export default Product;
