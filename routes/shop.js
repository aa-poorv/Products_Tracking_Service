const express = require("express");
const Product = require("../models/product");
const Shop = require("../models/Shop");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Nice Shops");
});

router.get("/show", async (req, res) => {
  const shops = await Shop.find({});
  res.render("shopShow", { shops });
});

router.get("/new", (req, res) => {
  res.render("shopNew");
});

router.get("/:id/detail", async (req, res) => {
  const { id } = req.params;
  const shop = await Shop.findById(id).populate("products");
  res.render("shopdetail", { shop });
});

router.post("/new", (req, res) => {
  const newShop = new Shop(req.body);
  newShop.save();
  res.redirect("/shop/show");
});

module.exports = router;
