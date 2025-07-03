import React, { useEffect, useState } from "react";
import axios from "axios";

const placeholderImg = "https://via.placeholder.com/120x120?text=Product";

const sampleProducts = [
  {
    _id: "sample1",
    name: "Classic T-shirt",
    price: 19.99,
    description: "A comfortable cotton t-shirt.",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=120&q=80",
  },
  {
    _id: "sample2",
    name: "Running Sneakers",
    price: 49.99,
    description: "Lightweight sneakers for everyday use.",
    image:
      "https://images.unsplash.com/photo-1515548212235-dc6ffb8749b7?auto=format&fit=crop&w=120&q=80",
  },
  {
    _id: "sample3",
    name: "Stylish Backpack",
    price: 34.99,
    description: "A modern backpack for work or travel.",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=120&q=80",
  },
  {
    _id: "sample4",
    name: "Wireless Headphones",
    price: 89.99,
    description: "Noise-cancelling over-ear headphones.",
    image:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=120&q=80",
  },
  {
    _id: "sample5",
    name: "Smart Watch",
    price: 129.99,
    description: "Track your fitness and notifications on the go.",
    image:
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=120&q=80",
  },
  {
    _id: "sample6",
    name: "Eco Water Bottle",
    price: 14.99,
    description: "Reusable, BPA-free water bottle.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=120&q=80",
  },
  {
    _id: "sample7",
    name: "Bluetooth Speaker",
    price: 39.99,
    description: "Portable speaker with deep bass.",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=120&q=80",
  },
  {
    _id: "sample8",
    name: "Yoga Mat",
    price: 24.99,
    description: "Non-slip mat for yoga and workouts.",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80",
  },
  {
    _id: "sample9",
    name: "Desk Lamp",
    price: 27.99,
    description: "LED lamp with adjustable brightness.",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=120&q=80",
  },
  {
    _id: "sample10",
    name: "Travel Mug",
    price: 17.99,
    description: "Keeps drinks hot or cold for hours.",
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=120&q=80",
  },
  {
    _id: "sample11",
    name: "Gaming Mouse",
    price: 59.99,
    description: "High-precision wireless gaming mouse.",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=120&q=80",
  },
  {
    _id: "sample12",
    name: "Leather Wallet",
    price: 29.99,
    description: "Premium leather wallet with RFID protection.",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=120&q=80",
  },
  {
    _id: "sample13",
    name: "Sunglasses",
    price: 22.99,
    description: "UV400 protection stylish sunglasses.",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=120&q=80",
  },
  {
    _id: "sample14",
    name: "Fitness Tracker",
    price: 44.99,
    description: "Track your steps, heart rate, and sleep.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=120&q=80",
  },
  {
    _id: "sample15",
    name: "Portable Charger",
    price: 25.99,
    description: "10000mAh power bank for your devices.",
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=120&q=80",
  },
];

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        if (Array.isArray(response.data) && response.data.length > 0) {
          setProducts(response.data);
        } else {
          setProducts(sampleProducts);
        }
      } catch (err) {
        setProducts(sampleProducts);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product Catalog</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product._id} className="product">
            <img
              src={product.image || placeholderImg}
              alt={product.name}
              width={120}
              height={120}
            />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <p
              style={{
                color: "#666",
                fontSize: "0.95rem",
                marginBottom: "0.7rem",
              }}
            >
              {product.description}
            </p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
