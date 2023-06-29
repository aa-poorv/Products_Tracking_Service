const express = require("express");
const Product = require("../models/product");
const Shop = require("../models/Shop");
const router = express.Router();

router.get("/:id/new", async (req, res) => {
  const { id } = req.params;
  const shop = await Shop.findById(id);
  res.render("productNew", { id, shop });
});

router.post("/:id", async (req, res) => {
  const { name, rate, category } = req.body;
  const { id } = req.params;
  const shop = await Shop.findById(id);
  const product = new Product({ name, rate, category });
  product.shops = shop;
  shop.products.push(product);
  shop.save();
  product.save();
  res.redirect("/shop/show");
});

module.exports = router;
