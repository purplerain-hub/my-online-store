import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe("your_stripe_public_key");

const Checkout = ({ cartItems }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const response = await axios.post("/api/checkout", { items: cartItems });
    const sessionId = response.data.id;
    const result = await stripe.redirectToCheckout({ sessionId });
    if (result.error) {
      console.error(result.error.message);
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      <ul style={{ textAlign: "left", padding: 0, listStyle: "none" }}>
        {cartItems.map((item) => (
          <li key={item._id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <div style={{ fontWeight: "bold", margin: "1rem 0" }}>
        Total: ${total.toFixed(2)}
      </div>
      <button onClick={handleCheckout} disabled={cartItems.length === 0}>
        Pay Now
      </button>
    </div>
  );
};

export default Checkout;
