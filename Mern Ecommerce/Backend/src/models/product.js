const mongoose = require("mongoose");

const product = new mongoose.Schema(
  {
    name: { type: String },
    price: { type: Number },
    description: { type: String },
    createdBy: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
    category: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Category",
    },
    images : [
        {
            img: String
        }
    ]
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", product);

module.exports = { Product };
