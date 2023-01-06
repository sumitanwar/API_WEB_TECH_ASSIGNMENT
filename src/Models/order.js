const mongoose = require("mongoose");
let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;
const productSchema = new Schema({
  Product_id: { type: String },
  customer_id: { type: String },
  Product_name: { type: String },
  Quantity: { type: Number },
});
const Order = mongoose.model("Product", productSchema);
module.exports = Product;
