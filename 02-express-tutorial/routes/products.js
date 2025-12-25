const express = require("express");
const router = express.Router();

const { getProducts } = require("../controllers/products.js");

router.get("/", getProducts);
router.get("/:id", getProducts);

module.exports = router;
