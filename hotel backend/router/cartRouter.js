const router = require("express").Router();
const { addToCart, removeFromCart, getCart } = require("../controller/cartCon");
const { authMidWare } = require("../middleware/auth");

router.post("/addToCart", authMidWare, addToCart);
router.post("/removeFromCart", authMidWare, removeFromCart);
router.post("/getCart", authMidWare, getCart);

module.exports = router;
