import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe("your_stripe_public_key");

const Checkout = ({ cartItems }) => {
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
      <button onClick={handleCheckout}>Pay Now</button>
    </div>
  );
};

export default Checkout;
