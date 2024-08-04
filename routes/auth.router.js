const express = require("express");
const router = express.Router();

const { signupHandler } = require("../controllers/auth.controller");

router.post("/signup", signupHandler);

module.exports = router;
