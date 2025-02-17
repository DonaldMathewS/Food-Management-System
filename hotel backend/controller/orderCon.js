const order = require("../model/orderModel");
const userModel = require("../model/userModel");
const Stripe = require("stripe");
const { STRIPE_SECRET_KEY } = require("../secret/key");
const mongoose = require("mongoose");

const stripe = new Stripe(STRIPE_SECRET_KEY);
exports.placeOrder = async (req, res) => {
  try {
    const frontendUrl = "http://localhost:5173";

    // Validate items
    if (!Array.isArray(req.body.items) || req.body.items.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid items provided" });
    }

    // Create new order
    const newOrder = new order({
      userId: req.user.id,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });
    await newOrder.save();

    // Clear cart
    await userModel.findByIdAndUpdate(req.user.id, { cartData: {} });

    // Prepare line items for Stripe
    const lineItem = req.body.items.map((item) => {
      if (!item.name || !item.price || !item.quantity) {
        throw new Error("Invalid item details");
      }
      return {
        price_data: {
          currency: "inr",
          product_data: {
            name: item.name,
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      };
    });

    // Add delivery charges
    lineItem.push({
      price_data: {
        currency: "inr",
        product_data: {
          name: "Delivery Charges",
        },
        unit_amount: 2000, // Example Rs. 20
      },
      quantity: 1,
    });

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItem,
      mode: "payment",
      success_url: `${frontendUrl}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontendUrl}/verify?success=false&orderId=${newOrder._id}`,
    });

    res.status(200).json({ success: true, sessionUrl: session.url });
  } catch (error) {
    console.error("Error in placeOrder:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};
exports.verifyOrder = async (req, res) => {
  const { orderId, success } = req.body;
  try {
    const isPaymentSuccessful = success === "true" || success === true;
    if (isPaymentSuccessful) {
      await order.findByIdAndUpdate(orderId, { payment: true });
      res.status(200).json({ success: true, message: "paid" });
    } else {
      await order.findByIdAndDelete(orderId);
      res.status(400).json({ success: false, message: " not paid " });
    }
  } catch (error) {
    res.status(401).json({ success: false, message: error.message });
  }
};
exports.userOrder = async (req, res) => {
  try {
    const userId = req.user.id;
    const Orders = await order.find({ userId: userId });
    res
      .status(200)
      .json({ success: true, data: Orders, message: "order placed" });
  } catch (error) {
    console.log(error);
    res.status(401).json({ success: false, message: error.message });
  }
};

exports.listOrder = async (req, res) => {
  try {
    const orderslist = await order.find({});
    res
      .status(200)
      .json({ success: true, data: orderslist, message: "User orders" });
  } catch (error) {
    console.log(error);
    res.status(401).json({ success: false, message: error.message });
  }
};
exports.updatestatus = async (req, res) => {
  try {
    await order.findByIdAndUpdate(req.body.orderId, {
      status: req.body.status,
    });
    res.status(200).json({ success: true, message: "Status Updated" });
  } catch (error) {
    console.log(error);
    res.status(401).json({ success: false, message: error.message });
  }
};
