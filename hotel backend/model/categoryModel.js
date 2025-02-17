const { required } = require("joi");
const mongoose = require("mongoose");

const categorySchemma = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const category = mongoose.model("category", categorySchemma);
module.exports = category;

// Main Course	:The primary dish in a meal. Includes items like steak, pasta, or curry.
// Appetizer	:Small dishes served before the main course. Examples: soups, salads, or spring rolls.
// Dessert:	Sweet dishes served after the main course. Examples: ice cream, cake, or pudding.
// Beverage:	Drinks served with meals. Examples: soft drinks, juices, coffee, or tea.
