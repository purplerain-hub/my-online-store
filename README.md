---

# 🛒 My Online Store

A modern, full-stack e-commerce web application built with React (frontend), Node.js/Express (backend), and MongoDB.  
Features a responsive UI, shopping cart, Stripe checkout integration, and a clean codebase for easy customization.

---

## 🚀 Features

- **Responsive Design:** Looks great on desktop, tablet, and mobile.
- **Product Catalog:** Browse a grid of sample products (or connect to your own database).
- **Shopping Cart:** Add, remove, and view items in a slick sidebar cart.
- **Checkout:** Stripe integration for real payments (or demo mode for testing).
- **Modern UI:** Clean, creative, and easy to extend.



## 🗂️ Project Structure

```
my-online-store/
  backend/      # Node.js/Express API & MongoDB models
  frontend/     # React app (UI)
  README.md     # This file
```

---

## 🛠️ Getting Started

### 1. **Clone the Repository**

```bash
git clone https://github.com/yourusername/my-online-store.git
cd my-online-store
```

### 2. **Install Dependencies**

#### Backend
```bash
cd backend
npm install
```

#### Frontend
```bash
cd ../frontend
npm install
```

### 3. **Set Up Environment Variables**

#### Backend (`backend/.env`)
```env
MONGODB_URI=your_mongodb_connection_string
STRIPE_SECRET_KEY=your_stripe_secret_key
CLIENT_URL=http://localhost:3003
PORT=5002
```
- Get your MongoDB URI from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or use your local MongoDB.
- Get your Stripe secret key from [Stripe Dashboard](https://dashboard.stripe.com/apikeys).

#### Frontend (`frontend/src/components/Checkout.js`)
- Replace `"your_stripe_public_key"` with your real Stripe publishable key.

#### Frontend (`frontend/package.json`)
- Make sure the `"proxy"` field matches your backend port (e.g., `http://localhost:5002`).

### 4. **Run the App**

#### Start Backend
```bash
cd backend
npm start
```

#### Start Frontend (in a new terminal)
```bash
cd frontend
npm start
```

- Visit [http://localhost:3003](http://localhost:3003) in your browser.

---

## 🧪 Demo Products

- The app displays sample products by default for demo purposes.
- To use your own products, POST to `/api/products` or connect to your MongoDB.

---

## 🛒 Usage

- Browse products in a responsive grid.
- Add items to your cart.
- Open the cart sidebar to review or remove items.
- Click “Checkout” to pay (Stripe integration required for real payments).

---

## 🧑‍💻 Customization

- **Add/Change Products:** Edit `frontend/src/components/ProductList.js` (`sampleProducts` array) or connect to your backend.
- **Styling:** Edit `frontend/src/App.css` for colors, layout, and more.
- **Backend Logic:** Edit `backend/routes/Products.js` and `backend/routes/Checkout.js` for API logic.

---

## 🐞 Troubleshooting

- **500 Error on Checkout:** Make sure your Stripe keys are correct and your backend is running.
- **MongoDB Errors:** Check your `MONGODB_URI` in `.env`.
- **Port in Use:** Change the `PORT` in `.env` or stop other processes using the port.

---

## 📦 Deployment

- Deploy the frontend to [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), or similar.
- Deploy the backend to [Render](https://render.com/), [Railway](https://railway.app/), [Heroku](https://heroku.com/), or similar.
- Set environment variables on your deployment platform.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

[MIT](LICENSE)

---

## 🙏 Acknowledgements

- [React](https://reactjs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Stripe](https://stripe.com/)
- [Unsplash](https://unsplash.com/) for sample product images

---

**Happy coding!**  
_If you use this template, a star on GitHub is appreciated!_

---
