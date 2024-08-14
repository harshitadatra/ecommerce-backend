const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const productSchema = Schema({
  id: String,
  title: String,
  imageUrl: String,
  rating: String,
  totalRating: Number,
  price: String,
  categoryName: String,
  isOutOfStock: Boolean,
  offerPercentage: Number,
  item: String,
  isBestSeller: String,
  priceCategory: String,
});

module.exports = mongoose.model("Product", productSchema);
