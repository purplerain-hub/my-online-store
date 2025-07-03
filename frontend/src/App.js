import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
    setCartOpen(true);
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item._id !== id));
  };

  const checkout = () => {
    setShowCheckout(true);
    setCartOpen(false);
  };

  const closeCheckout = () => {
    setShowCheckout(false);
  };

  return (
    <div className="App">
      <header className="header">
        <a href="#" className="logo">
          My Online Store
        </a>
        <button className="cart-btn" onClick={() => setCartOpen(true)}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          {cartItems.length > 0 && (
            <span className="cart-count">{cartItems.length}</span>
          )}
        </button>
      </header>
      <main className="main-content">
        <ProductList addToCart={addToCart} />
      </main>
      {/* Cart Drawer */}
      <div className={`cart-drawer${cartOpen ? " open" : ""}`}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="cart-close" onClick={() => setCartOpen(false)}>
            &times;
          </button>
        </div>
        <div className="cart-items">
          <Cart
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            checkout={checkout}
          />
        </div>
      </div>
      {/* Checkout Modal */}
      {showCheckout && (
        <div className="checkout-modal">
          <div className="checkout-content">
            <Checkout cartItems={cartItems} />
            <button onClick={closeCheckout}>Back to Shop</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
