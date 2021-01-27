const mongoose = require("mongoose");

const category = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    parentId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", category);

module.exports = { Category };
