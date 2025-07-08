import { useState } from "react";
import Header from "./components/Header";
import ProductPage from "./Pages/ProductPage";

//import './App.css'

function App() {
  const [cartCount, setCartCount] = useState(0);
  const handleAddToCart = (qty = 1) => {
    setCartCount((prev) => prev + qty); // in case you're using quantity
  };

  return (
    <>
      <Header cartCount={cartCount} />
      <ProductPage onAddToCart={handleAddToCart} />
    </>
  );
}

export default App;
