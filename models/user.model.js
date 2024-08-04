const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String,
});

const User = mongoose.model("user", userSchema);
module.exports = {
  User,
};
