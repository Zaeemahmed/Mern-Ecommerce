const { Product } = require("../models/Product");

const addProduct = async (req, res) => {
  const createdBy = req.user._id;
  const images = req.files.map((file) => {
    return {
      img: file.filename,
    };
  });
  const product = new Product({ createdBy, images, ...req.body });
  product.save((err, data) => {
    if (err)
      return res.status(400).json({
        error: err,
        message: "could not create user",
      });
    else {
      return res.json({
        ...product,
      });
    }
  });
};

const getProduct = async (req, res) => {
  Product.find().exec((err, result) => {
    if (err) {
      return res.status(400).json({ err: "some error occurred" });
    }
    return res.json({ products: result });
  });
};

module.exports = { addProduct, getProduct };
