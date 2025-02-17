const food = require("../model/foodModel");

exports.createitem = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;
    let imageFilename = req.file?.filename;
    const fooditem = await food.create({
      name,
      description,
      price,
      category,
      image: imageFilename,
    });
    // const fooditem = await food.create(req.body);
    res.status(200).json({
      success: true,
      message: "menu added",
      data: fooditem,
    });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};
exports.getAllItems = async (req, res) => {
  try {
    const maincousre = await food.find();
    res.status(200).json({
      success: true,
      message: "got all menu",
      data: maincousre,
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
exports.delFood = async (req, res) => {
  try {
    const menu = await food.findById(req.body.id);

    await food.findByIdAndDelete(req.body.id);
    res.status(200).json({
      success: true,
      message: "food item removed",
      data: menu,
    });
  } catch (err) {
    res.status(401).json({
      message: "food item is not deleted",
      data: error,
    });
  }
};
