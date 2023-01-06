const express = require("express");
const customer = require("../../Models/customer");
const router = express.Router();
const bodyparser = require("body-parser");
router.use(bodyparser.json());

router.get("/customer/:customerID", async (req, res) => {
  let Cust = await customer.findOne(req.params.customer_id);
  try {
    res
      .status(200)
      .json({ status: "Customer Detail Fetched Successfully", Cust });
  } catch (e) {
    res.status(403).json({ status: "Failed", message: e.message });
  }
});
router.post("/customer", async (req, res) => {
  let Cust = await customer.create(req.body);
  try {
    res.status(200).json({ status: "Customer Added Successfully", Cust });
  } catch (e) {
    res.status(403).json({ Status: "Failed", message: e.message });
  }
});
router.delete("/customer/:customerID", async (req, res) => {
  let Cust = await customer.deleteOne(req.params.customer_id);
  try {
    res.status(200).json({ status: "Customer Deleted Successfully" });
  } catch (e) {
    res.status(403).json({ Status: "Failed", message: e.message });
  }
});
module.exports = router;
