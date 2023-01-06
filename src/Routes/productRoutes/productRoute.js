const express = require("express");
const Product = require("../../Models/Product");
const router = express.Router();
const bodyparser = require("body-parser");
router.use(bodyparser.json());
router.get("/product/:productID", async (req, res) => {
  let Products = await Product.findOne(req.params.productID);
  try {
    res
      .status(200)
      .json({ status: "Product Detail Fetched Successfully", Products });
  } catch (e) {
    res.status(403).json({ status: "Failed", message: e.message });
  }
});
router.get("/product/:productType", async (req, res) => {
  let Products = await Product.findOne(req.params.productType);
  try {
    res
      .status(200)
      .json({ status: "Product Detail Fetched Successfully", Products });
  } catch (e) {
    res.status(403).json({ status: "Failed", message: e.message });
  }
});
router.post("/product", async (req, res) => {
  let Products = await Product.create(req.body);
  try {
    res.status(200).json({ status: "Product Added Successfully", Products });
  } catch (e) {
    res.status(403).json({ Status: "Failed", message: e.message });
  }
});
router.delete("/product/:productID", async (req, res) => {
  let Products = await Product.deleteOne(req.params.productID);
  try {
    res.status(200).json({ status: "Customer Deleted Successfully" });
  } catch (e) {
    res.status(403).json({ Status: "Failed", message: e.message });
  }
});
module.exports = router;
