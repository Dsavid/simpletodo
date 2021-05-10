const User = require("../models/User");
const jwt = require("jsonwebtoken");
exports.protect = async (req, res, next) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
    if (!token) {
      return res
        .status(401)
        .json({ success: false, msg: "authorization error" });
    }
    const decoded = await jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = await User.findById(decoded.id);
    next();
  } catch (err) {
    next(err);
  }
};
