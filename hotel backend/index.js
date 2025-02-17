const express = require("express");
const app = express();
// const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const hotelrouter = require("./router/hotelRouter");
const foodrouter = require("./router/foodRouter.js");
const userrouter = require("./router/userRouter");
const gotOrderinfo = require("./router/orderRouter");
const getCate = require("./router/categoryRouter");
const cart = require("./router/cartRouter.js");
const { tokenv } = require("./middleware/verfiy");
const { connectDB } = require("./config/DB.js");

connectDB();
// mongoose
//   .connect(
//     "mongodb+srv://srdonald111:admin@cluster0.a4rfg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//   )
//   .then(() => {
//     console.log(" DB connected ");
//   })
//   .catch((err) => {
//     console.log("error:", err);
//   });

app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ limit: "10000000" }));
app.use("/api", hotelrouter);
app.use("/api", foodrouter);
app.use("/images", express.static("uploads"));
app.use("/api", userrouter);
app.use("/api", cart);
app.use("/api", gotOrderinfo);
app.use("/api", getCate);

app.listen(2004, () => {
  console.log("server running (2004)");
});
