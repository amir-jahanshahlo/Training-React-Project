import Product from "../components/Product";

function ProductPage({ onAddToCart }) {
  return (
    <div style={{ padding: "1rem" }}>
      <Product title="product" onAddToCart={onAddToCart} />
    </div>
  );
}

export default ProductPage;
