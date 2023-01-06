const { application } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const app = express();
const port = 3000;
mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://localhost/api_web_tech_assignment")
  .then(() => console.log("Connected to DB!"));
app.use(express.json());
app.use(bodyparser.json());

app.listen(port, (e) => {
  console.log(`Server is connected to Port ${port}`);
});
