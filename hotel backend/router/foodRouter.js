const express = require("express");
const router = require("express").Router();
const { createitem, getAllItems, delFood } = require("../controller/foodCon");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

router.post("/createMenu", upload.single("image"), createitem);
// router.post("/createMenu", createitem);

router.get("/getmenu", getAllItems);
router.post("/delFood", delFood);
module.exports = router;
