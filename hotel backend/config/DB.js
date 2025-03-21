const mongoose = require("mongoose");
exports.connectDB = async () => {
  await mongoose
    .connect(
      "YOUR MANGO DB URL"
    )
    .then(() => {
      console.log(" DB connected ");
    })
    .catch((err) => {
      console.log("error:", err);
    });
};
