const router = require("express").Router();
const { getCategory, getAllCat } = require("../controller/categoryCon");

router.post("/getCategory", getCategory);
router.get("/getAllCat", getAllCat);

module.exports = router;
