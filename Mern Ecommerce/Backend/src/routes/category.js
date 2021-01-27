const express = require("express");
const { addCategory, getCategory } = require("../controllers/category");
const { verifyAuthentication } = require("../helpers/auth");
const { verifyAdmin } = require("../controllers/admin/auth");
const router = express.Router();

router.get("/category/fetch", getCategory);
router.post("/category/create", verifyAuthentication, verifyAdmin, addCategory);

module.exports = router;
