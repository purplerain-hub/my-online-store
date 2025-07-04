const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  total: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);
