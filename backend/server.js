require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

const app = express();

// ... existing middleware and routes ...

// Serve index.html at the root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// ... existing code to start the server ...

dotenv.config();

const PORT = process.env.PORT || 5002;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Routes
app.use("/api/products", require("./routes/Products"));
app.use("/api/checkout", require("./routes/checkout"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
