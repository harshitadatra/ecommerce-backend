const express = require("express");
const router = express.Router();

const {
  signupHandler,
  loginHandler,
} = require("../controllers/auth.controller");

router.post("/signup", signupHandler);
router.post("/login", loginHandler);

module.exports = router;
