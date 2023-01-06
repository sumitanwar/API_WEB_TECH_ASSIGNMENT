const mongoose = require("mongoose");
let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;
const productSchema = new Schema({
  cust: { type: ObjectId, ref: "customer" },
  Product_id: { type: String, unique: true },
  Product_type: { type: String },
  Product_name: { type: String },
  Product_price: { type: Number },
  Available_quantity: { type: Number },
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
