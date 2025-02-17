const userModel = require("../model/userModel");

exports.addToCart = async (req, res) => {
  try {
    const userId = req.user.id;
    let userData = await userModel.findById({ _id: userId });
    console.log(userData);
    let cartData = userData.cartData;
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }
    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({
      success: true,
      message: "Added to cart",
      data: cartData,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({ success: false, message: error.message });
  }
};

exports.removeFromCart = async (req, res) => {
  try {
    const userId = req.user.id;
    let userData = await userModel.findById({ _id: userId });

    let cartData = userData.cartData;

    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    }

    await userModel.findByIdAndUpdate(userId, { cartData });

    res.json({
      success: true,
      message: "removed to cart",
      data: cartData,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({ success: false, message: error.message });
  }
};

exports.getCart = async (req, res) => {
  try {
    const userId = req.user.id;
    let userData = await userModel.findById({ _id: userId });

    let cartData = userData.cartData;
    res.status(200).json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.status(401).json({ success: false, message: error.message });
  }
};
