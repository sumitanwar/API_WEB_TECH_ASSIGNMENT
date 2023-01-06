const { application } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const customerRouter = require("./src/Routes/customerRouets/customerRoute");
const orderRouter = require("./src/Routes/orderRoutes/orderRoute");
const productRouter = require("./src/Routes/productRoutes/productRoute");

const app = express();
const port = 3000;
mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://localhost/api_web_tech_assignment")
  .then(() => console.log("Connected to DB!"));
app.use(express.json());
app.use(bodyparser.json());
app.use("/", customerRouter);
app.use("/", orderRouter);
app.use("/", productRouter);
app.use("*", (req, res) => {
  res.status(404).send("Page Not Found");
});
app.listen(port, (e) => {
  console.log(`Server is connected to Port ${port}`);
});
