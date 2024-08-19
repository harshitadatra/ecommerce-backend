const jwt = require("jsonwebtoken");

const verifyAuth = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json("Authorization eroor.Token is not valid");
  }

  try {
    const verifiedUser = jwt.verify(token, "dfdf");
    if (verifiedUser) {
      req.userId = verifiedUser.userId;
      next();
      return;
    }
  } catch (e) {
    return res.status(401).json({
      message: "Authorization eroor.User not found",
    });
  }
};

module.exports = verifyAuth;
