const express = require("express");
const multer = require("multer");
const path = require("path");
const { addProduct, getProduct } = require("../controllers/product");
const { verifyAuthentication } = require("../helpers/auth");
const { verifyAdmin } = require("../controllers/admin/auth");

const router = express.Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.resolve(__dirname, ".."), "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/product/fetch", getProduct);
router.post(
  "/product/create",
  verifyAuthentication,
  verifyAdmin,
  upload.array("images"),
  addProduct
);

module.exports = router;
