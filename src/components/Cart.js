import React from "react";

const Cart = ({ cartItems, removeFromCart, checkout }) => {
  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item._id}>
              {item.name} - {item.price}
              <button onClick={() => removeFromCart(item._id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={checkout}>Checkout</button>
    </div>
  );
};

export default Cart;
