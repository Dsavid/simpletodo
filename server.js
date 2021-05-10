const express = require("express");
const morgan = require("morgan");
const connectDB = require("./configs/connectDB");
const env = require("dotenv").config({ path: "./configs/configs.env" });
const auth = require("./routes/auth");
const errorHandler = require("./middleware/errorHandler");
const cookie = require("cookie-parser");
const lists = require("./routes/lists");
const path = require("path");
// connect DB
connectDB();
// create server
const app = express();
//middleware
app.use(cookie());
app.use(express.json());

app.use(morgan("dev"));
app.use("/api/v1/auth", auth);
app.use("/api/v1/lists", lists);
app.use(errorHandler);
if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}
// start server
const server = app.listen(
  process.env.PORT,
  console.log(`server is running on PORT ${process.env.PORT}`)
);
process.on("unhandledRejection", (err) => {
  console.log(`Error : ${err}`);
  server.close(() => process.end(1));
});
