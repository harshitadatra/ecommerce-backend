const Product = require("../models/product.model");

const getAllProductsHandler = async (req, res) => {
  try {
    let products = [];
    products = Product.find({});
    return res.status(200).json({ products });
  } catch (e) {
    return res.status(500).json({
      message: "Could not get the products.Please try again later",
    });
  }
};

const getProductHandler = async (req, res) => {
  try {
    let productId = req.params;
    console.log("product id", productId);
    const product = await Product.findById(productId);
    return res.status(200).json({ product });
  } catch (e) {
    res
      .status(400)
      .json({ message: "could not get the product with given id" });
  }
};

const postProductHandler = async (req, res) => {
  try {
    const { data } = req.body;
    await Product.insertMany(data);
    const products = await Product.find({});
    return res.status(201).json({ products });
  } catch (e) {
    res
      .status(500)
      .json({ message: "Could not add products.Please try again later" });
  }
};

moduule.exports = {
  getAllProductsHandler,
  getProductHandler,
  postProductHandler,
};
