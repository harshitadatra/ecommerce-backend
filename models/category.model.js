const mongoose = require("mongoose");
const Schema = mongoose.Schema();
const catergorySchema = Schema({
  id: String,
  title: String,
  imageUrl: String,
});

module.exports = mongoose.model("Category", catergorySchema);
