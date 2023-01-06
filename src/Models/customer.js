const mongoose = require("mongoose");
let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;
const customerSchema = new Schema({
  customer_id: { type: String, unique: true },
  customer_name: { type: String },
  email: { type: String, unique: true },
  balance: { type: Number },
});
const customer = mongoose.model("customer", customerSchema);
module.exports = customer;
