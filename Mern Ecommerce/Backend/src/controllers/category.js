const { Category } = require("../models/category");

const addCategory = async (req, res) => {
  const parentId = req.body.parentId;
  const category = new Category({ parentId, name: req.body.name });
  category.save((err, data) => {
    if (err) {
      return res.status(400).json({ message: "could not create category" });
    } else {
      res.status(201).json({
        ...category,
        message: "category successfully created",
      });
    }
  });
};

const getCategory = async (req, res) => {
  Category.find().exec((err, result) => {
    if (err) {
      return res.status(400).json({ err: "some error occurred" });
    }
    return res.json({ categories: result });
  });
};

module.exports = { addCategory, getCategory };
