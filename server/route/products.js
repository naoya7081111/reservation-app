const express = require("express");
const router = express.Router();
const Product = require("../model/product");

router.get("", (req, res) => {
  Product.find({}, (err, foundProducts) => {
    res.json({ foundProducts });
  });
});

router.get("/:productId", (req, res) => {
  const productId = req.params.productId;
  Product.findById(productId, function (err, foundProducts) {
    if (!foundProducts) {
      return res.status(422).send({
        errors: [{ title: "Product Error", detail: "Product not found" }],
      });
    }
    return res.json({ foundProducts });
  });
});

module.exports = router;
