const express = require("express");
const Order = require("../../Models/order");
const router = express.Router();
const bodyparser = require("body-parser");
router.use(bodyparser.json());
router.get("/orders/:orderID", async (req, res) => {
  let Orders = await Order.findOne(req.params.orderID);
  try {
    res
      .status(200)
      .json({ status: "Customer Detail Fetched Successfully", Orders });
  } catch (e) {
    res.status(403).json({ status: "Failed", message: e.message });
  }
});
router.post("/orders", async (req, res) => {
  let Orders = await Order.create(req.body);
  try {
    res.status(200).json({ status: "Order Created Successfully", Orders });
  } catch (e) {
    res.status(403).json({ Status: "Failed", message: e.message });
  }
});
router.delete("/orders/:orderID", async (req, res) => {
  let Orders = await Order.deleteOne(req.params.orderID);
  try {
    res.status(200).json({ status: "Customer Deleted Successfully" });
  } catch (e) {
    res.status(403).json({ Status: "Failed", message: e.message });
  }
});
module.exports = router;
