const express = require("express");
const router = express.Router();
const {
  getAllCategoriesHandler,
  postCategoryHandler,
  getCategoryHandler,
} = require("../controllers/category.controller");

router.get(getAllCategoriesHandler).post(postCategoryHandler);
router.post("/:categoryId", getCategoryHandler);

module.exports = router;
