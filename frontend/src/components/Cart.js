import React from "react";

const Cart = ({ cartItems, removeFromCart, checkout }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item._id}>
              <span className="item-info">
                {item.name} - ${item.price}
              </span>
              <button
                className="item-remove"
                onClick={() => removeFromCart(item._id)}
              >
                &times;
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="cart-footer">
        <div className="total">Total: ${total.toFixed(2)}</div>
        <button onClick={checkout} disabled={cartItems.length === 0}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
