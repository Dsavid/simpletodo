const User = require("../models/User");
// @desc register user
// @route /api/v1/auth/register
// @access PUBLIC
exports.registerUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    sendCookie(user, 200, res);
  } catch (err) {
    next(err);
  }
};
// @desc login user
// @route /api/v1/auth/login
// @access PRIVATE
exports.loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email }).select("password");
    if (!user) {
      return res
        .status(404)
        .json({ success: false, msg: `cant find email ${email}` });
    }
    const correct = await user.comparePassword(password);
    if (!correct) {
      return res
        .status(401)
        .json({ success: false, msg: `incorrect password` });
    }
    sendCookie(user, 200, res);
  } catch (err) {
    next(err);
  }
};
const sendCookie = async (user, statusCode, res) => {
  const token = await user.getToken();
  const match = {
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    httpOnly: false,
  };
  res
    .status(statusCode)
    .cookie("token", token, match)
    .json({ success: true, token });
};
// @desc get current loggin user
// @route GET /api/v1/auth/me
// @access PRIVATE
exports.getMe = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    res.status(200).json({ success: true, user });
  } catch (err) {
    next(err);
  }
};
