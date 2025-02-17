const express = require("express");
const router = express.Router();
const {
  verifyOrder,
  placeOrder,
  userOrder,
  listOrder,
  updatestatus,
} = require("../controller/orderCon");
const { authMidWare } = require("../middleware/auth");

// router.post("/getorder", getOrder);
// router.get("/orderInfo", orderInfo);
// router.post("/patOrder/:id", patOrder);

router.post("/placeOrder", authMidWare, placeOrder);
router.post("/verifyOrder", verifyOrder);
router.post("/userOrder", authMidWare, userOrder);
router.get("/listOrder", listOrder);
router.post("/updatestatus", updatestatus);

module.exports = router;
