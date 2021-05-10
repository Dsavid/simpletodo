const ErrorResponse = require("../utils/ErrorResponse");
const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;
  if (err.name == "ValidationError") {
    error.statusCode = 401;
  }
  res
    .status(error.statusCode || 500)
    .json({ success: false, msg: error.message });
  next();
};
module.exports = errorHandler;
