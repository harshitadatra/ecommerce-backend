const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 15;
const { User } = require("../models/user.model");
const { JWT_SECRET } = require("../config");

const signupHandler = async (req, res) => {
  console.log("insidie singup ihafhdsjhf");
  try {
    const data = req.body;
    console.log("data emai", data.email);
    const existingUser = await User.findOne({ email: data.email });
    console.log("user", User);
    console.log("exosting user", existingUser);
    if (existingUser) {
      return res.status(411).json({ message: "user already exists" });
    }

    let encryptedPassword;

    try {
      encryptedPassword = await bcrypt.hash(data.password, saltRounds);
      console.log("encrypted passord", encryptedPassword);
    } catch (e) {
      return res
        .status(500)
        .json({ message: "Sign up failed.Please try again later!" });
    }

    const createdUser = new User({
      ...data,
      password: encryptedPassword,
    });
    try {
      await createdUser.save();
    } catch (e) {
      return res
        .status(500)
        .json({ message: "Sign up failed.Please try again later!" });
    }

    const token = jwt.sign(
      { userId: createdUser._id, email: createdUser.email },
      JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.status(201).json({
      message: "Sign Up successfull",
      user: {
        token,
        id: createdUser._id,
        email: createdUser.email,
      },
    });
  } catch (e) {
    return res
      .status(500)
      .json({ message: "Sign up failed.Please try again later!" });
  }
};
module.exports = { signupHandler };
