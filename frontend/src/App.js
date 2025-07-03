import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item._id !== id));
  };

  const checkout = () => {
    setShowCheckout(true);
  };

  const backToShop = () => {
    setShowCheckout(false);
  };

  return (
    <div className="App">
      <h1>My Online Store</h1>
      {!showCheckout ? (
        <>
          <ProductList addToCart={addToCart} />
          <Cart
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            checkout={checkout}
          />
        </>
      ) : (
        <>
          <Checkout cartItems={cartItems} />
          <button onClick={backToShop}>Back to Shop</button>
        </>
      )}
    </div>
  );
}

export default App;
