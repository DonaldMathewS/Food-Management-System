const { required } = require("joi");
const mongoose = require("mongoose");
const foodItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
  },

  price: {
    type: Number,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const food = mongoose.model("foodItems", foodItemSchema);

module.exports = food;

// full vegetarian meals chicken briyani Fruit Charcuterie Board  Party Shrimp Orange Drink
// lemon Drink Pine apple Drink Ice Cream  Ice Cream  Coconut Rice
